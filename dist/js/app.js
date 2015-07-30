(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _collectionsBabyStep = require('./collections/baby-step');

var _collectionsBabyStep2 = _interopRequireDefault(_collectionsBabyStep);

var _viewsNavigation = require('./views/navigation');

var _viewsNavigation2 = _interopRequireDefault(_viewsNavigation);

var _viewsContent = require('./views/content');

/**
 * Handles the launching of the application by setting up the container views
 *
 * @module application
 */

var _viewsContent2 = _interopRequireDefault(_viewsContent);

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  /**
   * Creates a collection to hold the baby step data and creates the container views
   *
   * @function
   * @return {undefined} 
   */

  _default.prototype.start = function start() {
    var babySteps = new _collectionsBabyStep2['default']();

    this.initNavigation(babySteps);
    this.initContent(babySteps);
  };

  /**
   * Creates the container view for the navigation sidebar
   *
   * @function
   * @param {module:collection/baby-step} babySteps The baby steps collection
   * @return {undefined}
   */

  _default.prototype.initNavigation = function initNavigation(babySteps) {
    new _viewsNavigation2['default'](babySteps);
  };

  /**
   * Creates the container view for the content area
   *
   * @function
   * @param {module:collection/baby-step} babySteps The baby steps collection
   * @return {undefined}
   */

  _default.prototype.initContent = function initContent(babySteps) {
    new _viewsContent2['default'](babySteps);
  };

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];


},{"./collections/baby-step":3,"./views/content":12,"./views/navigation":15}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var app = new _application2['default']();
app.start();


},{"./application":1}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkCollection = require('../framework/collection');

var _frameworkCollection2 = _interopRequireDefault(_frameworkCollection);

var _modelsBabyStep = require('../models/baby-step');

/**
 * Collection of BabyStepModels
 *
 * @module collections/baby-step
 * @augments {module:framework/collection}
 */

var _modelsBabyStep2 = _interopRequireDefault(_modelsBabyStep);

