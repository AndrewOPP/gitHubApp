!function(){function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={};function i(t,o,e,i,n,a,r){try{var s=t[a](r),l=s.value}catch(t){return void e(t)}s.done?o(l):Promise.resolve(l).then(i,n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var o=this,e=arguments;return new Promise((function(n,a){var r=t.apply(o,e);function s(t){i(r,n,a,s,l,"next",t)}function l(t){i(r,n,a,s,l,"throw",t)}s(void 0)}))}};var n={},a=function(t){"use strict";var o,e=Object.prototype,i=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,o,e){return Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[o]}try{l({},"")}catch(t){l=function(t,o,e){return t[o]=e}}function c(t,o,e,i){var n=o&&o.prototype instanceof h?o:h,a=Object.create(n.prototype),r=new z(i||[]);return a._invoke=function(t,o,e){var i=m;return function(n,a){if(i===u)throw new Error("Generator is already running");if(i===y){if("throw"===n)throw a;return T()}for(e.method=n,e.arg=a;;){var r=e.delegate;if(r){var s=L(r,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(i===m)throw i=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i=u;var l=f(t,o,e);if("normal"===l.type){if(i=e.done?y:p,l.arg===d)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(i=y,e.method="throw",e.arg=l.arg)}}}(t,e,r),a}function f(t,o,e){try{return{type:"normal",arg:t.call(o,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var m="suspendedStart",p="suspendedYield",u="executing",y="completed",d={};function h(){}function x(){}function g(){}var b={};l(b,a,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(A([])));w&&w!==e&&i.call(w,a)&&(b=w);var k=g.prototype=h.prototype=Object.create(b);function N(t){["next","throw","return"].forEach((function(o){l(t,o,(function(t){return this._invoke(o,t)}))}))}function I(t,o){function e(n,a,r,s){var l=f(t[n],t,a);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==typeof m&&i.call(m,"__await")?o.resolve(m.__await).then((function(t){e("next",t,r,s)}),(function(t){e("throw",t,r,s)})):o.resolve(m).then((function(t){c.value=t,r(c)}),(function(t){return e("throw",t,r,s)}))}s(l.arg)}var n;this._invoke=function(t,i){function a(){return new o((function(o,n){e(t,i,o,n)}))}return n=n?n.then(a,a):a()}}function L(t,e){var i=t.iterator[e.method];if(i===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=o,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=o),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var o={tryLoc:t[0]};1 in t&&(o.catchLoc=t[1]),2 in t&&(o.finallyLoc=t[2],o.afterLoc=t[3]),this.tryEntries.push(o)}function E(t){var o=t.completion||{};o.type="normal",delete o.arg,t.completion=o}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=o,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:o,done:!0}}return x.prototype=g,l(k,"constructor",g),l(g,"constructor",x),x.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var o="function"==typeof t&&t.constructor;return!!o&&(o===x||"GeneratorFunction"===(o.displayName||o.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},N(I.prototype),l(I.prototype,r,(function(){return this})),t.AsyncIterator=I,t.async=function(o,e,i,n,a){void 0===a&&(a=Promise);var r=new I(c(o,e,i,n),a);return t.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},N(k),l(k,s,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var o=[];for(var e in t)o.push(e);return o.reverse(),function e(){for(;o.length;){var i=o.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=A,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=o),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],s=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var l=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,o){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=o&&o<=a.finallyLoc&&(a=null);var r=a?a.completion:{};return r.type=t,r.arg=o,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(r)},complete:function(t,o){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&o&&(this.next=o),d},finish:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var n=i.arg;E(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:A(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=o),d}},t}(n);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}function r(t){var o=t.login,e=t.followers,i=t.following,n=t.bio,a=t.avatar_url,r=t.public_repos;return'\n        <img src="'.concat(a,'" alt="profile-photo" class="profile-foto" />\n        <div class="profile-information-container">\n          <h2 class="profile name">').concat(o,'</h2>\n          <p class="profile-bio">').concat(n||"Profile bio is empty",'</p>\n          <ul class="stats">\n            <li class="stats-li">').concat(e,' Followers</li>\n            <li class="stats-li">').concat(i,' Following</li>\n            <li class="stats-li">').concat(r,' Repos</li>\n          </ul>\n          <h3 class="repos-title">Repos:</h3>\n          <div class="repos" id="repos"></div>\n        </div>')}var s,l,c={};function f(t){return t.slice(0,10).map((function(t){var o=t.html_url,e=t.name;return'<a class="repo" target="_blank" href="'.concat(o,'$ rel="noopener noreferrer">').concat(e,"</a>")})).join("")}s=void 0!==o?o:"undefined"!=typeof window?window:c,l=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var o,e="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(o){return o||(o="head"),null!==t.document[o]||(s('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(){var t={},o=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var i=function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o&&"[object Object]"===Object.prototype.toString.call(e[i])?t[i]=c(t[i],e[i]):t[i]=e[i])};e<arguments.length;e++)i(arguments[e]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,p=function(s,f,p,y){if(!l("body"))return!1;o||u.Notify.init({});var d=c(!0,o,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof y&&!Array.isArray(y)){var h={};"object"==typeof p?h=p:"object"==typeof y&&(h=y),o=c(!0,o,h)}var x,g,b=o[s.toLocaleLowerCase("en")];m++,"string"!=typeof f&&(f="Notiflix "+s),o.plainText&&(x=f,(g=t.document.createElement("div")).innerHTML=x,f=g.textContent||g.innerText||""),!o.plainText&&f.length>o.messageMaxLength&&(o=c(!0,o,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>o.messageMaxLength&&(f=f.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),o.cssAnimation||(o.cssAnimationDuration=0);var v=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(v.id=r.wrapID,v.style.width=o.width,v.style.zIndex=o.zindex,v.style.opacity=o.opacity,"center-center"===o.position?(v.style.left=o.distance,v.style.top=o.distance,v.style.right=o.distance,v.style.bottom=o.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===o.position?(v.style.left=o.distance,v.style.right=o.distance,v.style.top=o.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===o.position?(v.style.left=o.distance,v.style.right=o.distance,v.style.bottom=o.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===o.position?(v.style.right=o.distance,v.style.bottom=o.distance,v.style.top="auto",v.style.left="auto"):"left-top"===o.position?(v.style.left=o.distance,v.style.top=o.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===o.position?(v.style.left=o.distance,v.style.bottom=o.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=o.distance,v.style.top=o.distance,v.style.left="auto",v.style.bottom="auto"),o.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=o.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||o.backOverlayColor,w.className=o.cssAnimation?"nx-with-animation":"",w.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=o.ID+"-"+m,k.className=o.className+" "+b.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=o.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=o.borderRadius,k.style.pointerEvents="all",o.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+o.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',o.cssAnimation&&(k.style.animationDuration=o.cssAnimationDuration+"ms");var N="";if(o.closeButton&&"function"!=typeof p&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(o.closeButton?N:"");else{var I="";s===e?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+f+"</span>"+(o.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(o.closeButton?N:"");if("left-bottom"===o.position||"right-bottom"===o.position){var L=t.document.getElementById(r.wrapID);L.insertBefore(k,L.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var C=t.document.getElementById(k.id);if(C){var E,z,A=function(){C.classList.add("nx-remove");var o=t.document.getElementById(r.overlayID);o&&v.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(E)},T=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var o=t.document.getElementById(r.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(z)};if(o.closeButton&&"function"!=typeof p&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var t=setTimeout((function(){T(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"==typeof p||o.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof p&&p(),A();var t=setTimeout((function(){T(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!=typeof p){var W=function(){E=setTimeout((function(){A()}),o.timeout),z=setTimeout((function(){T()}),o.timeout+o.cssAnimationDuration)};W(),o.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(E),clearTimeout(z)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),W()})))}}if(o.showOnlyTheLastOne&&m>0)for(var O=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+m+"])"),j=0;j<O.length;j++){var S=O[j];null!==S.parentNode&&S.parentNode.removeChild(S)}o=c(!0,o,d)},u={Notify:{init:function(e){o=c(!0,r,e),function(o,e){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return s("You have to initialize the Notify module before call Merge function."),!1;o=c(!0,o,t)},success:function(t,o,i){p(e,t,o,i)},failure:function(t,o,e){p(i,t,o,e)},warning:function(t,o,e){p(n,t,o,e)},info:function(t,o,e){p(a,t,o,e)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:u.Notify}):{Notify:u.Notify}},"function"==typeof define&&define.amd?define([],(function(){return l(s)})):"object"==typeof c?c=l(s):s.Notiflix=l(s);var m=document.querySelector(".main-content"),p=document.querySelector(".user-input"),u=document.querySelector("h1");function y(){return(y=t(e)(t(n).mark((function o(e){var i,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="https://api.github.com/users/".concat(e,"/repos"),t.next=3,fetch(i);case 3:return a=t.sent,t.next=6,a.json();case 6:d(t.sent);case 8:case"end":return t.stop()}}),o)})))).apply(this,arguments)}function d(t){setTimeout((function(){document.getElementById("repos").innerHTML=f(t),m.classList.remove("hidden")}),1e3)}p.addEventListener("change",(function(t){var o=t.currentTarget.value;fetch("https://api.github.com/users/".concat(o)).then((function(t){if(!t.ok)throw new Error(c.Notify.failure("User does not exist"));return t.json()})).then((function(t){!function(t){u.classList.add("hidden"),setTimeout((function(){m.innerHTML=r(t),m.classList.add("add-main-content")}),1e3)}(t),function(t){y.apply(this,arguments)}(o)})).catch((function(t){console.log(t)}))}))}();
//# sourceMappingURL=index.74141a65.js.map