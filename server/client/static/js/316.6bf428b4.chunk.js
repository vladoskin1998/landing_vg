/*! For license information please see 316.6bf428b4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[316],{6316:function(t,e,n){n.d(e,{h:function(){return y}});var r=n(9439),i=n(7479),o=n(7689),a=n(9042),l=n(2791),c=n(9682),u=n(1002);function s(){s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),l=new E(i||[]);return r(a,"_invoke",{value:w(t,n,l)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=d;var h={};function p(){}function v(){}function m(){}var g={};c(g,o,(function(){return this}));var x=Object.getPrototypeOf,y=x&&x(x(L([])));y&&y!==e&&n.call(y,o)&&(g=y);var _=m.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function i(r,o,a,l){var c=f(t[r],t,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==(0,u.Z)(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,l)}),(function(t){i("throw",t,a,l)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return i("throw",t,a,l)}))}l(c.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=N(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function N(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=m,r(_,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:v,configurable:!0}),v.displayName=c(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(j.prototype),c(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new j(d(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(_),c(_,l,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function d(t,e,n,r,i,o,a){try{var l=t[o](a),c=l.value}catch(u){return void n(u)}l.done?e(c):Promise.resolve(c).then(r,i)}var f=n(4098),h=n(5747),p=n(184),v=function(t){var e=t.files,n=t.handleFileDelete;return(0,p.jsx)("ul",{children:Array.from(e).map((function(t,e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("div",{children:(0,p.jsx)("span",{children:"".concat(t.name,"/").concat(t.size).length>25?"".concat(t.name).split("").slice(0,25).join("")+"...":"".concat(t.name)})}),(0,p.jsx)("button",{className:"add__del",onClick:function(t){return function(t,e){t.stopPropagation(),n(e)}(t,e)},children:"Delete"})]},t.name)}))})},m=function(t){var e=t.close,n=t.link,i=(0,l.useState)([]),o=(0,r.Z)(i,2),u=o[0],m=o[1],g=(0,l.useState)([]),x=(0,r.Z)(g,2),y=x[0],_=x[1],b=(0,l.useState)(""),j=(0,r.Z)(b,2),w=j[0],N=j[1],O=(0,l.useContext)(c.I).setIsAuth,k=(0,h.TF)(n),E=k.format,L=k.tag,P=(0,l.useRef)(null);console.log(u,y),(0,l.useEffect)((function(){function t(t){P.current&&!P.current.contains(t.target)&&e()}return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}}),[P,u,y]);var T=function(){var t,n=(t=s().mark((function t(){var n,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new FormData,w){t.next=3;break}return t.abrupt("return",alert("Required field input folder"));case 3:if(y.length){t.next=5;break}return t.abrupt("return",alert("Required field Background file"));case 5:if(u.length){t.next=7;break}return t.abrupt("return",alert("Required field Download file"));case 7:for(n.append("title",w),n.append("tag",L),n.append("bgfiles",y[0]),r=0;r<u.length;r++)n.append("files",u[r]);return t.prev=11,t.next=14,f.W.post("media/add-folder",n,{headers:{"Content-Type":"multipart/form-data"}});case 14:alert("Success upload, update site"),e(),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(11),401===(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.status)&&O(""),alert(t.t0);case 22:case"end":return t.stop()}}),t,null,[[11,18]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){d(o,r,i,a,l,"next",t)}function l(t){d(o,r,i,a,l,"throw",t)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"login add",ref:P,children:[(0,p.jsx)("h4",{className:"login__text",children:"Add Collection"}),(0,p.jsxs)("div",{className:"login_item",children:[(0,p.jsxs)("h4",{className:"login__text",children:["NAME FOLDER ",!!w||(0,p.jsx)("span",{className:"login__text login__text-req",children:"Required field"})," "]}),(0,p.jsx)("input",{type:"text",className:"login__input",value:w,onChange:function(t){N(t.target.value)}})]}),(0,p.jsxs)("div",{className:"login_item",children:[(0,p.jsx)("h4",{className:"login__text",children:"Background foulder image"}),(0,p.jsx)("label",{htmlFor:"file-bgupload",className:"media--add add__label",children:"Upload file"}),(0,p.jsx)("input",{type:"file",accept:a.s.PHOTO,id:"file-bgupload",onChange:function(t){!function(t){_(t.target.files)}(t)}}),(0,p.jsxs)("h4",{className:"login__text",children:[a.s.PHOTO,!!y.length||(0,p.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),!!y.length&&(0,p.jsx)(v,{files:y,handleFileDelete:function(t){_(Array.from(y).filter((function(e,n){return n!==t})))}})]}),(0,p.jsxs)("div",{className:"login_item",children:[(0,p.jsx)("h4",{className:"login__text",children:"Media files"}),(0,p.jsx)("label",{htmlFor:"file-upload",className:"media--add add__label",children:"Upload file"}),(0,p.jsx)("input",{type:"file",multiple:!0,accept:E,id:"file-upload",onChange:function(t){!function(t){m(t.target.files)}(t)}}),(0,p.jsxs)("h4",{className:"login__text",children:[E,!!u.length||(0,p.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),!!u.length&&(0,p.jsx)(v,{files:u,handleFileDelete:function(t){m(Array.from(u).filter((function(e,n){return n!==t})))}})]}),(0,p.jsxs)("div",{className:"login__nav",children:[(0,p.jsx)("button",{className:"media__item--delete",onClick:e,children:"Cancel"}),(0,p.jsx)("button",{className:"media--add",onClick:T,children:"Upload To Server"})]})]})},g=n(4935),x=function(t){var e=t.label,n=t.text;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h5",{className:"media__item-text",children:e}),(0,p.jsx)("div",{className:"media__item-bg",children:(0,p.jsx)("button",{className:"media__item-bg_but",children:n})})]})},y=function(t){var e=t.arr,n=t.link,u=(0,o.s0)(),s=(0,h.mz)(n),d=(0,l.useContext)(c.I),v=d.device,y=d.isAuth,_=d.setIsAuth,b=(0,l.useState)(!1),j=(0,r.Z)(b,2),w=j[0],N=j[1],O=s.title[0].toUpperCase()+s.title.slice(1);return(0,p.jsxs)("div",{className:"media ".concat(s.title),id:O,children:[y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:"media--add",onClick:function(t){t.stopPropagation(),N(!0)},children:"Add Collection"}),w&&(0,p.jsx)(m,{close:function(){return N(!1)},link:"folder-".concat(s.title)})]}),(0,p.jsx)("h4",{className:"title__links",children:s.title}),(0,p.jsx)("div",{className:"media__list",children:!e.length||(0,i.R)(e,v).map((function(t,e){return(0,p.jsx)("div",{className:"media__itemline-".concat(t.length,"-").concat(e%2===0?"p":"n"," media__itemline"),children:t.map((function(t){return(0,p.jsxs)("div",{style:{backgroundImage:"url(".concat(g.n2,"uploads/").concat(t.bgfiles,")")},className:"media__item about__born-image",onClick:function(){return u("/".concat(n,"/").concat(null===t||void 0===t?void 0:t.folderId).concat(s.tag===a.l.VIDEO?"/video/0":""))},children:[y&&(0,p.jsx)("button",{className:"media__item--delete",onClick:function(e){return function(t,e){t.stopPropagation(),f.W.post("media/delete-folder",{id:e}).then((function(t){alert("Delete success, update site")})).catch((function(t){var e;console.log(t),401===(null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.status)&&_(""),alert(t)}))}(e,null===t||void 0===t?void 0:t.folderId)},children:"Delete"}),(0,p.jsx)(x,{label:null===t||void 0===t?void 0:t.label,text:(0,p.jsxs)(p.Fragment,{children:["view ",(0,p.jsx)("br",{}),"all"]})})]})}))},"wraper-media"+e)}))})]})}},5747:function(t,e,n){n.d(e,{TF:function(){return a},bK:function(){return o},mz:function(){return i}});var r=n(9042),i=function(t){switch(t){case"photo-list":return{title:"photo",buttonTitle:"open full",tag:r.l.PHOTO};case"video-list":return{title:"video",buttonTitle:"play",tag:r.l.VIDEO};default:return{title:"not found",buttonTitle:"not found",tag:r.l.PHOTO}}},o=function(t){switch(t){case"photo":default:return{tag:r.l.PHOTO};case"video":return{tag:r.l.VIDEO}}},a=function(t){switch(t){case"folder-photo":default:return{format:r.s.PHOTO,tag:r.l.PHOTO};case"folder-video":return{format:r.s.VIDEO,tag:r.l.VIDEO}}}},7479:function(t,e,n){n.d(e,{R:function(){return i}});var r=n(3433),i=function(t,e){if(0===t.length)return[];if(1===t.length)return[(0,r.Z)(t)];if("pc"!==e)return t.map((function(t){return[t]}));for(var n=[],i=0;i<t.length;i+=3)n.push((0,r.Z)(t.slice(i,i+3>=t.length?t.length:i+3)));return 1===n[n.length-1].length&&n[n.length-1].unshift(n[n.length-2].pop()),n}}}]);
//# sourceMappingURL=316.6bf428b4.chunk.js.map