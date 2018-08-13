/**
 * Add dataset support to elements
 * No globals, no overriding prototype with non-standard methods, 
 *   handles CamelCase properly, attempts to use standard 
 *   Object.defineProperty() (and Function bind()) methods, 
 *   falls back to native implementation when existing
 * Inspired by http://code.eligrey.com/html5/dataset/ 
 *   (via https://github.com/adalgiso/html5-dataset/blob/master/html5-dataset.js )
 * Depends on Function.bind and Object.defineProperty/Object.getOwnPropertyDescriptor (polyfills below)
 * All code below is Licensed under the X11/MIT License
*/

// Inspired by https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
Function.prototype.bind||(Function.prototype.bind=function(t){"use strict";if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var o=Array.prototype.slice.call(arguments,1),n=this,i=function(){},r=function(){return n.apply(this instanceof i&&t?this:t,o.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,r.prototype=new i,r});

/*
 * Xccessors Standard: Cross-browser ECMAScript 5 accessors
 * http://purl.eligrey.com/github/Xccessors
 * 
 * 2010-06-21
 * 
 * By Eli Grey, http://eligrey.com
 * 
 * A shim that partially implements Object.defineProperty,
 * Object.getOwnPropertyDescriptor, and Object.defineProperties in browsers that have
 * legacy __(define|lookup)[GS]etter__ support.
 * 
 * Licensed under the X11/MIT License
 *   See LICENSE.md
*/

// Removed a few JSLint options as Notepad++ JSLint validator complaining and 
//   made comply with JSLint; also moved 'use strict' inside function
/*jslint white: true, undef: true, plusplus: true,
  bitwise: true, regexp: true, newcap: true, maxlen: 90 */

/*! @source http://purl.eligrey.com/github/Xccessors/blob/master/xccessors-standard.js*/
if(function(){"use strict";var e=Object.prototype,t=e.__defineGetter__,r=e.__defineSetter__,n=e.__lookupGetter__,o=e.__lookupSetter__,a=e.hasOwnProperty;t&&r&&n&&o&&(Object.defineProperty||(Object.defineProperty=function(e,i,c){if(arguments.length<3)throw new TypeError("Arguments not optional");if(i+="",a.call(c,"value")&&(n.call(e,i)||o.call(e,i)||(e[i]=c.value),a.call(c,"get")||a.call(c,"set")))throw new TypeError("Cannot specify an accessor and a value");if(!(c.writable&&c.enumerable&&c.configurable))throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable.");return c.get&&t.call(e,i,c.get),c.set&&r.call(e,i,c.set),e}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(e,t){if(arguments.length<2)throw new TypeError("Arguments not optional.");t+="";var r={configurable:!0,enumerable:!0,writable:!0},i=n.call(e,t),c=o.call(e,t);return a.call(e,t)?i||c?(delete r.writable,r.get=r.set=void 0,i&&(r.get=i),c&&(r.set=c),r):(r.value=e[t],r):r}),Object.defineProperties||(Object.defineProperties=function(e,t){var r;for(r in t)a.call(t,r)&&Object.defineProperty(e,r,t[r])}))}(),!(document.documentElement.dataset||Object.getOwnPropertyDescriptor(Element.prototype,"dataset")&&Object.getOwnPropertyDescriptor(Element.prototype,"dataset").get)){var propDescriptor={enumerable:!0,get:function(){"use strict";var e,t,r,n,o,a,i=this.attributes,c=i.length,l=function(e){return e.charAt(1).toUpperCase()},p=function(){return this},s=function(e,t){return void 0!==t?this.setAttribute(e,t):this.removeAttribute(e)};try{({}).__defineGetter__("test",function(){}),t={}}catch(e){t=document.createElement("div")}for(e=0;e<c;e++)if((a=i[e])&&a.name&&/^data-\w[\w\-]*$/.test(a.name)){r=a.value,o=(n=a.name).substr(5).replace(/-./g,l);try{Object.defineProperty(t,o,{enumerable:this.enumerable,get:p.bind(r||""),set:s.bind(this,n)})}catch(e){t[o]=r}}return t}};try{Object.defineProperty(Element.prototype,"dataset",propDescriptor)}catch(e){propDescriptor.enumerable=!1,Object.defineProperty(Element.prototype,"dataset",propDescriptor)}}
