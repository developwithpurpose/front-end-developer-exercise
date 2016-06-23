//requires polyfills.js

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
        'ajax': function($req, $success){
            var xh = new XMLHttpRequest();
            xh.onreadystatechange = function(){
                if(xh.readyState === 4 && xh.status === 200){
                    $success(xh.responseText);                   
                }
            };
            xh.open("GET", $req, true);
            xh.send();
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
        'sort': function(a, b){
             if (a.lastName < b.lastName)
                return -1;
              if (a.lastName > b.lastName)
                return 1;
              return 0; 
        },
        'tag': function($tag, $target) {
            var $elem = $target || document;
            return $elem.getElementsByTagName($tag);
        }
    };

})();