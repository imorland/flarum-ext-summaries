module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({0:function(e,t){e.exports=flarum.core.compat.app},6:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);a.a.initializers.add("ianm-summariesplus",(function(){a.a.extensionData.for("ianm-summariesplus").registerSetting({label:a.a.translator.trans("ianm-summariesplus.admin.settings.excerpt-label"),setting:"ianm-summariesplus.excerpt_length",type:"number"}).registerSetting({label:a.a.translator.trans("ianm-summariesplus.admin.settings.rich-excerpts"),setting:"ianm-summariesplus.rich-excerpts",type:"boolean"}).registerSetting({label:a.a.translator.trans("ianm-summariesplus.admin.settings.excerpt-type"),setting:"ianm-summariesplus.excerpt-type",options:["first","last"].reduce((function(e,t){return e[t]=a.a.translator.trans("ianm-summariesplus.admin.settings."+t+"-label"),e}),{}),type:"select"})}))}});
//# sourceMappingURL=admin.js.map