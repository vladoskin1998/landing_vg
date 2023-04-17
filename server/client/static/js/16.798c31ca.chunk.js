"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[16],{9016:function(e,t,n){n.r(t);var l=n(1004),i=n(2791),a=n(9682),r=n(184);t.default=function(){var e=(0,i.useContext)(a.I).video;return(0,r.jsx)(l.h,{arr:e,link:"video-list"})}},1004:function(e,t,n){n.d(t,{h:function(){return _}});var l=n(9439),i=n(7479),a=n(7689),r=n(9042),s=n(2791),o=n(9682),c=n(4165),d=n(5861),u=n(4098),f=n(5747),h=n(184),m=function(e){var t=e.files,n=e.handleFileDelete;return(0,h.jsx)("ul",{children:Array.from(t).map((function(e,t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("span",{children:"".concat(e.name,"/").concat(e.size).length>25?"".concat(e.name).split("").slice(0,25).join("")+"...":"".concat(e.name)})}),(0,h.jsx)("button",{className:"add__del",onClick:function(e){!function(e,t){e.stopPropagation(),n(t)}(e,t)},children:"Delete"})]},e.name)}))})},p=function(e){var t=e.close,n=e.link,i=(0,s.useState)([]),a=(0,l.Z)(i,2),p=a[0],g=a[1],x=(0,s.useState)([]),_=(0,l.Z)(x,2),v=_[0],j=_[1],b=(0,s.useState)(""),N=(0,l.Z)(b,2),k=N[0],O=N[1],C=(0,s.useContext)(o.I).setIsAuth,D=(0,f.TF)(n),T=D.format,I=D.tag,F=(0,s.useRef)(null);console.log(p,v),(0,s.useEffect)((function(){function e(e){F.current&&!F.current.contains(e.target)&&t()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[F,p,v]);var w=function(){var e=(0,d.Z)((0,c.Z)().mark((function e(){var n,l,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new FormData,k){e.next=4;break}return alert("Required field input folder"),e.abrupt("return");case 4:if(v.length){e.next=7;break}return alert("Required field Background file"),e.abrupt("return");case 7:if(p.length){e.next=10;break}return alert("Required field Download file"),e.abrupt("return");case 10:for(n.append("title",k),n.append("tag",I),n.append("bgfiles",v[0]),l=0;l<p.length;l++)n.append("files",p[l]);return e.prev=14,e.next=17,u.W.post("media/add-folder",n,{headers:{"Content-Type":"multipart/form-data"}});case 17:alert("Success upload, update site"),t(),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(14),401===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)&&C(""),alert(e.t0);case 25:case"end":return e.stop()}}),e,null,[[14,21]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"login add",ref:F,children:[(0,h.jsx)("h4",{className:"login__text",children:"Add Collection"}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsxs)("h4",{className:"login__text",children:["NAME FOLDER ",Boolean(k)||(0,h.jsx)("span",{className:"login__text login__text-req",children:"Required field"})," "]}),(0,h.jsx)("input",{type:"text",className:"login__input",value:k,onChange:function(e){O(e.target.value)}})]}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsx)("h4",{className:"login__text",children:"Background foulder image"}),(0,h.jsx)("label",{htmlFor:"file-bgupload",className:"media--add add__label",children:"Upload file"}),(0,h.jsx)("input",{type:"file",accept:r.s.PHOTO,id:"file-bgupload",onChange:function(e){!function(e){j(e.target.files)}(e)}}),(0,h.jsxs)("h4",{className:"login__text",children:[r.s.PHOTO,Boolean(v.length)||(0,h.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),Boolean(v.length)&&(0,h.jsx)(m,{files:v,handleFileDelete:function(e){j(Array.from(v).filter((function(t,n){return n!==e})))}})]}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsx)("h4",{className:"login__text",children:"Media files"}),(0,h.jsx)("label",{htmlFor:"file-upload",className:"media--add add__label",children:"Upload file"}),(0,h.jsx)("input",{type:"file",multiple:!0,accept:T,id:"file-upload",onChange:function(e){!function(e){g(e.target.files)}(e)}}),(0,h.jsxs)("h4",{className:"login__text",children:[T,Boolean(p.length)||(0,h.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),Boolean(p.length)&&(0,h.jsx)(m,{files:p,handleFileDelete:function(e){g(Array.from(p).filter((function(t,n){return n!==e})))}})]}),(0,h.jsxs)("div",{className:"login__nav",children:[(0,h.jsx)("button",{className:"media__item--delete",onClick:t,children:"Cancel"}),(0,h.jsx)("button",{className:"media--add",onClick:w,children:"Upload To Server"})]})]})},g=n(4935),x=function(e){var t=e.label,n=e.text;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h5",{className:"media__item-text",children:t}),(0,h.jsx)("div",{className:"media__item-bg",children:(0,h.jsx)("button",{className:"media__item-bg_but",children:n})})]})},_=function(e){var t=e.arr,n=e.link,c=(0,a.s0)(),d=(0,f.mz)(n),m=(0,s.useContext)(o.I),_=m.device,v=m.isAuth,j=m.setIsAuth,b=(0,s.useState)(!1),N=(0,l.Z)(b,2),k=N[0],O=N[1],C=d.title[0].toUpperCase()+d.title.slice(1);return(0,h.jsxs)("div",{className:"media ".concat(d.title),id:C,children:[v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"media--add",onClick:function(e){e.stopPropagation(),O(!0)},children:"Add Collection"}),k&&(0,h.jsx)(p,{close:function(){O(!1)},link:"folder-".concat(d.title)})]}),(0,h.jsx)("h4",{className:"title__links",children:d.title}),(0,h.jsx)("div",{className:"media__list",children:!t.length||(0,i.R)(t,_).map((function(e,t){return(0,h.jsx)("div",{className:"media__itemline-".concat(e.length,"-").concat(t%2===0?"p":"n"," media__itemline"),children:e.map((function(e){return(0,h.jsxs)("div",{style:{backgroundImage:"url(".concat(g.n2,"uploads/").concat(e.bgfiles,")")},className:"media__item about__born-image",onClick:function(){c("/".concat(n,"/").concat(null===e||void 0===e?void 0:e.folderId).concat(d.tag===r.l.VIDEO?"/video/0":""))},children:[v&&(0,h.jsx)("button",{className:"media__item--delete",onClick:function(t){!function(e,t){e.stopPropagation(),u.W.post("media/delete-folder",{id:t}).then((function(e){alert("Delete success, update site")})).catch((function(e){var t;console.log(e),401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&j(""),alert(e)}))}(t,null===e||void 0===e?void 0:e.folderId)},children:"Delete"}),(0,h.jsx)(x,{label:null===e||void 0===e?void 0:e.label,text:(0,h.jsxs)(h.Fragment,{children:["view ",(0,h.jsx)("br",{}),"all"]})})]})}))},"wraper-media"+t)}))})]})}},5747:function(e,t,n){n.d(t,{TF:function(){return r},bK:function(){return a},mz:function(){return i}});var l=n(9042),i=function(e){switch(e){case"photo-list":return{title:"photo",buttonTitle:"open full",tag:l.l.PHOTO};case"video-list":return{title:"video",buttonTitle:"play",tag:l.l.VIDEO};default:return{title:"not found",buttonTitle:"not found",tag:l.l.PHOTO}}},a=function(e){switch(e){case"photo":default:return{tag:l.l.PHOTO};case"video":return{tag:l.l.VIDEO}}},r=function(e){switch(e){case"folder-photo":default:return{format:l.s.PHOTO,tag:l.l.PHOTO};case"folder-video":return{format:l.s.VIDEO,tag:l.l.VIDEO}}}},7479:function(e,t,n){n.d(t,{R:function(){return i}});var l=n(3433),i=function(e,t){if(0===e.length)return[];if(1===e.length)return[(0,l.Z)(e)];if("pc"!==t)return e.map((function(e){return[e]}));for(var n=[],i=0;i<e.length;i+=3)n.push((0,l.Z)(e.slice(i,i+3>=e.length?e.length:i+3)));return 1===n[n.length-1].length&&n[n.length-1].unshift(n[n.length-2].pop()),n}}}]);
//# sourceMappingURL=16.798c31ca.chunk.js.map