var _default = (function (_Collection) {
    _inherits(_default, _Collection);

    /**
     * Sets the model class for the collection and starts initialization
     *
     * @function
     * @return {undefined}
     */

    function _default() {
        _classCallCheck(this, _default);

        _Collection.call(this);

        this.modelClass = _modelsBabyStep2['default'];
        this.initBabySteps();
    }

    /**
     * Adds 7 BabyStepModels to the collection, inits the first to active
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.initBabySteps = function initBabySteps() {
        for (var i = 0; i < 7; i++) {
            var model = new this.modelClass({
                id: i,
                step: i + 1,
                active: i === 0
            });

            this.push(model);
            this.listen(model, 'activated', this.stepActivated);
        }
    };

    /**
     * Sets all models `active` property to false, except for the model passed
     *
     * @function
     * @param {module:models/baby-step} model The active model
     * @return {undefined}
     */

    _default.prototype.stepActivated = function stepActivated(model) {
        this.each(function (current) {
            if (current !== model) {
                current.set('active', false);
            }
        });
    };

    return _default;
})(_frameworkCollection2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/collection":6,"../models/baby-step":9}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkCollection = require('../framework/collection');

var _frameworkCollection2 = _interopRequireDefault(_frameworkCollection);

var _modelsFriend = require('../models/friend');

/**
 * Collection of BabyStepModels
 *
 * @module collections/friends
 * @augments {module:framework/collection}
 */

var _modelsFriend2 = _interopRequireDefault(_modelsFriend);

var _default = (function (_Collection) {
  _inherits(_default, _Collection);

  /**
   * Sets the model class for the collection and starts initialization
   *
   * @function
   * @return {undefined}
   */

  function _default() {
    _classCallCheck(this, _default);

    _Collection.call(this);

    this.modelClass = _modelsFriend2['default'];
    this.url = '/dist/api/baby-steps.json';
    this.resource = 'friends';
  }

  return _default;
})(_frameworkCollection2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/collection":6,"../models/friend":10}],5:[function(require,module,exports){
/**
 * Base class all other library classes extend
 *
 * Contains accessor ( get() and set() ) methods and a mechanism for publishing event
 * notifications to subscribers, as well as the ability to subscribe to other classes
 * notifications
 *
 * @module framework/base
 */
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _default = (function () {

    /**
     * Initializes the data property
     *
     * @function
     * @return {undefined}
     */

    function _default() {
        _classCallCheck(this, _default);

        this.data = {};
        this.subscribers = {};
    }

    /**
     * Getter accessor for a property on the data object
     *
     * @function
     * @param {string} property Name of the property being accessed
     */

    _default.prototype.get = function get(property) {
        return this.data[property];
    };

    /**
     * Subscribes to a given event on a given object
     *
     * @function
     * @param {module:framework/base} publisher Object that will notify of the event
     * @param {string} eventName Name of the event being subscribed to
     * @param {function} callback Function to be called when the publisher notifies
     * @returns {undefined}
     */

    _default.prototype.listen = function listen(publisher, eventName, callback) {
        if (!Array.isArray(publisher.subscribers[eventName])) {
            publisher.subscribers[eventName] = [];
        }
        publisher.subscribers[eventName].push({
            callback: callback,
            subscriber: this
        });
    };

    /**
     * Notifies subscribers that an event occurred. Subscribers subcribe using their own listen method.
     *
     * @function
     * @param {string} eventName Name of the event that has occurred
     * @returns {undefined}
     */

    _default.prototype.notify = function notify(eventName) {
        if (Array.isArray(this.subscribers[eventName])) {
            for (var _iterator = this.subscribers[eventName], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var item = _ref;

                item.callback.call(item.subscriber, this);
            }
        }
    };

    /**
     * Setter accessor for a property on the data object
     *
     * @function
     * @param {string} property Name of the property being set
     * @param {*} value Value to set the property
     * @returns {undefined}
     */

    _default.prototype.set = function set(property, value) {
        if (value !== this.data[property]) {
            this.data[property] = value;
            this.notify('change');
        }
    };

    return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];


},{}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _model = require('./model');

/**
 * An ordered set of models
 *
 * @function
 * @module framework/collection
 * @augments {module:framework/base}
 */

var _model2 = _interopRequireDefault(_model);

var _default = (function (_Base) {
    _inherits(_default, _Base);

    /**
     * Initializes model instances array
     *
     * @function
     * @return {undefined}
     */

    function _default() {
        _classCallCheck(this, _default);

        _Base.call(this);

        this.models = [];
        this.url = '';
        this.resource = null;
        this.modelClass = _model2['default'];
    }

    /**
     * Adds a model to the collection. Adds a change listener on the model
     *
     * @function
     * @param  {module:framework/model} model The model to be added to the collection
     * @return {undefined}
     */

    _default.prototype.push = function push(model) {
        var _this = this;

        if (!(model instanceof _model2['default'])) {
            throw 'push() method expects to be passed a model';
        }

        this.models.push(model);

        this.listen(model, 'change', function () {
            _this.notify('change');
        });
    };

    /**
     * Iterates over the models in the collection
     *
     * @function
     * @param {function} callback A callback function with the item as a parameter
     * @return {undefined}
     */

    _default.prototype.each = function each(callback) {
        for (var _iterator = this.models, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var i = _ref;

            callback(i);
        }
    };

    /**
     * Filter the collection with a given callback function. Shorthand to models.filter()
     *
     * @function
     * @param {function} callback The callback used to filter the Collection
     * @returns {array.<module:framework/model>[]}
     */

    _default.prototype.filter = function filter(callback) {
        return this.models.filter(callback);
    };

    /**
     * Loads data for the collection from a GET XHR request and initializes models
     * for each record returned in the JSON response.
     *
     * @function
     * @param {function} callback A callback to be called on load success
     * @return {undefined}
     */

    _default.prototype.load = function load(callback) {
        var _this2 = this;

        if (typeof this.resource !== 'string') {
            throw 'Resource must be a string to load a Collection';
        }

        $.getJSON(this.url, function (response) {
            var collectionData = response[_this2.resource];
            var totalRecords = collectionData.length;

            $.each(collectionData, function (index, recordData) {
                var model = new _this2.modelClass(recordData);

                _this2.push(model);

                if (index === totalRecords - 1) {
                    _this2.notify('loaded');

                    if ('function' === typeof callback) {
                        callback();
                    }
                }
            });
        });
    };

    return _default;
})(_base2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"./base":5,"./model":7}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _base = require('./base');

/**
 * Loads and holds data and notifies subscribers of changes
 *
 * @module framework/model
 * @augments {module:framework/base}
 */

var _base2 = _interopRequireDefault(_base);

var _default = (function (_Base) {
    _inherits(_default, _Base);

    /**
     * Initializes the model with data if any is passed
     *
     * @function
     * @param {object} data Data with which to initialize the model
     * @return {undefined}
     */

    function _default(data) {
        _classCallCheck(this, _default);

        _Base.call(this);

        if (typeof data !== 'object') {
            throw 'Model must be initialized with an object';
        } else {
            this.data = data;
        }
    }

    return _default;
})(_base2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"./base":5}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _base = require('./base');

/**
 * Acts as a liason between DOM elements and models
 *
 * @module framework/view
 * @augments {module:framework/base}
 */

var _base2 = _interopRequireDefault(_base);

var _default = (function (_Base) {
  _inherits(_default, _Base);

  function _default() {
    _classCallCheck(this, _default);

    _Base.apply(this, arguments);
  }

  return _default;
})(_base2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"./base":5}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkModel = require('../framework/model');

/**
 * @module model/baby-step
 * @augments {module:framework/model}
 */

var _frameworkModel2 = _interopRequireDefault(_frameworkModel);

var _default = (function (_Model) {
  _inherits(_default, _Model);

  function _default() {
    _classCallCheck(this, _default);

    _Model.apply(this, arguments);
  }

  return _default;
})(_frameworkModel2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/model":7}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkModel = require('../framework/model');

/**
 * @module model/friend
 * @augments {module:framework/model}
 */

var _frameworkModel2 = _interopRequireDefault(_frameworkModel);

var _default = (function (_Model) {
  _inherits(_default, _Model);

  function _default() {
    _classCallCheck(this, _default);

    _Model.apply(this, arguments);
  }

  return _default;
})(_frameworkModel2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/model":7}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkView = require('../framework/view');

/**
 * Handles the individual articles for each baby step in the main content area
 *
 * @module views/content-item
 * @augments {module:framework/view}
 */

var _frameworkView2 = _interopRequireDefault(_frameworkView);

var _default = (function (_View) {
    _inherits(_default, _View);

    /**
     * Intitializes the view model, jquery element, and event listeners
     *
     * @function
     * @param {module:models/baby-step} model The model to attach to the view
     * @return {undefined}
     */

    function _default(model) {
        _classCallCheck(this, _default);

        _View.call(this);

        this.model = model;
        this.$el = $('#content .step' + model.get('step'));
        this.addEvents();
    }

    /**
     * Adds an event listener for the model's change event
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.addEvents = function addEvents() {
        this.listen(this.model, 'change', this.refresh);
    };

    /**
     * Refreshes the view's state by triggering a show or hide animation
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.refresh = function refresh() {
        var active = this.model.get('active');

        if (true === active) {
            this.transitionToVisible();
        } else {
            this.transitionToHidden();
        }
    };

    /**
     * Fades the element out
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.transitionToHidden = function transitionToHidden() {
        var _this = this;

        this.$el.fadeOut(500, function () {
            _this.$el.addClass('hidden');
        });

        this.$el.attr('aria-hidden', true);
    };

    /**
     * Fades the element in
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.transitionToVisible = function transitionToVisible() {
        var _this2 = this;

        this.$el.fadeIn(500, function () {
            _this2.$el.removeClass('hidden');
        });

        this.$el.attr('aria-hidden', false);
    };

    return _default;
})(_frameworkView2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/view":8}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkView = require('../framework/view');

var _frameworkView2 = _interopRequireDefault(_frameworkView);

var _contentItem = require('./content-item');

var _contentItem2 = _interopRequireDefault(_contentItem);

var _friendItem = require('./friend-item');

var _friendItem2 = _interopRequireDefault(_friendItem);

var _collectionsFriends = require('../collections/friends');

/**
 * A view to represent the content panes
 *
 * @module views/content
 * @augments {module:framework/view}
 */

var _collectionsFriends2 = _interopRequireDefault(_collectionsFriends);

var _default = (function (_View) {
    _inherits(_default, _View);

    /**
     * Adds the collection to the view and sets up the content item views
     *
     * @function
     * @param {module:collections/baby-step} babyStepCollection The baby step collection
     * @return {undefined}
     */

    function _default(babyStepCollection) {
        _classCallCheck(this, _default);

        _View.call(this);

        this.babyStepCollection = babyStepCollection;
        this.friendsCollection = new _collectionsFriends2['default']();

        this.$el = $('#content');
        this.initContentItems();

        this.friendsCollection.load();
    }

    /**
     * Loops over the collection and adds a child view and friends view for each model
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.initContentItems = function initContentItems() {
        var _this = this;

        this.contentItems = [];
        this.friendItems = [];

        this.babyStepCollection.each(function (model) {
            _this.addContentItem(model);
        });
    };

    /**
     * Adds a child view and a friends view using a model from the collection
     *
     * @function
     * @param {module:framework/model} model The model to be attached to the view being added
     * @return {undefined}
     */

    _default.prototype.addContentItem = function addContentItem(model) {
        this.contentItems.push(new _contentItem2['default'](model));

        this.friendItems.push(new _friendItem2['default'](model, this.friendsCollection));
    };

    return _default;
})(_frameworkView2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../collections/friends":4,"../framework/view":8,"./content-item":11,"./friend-item":13}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkView = require('../framework/view');

/**
 * Handles the friends lists in the baby steps content articles
 *
 * @module views/fried-item
 * @augments {module:framework/view}
 */

var _frameworkView2 = _interopRequireDefault(_frameworkView);

var _default = (function (_View) {
    _inherits(_default, _View);

    /**
     * Intitializes the view
     *
     * @function
     * @param {module:models/baby-step} babyStepModel The baby step model for this view
     * @param {module:collections/friends} friendsCollection The collection of all friends
     * @return {undefined}
     */

    function _default(babyStepModel, friendsCollection) {
        _classCallCheck(this, _default);

        _View.call(this);

        this.babyStepModel = babyStepModel;
        this.friendsCollection = friendsCollection;

        this.$el = $('#content .step' + babyStepModel.get('step') + ' .friends-view');
        this.addEvents();
    }

    /**
     * Subscribes to the `loaded` event on the friends collection
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.addEvents = function addEvents() {
        this.listen(this.friendsCollection, 'loaded', this.render);
    };

    /**
     * Filters the friends collection by those in current step and inserts the appropriate
     * HTML into the DOM
     *
     * @function
     * @returns  {undefined}
     */

    _default.prototype.render = function render() {
        var babyStep = this.babyStepModel.get('step');

        var friends = this.friendsCollection.filter(function (friend) {
            return friend.get('babyStep') === babyStep;
        });

        this.$el.html(this.getHtml(friends, babyStep));
    };

    /**
     * Generates the HTML to display a friend model as a link
     *
     * @function
     * @param {module:models/friend} friend The friend model to be rendered as a link
     * @returns {string}
     */

    _default.prototype.getFriendLink = function getFriendLink(friend) {
        var name = friend.get('firstName') + friend.get('lastName');
        var html = '<a href="javascript:void()">' + name + '</a>';

        return html;
    };

    /**
     * Returns the HTML to be inserted into the DOM
     *
     * @function
     * @param {array<module:models/friend>} friends An array of friend models filtered by step
     * @param {number} babyStep The number of the current baby step
     * @returns {string}
     */

    _default.prototype.getHtml = function getHtml(friends, babyStep) {
        var html = '';
        var content = '';

        if (0 === friends.length) {
            return html;
        }

        var firstFriendLink = this.getFriendLink(friends[0]);

        switch (friends.length) {
            case 1:
                content += firstFriendLink + ' is';
                break;
            case 2:
                content += firstFriendLink + ' and ' + this.getFriendLink(friends[1]) + ' are';
                break;
            case 3:
                content += firstFriendLink + ', ' + this.getFriendLink(friends[1]) + ', and 1 other friend are';
                break;
            default:
                content += firstFriendLink + ', ' + this.getFriendLink(friends[1]) + ', and ' + (friends.length - 2) + ' other friends are';
        }

        content += ' also in Baby Step ' + babyStep;

        html = '<p class="content-footer">' + content + '</p>';

        return html;
    };

    return _default;
})(_frameworkView2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/view":8}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkView = require('../framework/view');

/**
 * View that handles the individual navigation items
 *
 * @module  views/navigation-item
 * @augments {module:framework/view}
 */

var _frameworkView2 = _interopRequireDefault(_frameworkView);

var _default = (function (_View) {
    _inherits(_default, _View);

    /**
     * Initializes the view and adds events
     *
     * @function
     * @param {module:models/baby-step} model The baby step to associate with this view
     * @return {undefined}
     */

    function _default(model) {
        _classCallCheck(this, _default);

        _View.call(this);

        this.model = model;
        this.$el = $('#navigation .step' + model.get('step'));
        this.addEvents();
    }

    /**
     * Adds a listener on the model change event to refresh the active state
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.addEvents = function addEvents() {
        var _this = this;

        this.listen(this.model, 'change', this.refresh);

        this.$el.click(function (e) {
            e.preventDefault();
            _this.model.set('active', true);
            _this.model.notify('activated');
        });
    };

    /**
     * Changes the state in the DOM to active/inactive depending on the model's state
     *
     * @function
     * @returns {undefined}
     */

    _default.prototype.refresh = function refresh() {
        var active = this.model.get('active');

        if (true === active) {
            this.$el.addClass('active');
            this.$el.attr('aria-selected', true);
        } else {
            this.$el.removeClass('active');
            this.$el.attr('aria-selected', false);
        }
    };

    return _default;
})(_frameworkView2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/view":8}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _frameworkView = require('../framework/view');

var _frameworkView2 = _interopRequireDefault(_frameworkView);

var _navigationItem = require('./navigation-item');

/**
 * A view to represent the navigation sidebar
 *
 * @module views/navigation
 * @augments {module:framework/view}
 */

var _navigationItem2 = _interopRequireDefault(_navigationItem);

var _default = (function (_View) {
    _inherits(_default, _View);

    /**
     * Adds the collection to the view and sets up the nav item views
     *
     * @function
     * @return {undefined}
     */

    function _default(collection) {
        _classCallCheck(this, _default);

        _View.call(this);

        this.collection = collection;
        this.$el = $('#navigation');
        this.initNavigationItems();
    }

    /**
     * Loops over the collection and adds a child view for each model
     *
     * @function
     * @return {undefined}
     */

    _default.prototype.initNavigationItems = function initNavigationItems() {
        var _this = this;

        this.navigationItems = [];

        this.collection.each(function (model) {
            _this.addNavigationItem(model);
        });
    };

    /**
     * Adds a child view using a model from the collection
     *
     * @function
     * @param {'framework/model'} model The model to be attached to the view being added
     * @return {undefined}
     */

    _default.prototype.addNavigationItem = function addNavigationItem(model) {
        this.navigationItems.push(new _navigationItem2['default'](model));
    };

    return _default;
})(_frameworkView2['default']);

exports['default'] = _default;
module.exports = exports['default'];


},{"../framework/view":8,"./navigation-item":14}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
