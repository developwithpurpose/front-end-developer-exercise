(
    function (document, window)
    {
        "use strict";

        var loadedModules = {};

        if (window.bootstrap) {
            scripts([window.bootstrap]);
        }

        /**
         * Add a script to the document.
         *
         * Normally I do this type of loading through RequireJS, but as I'm only
         * allowed jQuery for this particular code challenge, I thought it would
         * be interesting to write a rudimentary replacement.
         *
         * This basically is just here for managing global dependencies, and making
         * sure that load orders are respected, so I don't have to do so repeatedly
         * in individual files.
         *
         * @param url
         * @param callback
         */
        function script(url, callback)
        {
            var node = document.createElement("script");
            node.async = true;
            node.type = "text/javascript";
            node.charset = "utf-8";

            if (typeof callback === "function") {
                onLoad(node, callback);
            }

            node.src = url;
            (document.head || document.getElementsByTagName("head")[0]).appendChild(node);
            return node;
        }

        /**
         * Add a load handler to the provided node
         *
         * @param node
         * @param callback
         */
        function onLoad(node, callback)
        {
            if (node.readyState === "complete") {
                callback();
            } else if (node.attachEvent) {
                node.attachEvent("onreadystatechange", function(e) {
                    if ((e.currentTarget || e.srcElement).readyState === "loaded") {
                        callback();
                    }
                });
            } else if(node.addEventListener) {
                node.addEventListener("load", callback, false);
            }
        }

        /**
         * Add multiple scripts to the document. The provided callback will fire only
         * when it's dependencies are loaded and executed.
         *
         * @param urls
         * @param callback
         */
        function scripts(urls, callback) {
            if (urls.length === 0) {
                callback();
            } else {
                var loaded = 0,
                    output = [];

                for (var i = 0; i < urls.length; i++) {
                    var url = urls[i],
                        moduleBuffer = getModuleBuffer(url);

                    moduleBuffer.buffer(function() {
                        loaded++;
                        if (loaded === urls.length && typeof callback === "function") {
                            callback();
                        }
                    });

                    output.push(moduleBuffer);
                }
                return output;
            }
        }

        /**
         * Creates a callback buffer for a particular URL, and loads the script.
         *
         * While the script is loading, it will hold onto any callbacks it receives.
         * Once it is loaded, it will sequentially execute each callback in order (FIFO),
         * and replace the buffering functionality with an immediate execution call.
         *
         * @param url
         * @returns {ModuleBuffer}
         */
        function getModuleBuffer(url) {
            if (typeof loadedModules[url] === "undefined") {
                loadedModules[url] = new ModuleBuffer(url);
            }
            return loadedModules[url];
        }

        /**
         * Responsible for handling how we access Modules
         *
         * @param url
         * @constructor
         */
        function ModuleBuffer(url) {

            var self = this;

            /**
             * Module callbacks waiting for this dependency
             * @type {Array}
             */
            self.modulesWaiting = [];

            /**
             * The method called by buffer()
             * @param cb
             * @private
             */
            self.__delegate = function (cb) {
                self.modulesWaiting.push(cb);
            };

            /**
             * Takes a callback to be called once this resource is ready.
             * @param cb
             */
            self.buffer = function(cb) {
                self.__delegate(cb);
            };

            /**
             * The actual script node. The callback on this script is what ensures that
             * load orders are respected and dependencies are appropriately available.
             * @type {HTMLScriptElement}
             */
            self.script = script(
                url,
                function () {
                    var deps = self.pendingDependencies();
                    if(deps.length === 0) {
                        self.complete();
                    } else {
                        var pending = deps.length;
                        for (var i in deps) {
                            deps[i].buffer(function () {
                                pending--;
                                if (pending === 0) {
                                    self.complete();
                                }
                            });
                        }
                    }
                }
            );

            /**
             * The output of this method's use() call
             * @type {null|*}
             */
            self.module = null;

            /**
             * The dependencies within this module
             * @type {Array}
             */
            self.dependencies = [];

            /**
             * Whether or not this method has loaded
             * @type {boolean}
             */
            self.loaded = false;

            /**
             * The url this resource came from.
             * @type {string}
             */
            self.url = url;

        }

        /**
         * Complete the module by
         */
        ModuleBuffer.prototype.complete = function () {
            this.loaded = true;
            for (var i = 0; i < this.modulesWaiting.length; i++) {
                if (typeof this.modulesWaiting[i] === "function") {
                    this.modulesWaiting[i]();
                }
                delete this.modulesWaiting[i];
            }
            this.__delegate = function(cb) {
                cb();
            };
        };

        /**
         * @returns {Array}
         */
        ModuleBuffer.prototype.pendingDependencies = function () {
            var output = [];
            for (var i in this.dependencies)
            {
                if (!loadedModules[this.dependencies[i]].loaded) {
                    output.push(loadedModules[this.dependencies[i]]);
                }
            }
            return output;
        };

        /**
         * Scans the loadedModules for either a module with a script in an "interactive" state (IE) or
         * the last added script (Everyone else) and returns it.
         *
         * @returns {boolean|ModuleBuffer}
         */
        function getActiveModuleBuffer()
        {
            var active = false;
            for (var i in loadedModules) {
                if (typeof loadedModules[i].script.readyState === "undefined" || loadedModules[i].script.readyState === "interactive") {
                    active = loadedModules[i];
                }
            }
            return active;
        }

        /**
         * Public API.
         *
         * @param {[...string[]]} deps
         * @param {function} callback
         */
        window.use = function () {
            var deps = [],
                callback;

            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === "string") {
                    deps.push(arguments[i]);
                } else {
                    callback = arguments[i];
                }
            }

            var modBuf = getActiveModuleBuffer();
            modBuf.dependencies = deps;

            var wrapped_fn = function()
            {
                if (callback) {
                    modBuf.module = callback();
                }
                modBuf.complete();
                return modBuf.module;
            };
            scripts(deps, wrapped_fn);

        };
    }
) (document, window);
