
//lightweight utility acts as a jQuery replacement for element manipulation
//this utility also includes methods for selecting dynamic feed content

var util = (function() {

    return {
        'addClass': function($el, $classname){
            util.appendClass($el, $classname);
        },
        'addChild': function($parent, $child){
            $parent.appendChild($child);
            return $child;
        },
        'ajax': function($req){

        },
        'appendClass': function($el, $classname) {
            if(!util.hasClass($el, $classname))
                $el.className = $el.className + ' ' + $classname;
        },
        'attr': function($elem, $attr){
            return $elem.getAttribute($attr);
        },
        'class': function($class, $target) {
            var $elem = $target || document;
            return $elem.getElementsByClassName($class);
        },
        'create': function($elem, $args){
            var el = document.createElement($elem);
                if($args.id !== null)    el.id = $args.id;
                if($args.class !== null)    util.appendClass(el, $args.class);
            return el;
        },
        'hasClass': function($el, $class) {
            if ($el.className  === "") return false;
            else {
                var elclass = ' ' + $el.className + ' ',
                    nuclass = ' ' + $class + ' ';

                return elclass.indexOf(nuclass) !== -1;
            }
        },
        'id': function($id, $target) {
            var $elem = $target || document;
            return $elem.getElementById($id);
        },
        'parent': function($selector){
            return $selector.parentNode;
        },
        'remove': function($selector, $target, $pselector) {
            var $elem = $target || document,
                $parent = $elem.querySelector($pselector),
                $child = $elem.querySelector($selector);
            return $parent.removeChild($child);
        },
        'removeClass': function($el, $classname){
            if(util.hasClass($el, $classname) === true){
                var elclass = ' ' + $el.className + ' ',
                    replacement = ' ' + $classname + ' ',
                    strippedClass = elclass.replace(replacement, ' ');
                    $el.className = strippedClass.trim();
            }
        },
        'select': function($selector, $target) {
            var $elem = $target || document;
            return $elem.querySelector($selector);
        },
        'selectAll': function($selector, $target) {
            var $elem = $target || document;
            return $elem.querySelectorAll($selector);
        },
        'tag': function($tag, $target) {
            var $elem = $target || document;
            return $elem.getElementsByTagName($tag);
        },
        'contentSelect': function(obj) {
            var feed = obj.feed;
            var selector = obj.selector;
            var selectorID = obj.selectorID;
            
            console.log('selecting content... ' + feed + ' :: '  + selector + ' :: ' + selectorID);
            for (var i = 0; i < dynamicContent[feed].length; ++i) { 
                console.log('looping feeds');
                if (dynamicContent[feed][i][selector] === selectorID) {
                    console.log('selector matched');
                    for (var id in dynamicContent[feed][i]) {
                        var fvalue = dynamicContent[feed][i][id];
                        console.log('fvalue = ' + fvalue);

                        if (id === selector && fvalue === selectorID) {
                            return dynamicContent[feed][i];
                        }

                    }
                }
            }
        },
    };

})();