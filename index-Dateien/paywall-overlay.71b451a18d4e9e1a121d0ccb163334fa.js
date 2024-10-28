(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:String(n)}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function s(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,u(e,t,"get"))}function f(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,u(e,t,"set"),n),n}function p(e,t,n){v(e,t),t.set(e,n)}function v(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var d=new WeakMap,b=new WeakMap,w=new WeakMap,h=new WeakMap,m=new WeakSet,g=new WeakMap,j=function(){function t(n){var r,o,i=this;e(this,t),v(r=this,o=m),o.add(r),p(this,d,{writable:!0,value:void 0}),p(this,b,{writable:!0,value:void 0}),p(this,w,{writable:!0,value:function(e){e.target instanceof HTMLElement&&"DIALOG"===e.target.nodeName&&y(i,m,_).call(i,"dismiss")}}),p(this,h,{writable:!0,value:function(){y(i,m,_).call(i,"close")}}),p(this,g,{writable:!0,value:function(){var e=s(i,b).querySelector("[autofocus]");(null!=e?e:s(i,b)).focus()}}),f(this,b,n),f(this,d,s(this,b).querySelector(".js-dialog__close-button"))}return o(t,[{key:"init",value:function(){var e;s(this,b).addEventListener("click",s(this,w)),null===(e=s(this,d))||void 0===e||e.addEventListener("click",s(this,h))}},{key:"openModal",value:function(){s(this,b).showModal(),requestAnimationFrame(s(this,g))}}]),t}();function _(e){s(this,b).close(e)}function k(e,n,r){return n=a(n),function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}(e,O()?Reflect.construct(n,r||[],a(e).constructor):n.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function M(e,t,n){S(e,t),t.set(e,n)}function S(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var E=new WeakMap,W=new WeakMap,T=new WeakMap,P=new WeakMap,q=new WeakMap,L=new WeakMap,R=new WeakMap,C=new WeakMap,x=new WeakSet,B=function(t){function n(t,r){var o;e(this,n);var a,l,c=t.querySelector(".js-paywall-overlay__modal");return o=k(this,n,[c]),S(a=i(o),l=x),l.add(a),M(i(o),E,{writable:!0,value:void 0}),M(i(o),W,{writable:!0,value:void 0}),M(i(o),T,{writable:!0,value:void 0}),M(i(o),P,{writable:!0,value:void 0}),M(i(o),q,{writable:!0,value:void 0}),M(i(o),L,{writable:!0,value:void 0}),M(i(o),R,{writable:!0,value:void 0}),M(i(o),C,{writable:!0,value:void 0}),f(i(o),E,r),f(i(o),W,r.config.get("overlays")),f(i(o),T,t),f(i(o),P,c),f(i(o),q,t.querySelector(".js-paid-barrier__title")),f(i(o),L,t.querySelector(".js-paid-barrier__intro")),f(i(o),R,t.querySelector(".js-paid-barrier__logo")),f(i(o),C,t.querySelector(".js-paid-barrier__button--cta")),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(n,t),o(n,[{key:"init",value:function(){l(a(n.prototype),"init",this).call(this),s(this,P)instanceof HTMLElement?function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,x,H).call(this):s(this,E).log.warn("Paywall",'<div class="js-paywall-overlay__modal">...</div> is required.')}}]),n}(j);function H(){var e=this;s(this,E).eventObserver.add("paywall-overlay:open-modal",(function(t){var n,r,o;(s(e,q)&&(s(e,q).textContent=s(e,W)["".concat(t)].title),s(e,L)&&(s(e,L).innerHTML=s(e,W)["".concat(t)].intro),s(e,R))&&(null!==(r=s(e,W)["".concat(t)].logo)&&void 0!==r&&r.ariaLabel&&(s(e,R).ariaLabel=s(e,W)["".concat(t)].logo.ariaLabel),null!==(o=s(e,W)["".concat(t)].logo)&&void 0!==o&&o.brandIdentifier&&(s(e,R).className="paid-barrier__logo paid-barrier__logo--".concat(s(e,W)["".concat(t)].logo.brandIdentifier)));s(e,C)&&null!==(n=s(e,W)["".concat(t)].ctaButton)&&void 0!==n&&n.label&&(s(e,C).textContent=s(e,W)["".concat(t)].ctaButton.label),e.openModal()}))}var A=window.gujService,D=document.querySelector(".js-paywall-overlay");D instanceof HTMLElement&&A&&!A.isAlreadyExecuted("file:///usr/src/app/client/site/compositions/paywall-overlay/scripts/paywall-overlay.js")&&new B(D,A).init()})();