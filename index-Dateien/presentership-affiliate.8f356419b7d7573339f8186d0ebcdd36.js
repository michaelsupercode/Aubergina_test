(()=>{"use strict";(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,i||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==e(i)?i:String(i)}function i(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,t(r.key),r)}}function n(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function r(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,n(e,t,"set"),i),i}function a(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,n(e,t,"get"))}function o(e,t){l(e,t),t.add(e)}function s(e,t,i){l(e,t),t.set(e,i)}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function p(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}var c=new WeakMap,f=new WeakMap,u=new WeakMap,h=new WeakMap,y=new WeakMap,d=new WeakMap,v=new WeakSet,w=new WeakSet,g=new WeakMap,m=function(){function e(t,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,w),o(this,v),s(this,d,{get:_,set:void 0}),s(this,y,{get:k,set:void 0}),s(this,c,{get:b,set:void 0}),s(this,f,{writable:!0,value:void 0}),s(this,u,{writable:!0,value:void 0}),s(this,h,{writable:!0,value:void 0}),s(this,g,{writable:!0,value:function(e){if(a(n,h)){var t=a(n,h).querySelector(".js-presentership__tooltip");if(t){var i=parseInt(getComputedStyle(a(n,h)).lineHeight),r=e.pageX,o=e.clientY,s=a(n,h).getBoundingClientRect().top,l=o<s+i?s+i:s+2*i;t.setAttribute("style","top: ".concat(l,"px; left: ").concat(r,"px; position: fixed;"))}}}}),r(this,f,t),r(this,u,i)}var t,n,l;return t=e,(n=[{key:"init",value:function(){return a(this,f).classList.add("presentership","presentership--affiliate","presentership--affiliate-modified"),a(this,f).innerHTML='<span class="presentership__link-wrapper js-presentership__link-text">'.concat(a(this,f).innerHTML).concat(a(this,y),"</span>").concat(a(this,d)),p(this,w,E).call(this),a(this,f)}}])&&i(t.prototype,n),l&&i(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(){return a(this,u).config.get("advertising.affiliateAgbLink")}function k(){return a(this,c)?'<a href="'.concat(a(this,c),'" class="presentership__tooltip js-presentership__tooltip u-typo u-typo--tooltip-text-link" target="_blank">Affiliate-Link</a>'):""}function _(){return a(this,c)?'<span class="presentership__link-wrapper presentership__link-wrapper--basket"><a class="presentership__link-basket" href="'.concat(a(this,c),'" target="_blank"></a>').concat(a(this,y),"</span>"):""}function S(e){var t=parseInt(getComputedStyle(e).lineHeight);return e.getBoundingClientRect().height>t}function E(){r(this,h,a(this,f).querySelector(".js-presentership__link-text")),a(this,h)&&p(this,v,S).call(this,a(this,h))&&a(this,h).addEventListener("mouseenter",a(this,g))}var j=window.gujService,M=Array.from(document.querySelectorAll(".presentership--affiliate"));j&&!j.isAlreadyExecuted("file:///usr/src/app/client/site/partials/presentership-affiliate/scripts/presentership-affiliate.js")&&(M.forEach((function(e){e instanceof HTMLElement&&new m(e,j).init()})),j.eventObserver.add("group-gallery:intersect:item",(function(){Array.from(document.querySelectorAll(".presentership--affiliate:not(.presentership--affiliate-modified)")).forEach((function(e){e instanceof HTMLElement&&new m(e,j).init()}))})))})()})();