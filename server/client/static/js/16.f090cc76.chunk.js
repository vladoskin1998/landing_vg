"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[16],{9016:function(e,t,n){n.r(t);var l=n(1004),i=n(2791),a=n(9682),r=n(184);t.default=function(){var e=(0,i.useContext)(a.I).video;return(0,r.jsx)(l.h,{arr:e,link:"video-list"})}},1004:function(e,t,n){n.d(t,{h:function(){return v}});var l=n(9439),i=n(7479),a=n(7689),r=n(9042),s=n(2791),o=n(9682),c=n(4165),d=n(5861),u=n(4098),f=n(5747),h=n(184),m=function(e){var t=e.files,n=e.handleFileDelete;return(0,h.jsx)("ul",{children:Array.from(t).map((function(e,t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("span",{children:"".concat(e.name,"/").concat(e.size).length>25?"".concat(e.name).split("").slice(0,25).join("")+"...":"".concat(e.name)})}),(0,h.jsx)("button",{className:"add__del",onClick:function(e){!function(e,t){e.stopPropagation(),n(t)}(e,t)},children:"Delete"})]},e.name)}))})},x=n(9355),g=function(e){var t=e.close,n=e.link,i=(0,s.useState)([]),a=(0,l.Z)(i,2),g=a[0],p=a[1],_=(0,s.useState)([]),v=(0,l.Z)(_,2),j=v[0],b=v[1],N=(0,s.useState)(""),k=(0,l.Z)(N,2),C=k[0],O=k[1],D=(0,s.useContext)(o.I).setIsAuth,F=(0,f.TF)(n),T=F.format,I=F.tag,q=(0,s.useRef)(null),w=(0,s.useState)(0),Z=(0,l.Z)(w,2),y=Z[0],E=Z[1],P=(0,s.useState)(!1),R=(0,l.Z)(P,2),A=R[0],M=R[1];(0,s.useEffect)((function(){var e;function n(e){q.current&&!q.current.contains(e.target)&&t()}for(var l=0,i=0;i<g.length;i++){var a;l+=null===(a=g[i])||void 0===a?void 0:a.size}return E(l+(null===(e=j[0])||void 0===e?void 0:e.size)||0),document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[q,g,j]);var S=function(){var e=(0,d.Z)((0,c.Z)().mark((function e(){var n,l,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new FormData,C){e.next=4;break}return alert("Required field input folder"),e.abrupt("return");case 4:if(j.length){e.next=7;break}return alert("Required field Background file"),e.abrupt("return");case 7:if(g.length){e.next=10;break}return alert("Required field Download file"),e.abrupt("return");case 10:if(!(y>2e7)){e.next=13;break}return alert("Max size Collection 20Mb"),e.abrupt("return");case 13:if(!(g.length>20)){e.next=16;break}return alert("Max count files 20"),e.abrupt("return");case 16:for(n.append("title",C),n.append("tag",I),n.append("bgfiles",j[0]),l=0;l<g.length;l++)n.append("files",g[l]);return e.prev=20,M(!0),e.next=24,u.W.post("media/add-folder",n,{headers:{"Content-Type":"multipart/form-data"}});case 24:M(!1),alert("Success upload, update site"),t(),e.next=34;break;case 29:e.prev=29,e.t0=e.catch(20),401===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)&&D(""),M(!1),alert(e.t0);case 34:case"end":return e.stop()}}),e,null,[[20,29]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"login add",ref:q,children:[(0,h.jsx)("h4",{className:"login__text",children:"Add Collection"}),(0,h.jsxs)("h3",{className:"login__text",children:["Max Size 20Mb,",(0,h.jsxs)("span",{className:"login__text login__text-req",children:[" ",y/1e6,"Mb "]}),"Max files 20,",(0,h.jsxs)("span",{className:"login__text login__text-req",children:[" ",g.length]})]}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsxs)("h4",{className:"login__text",children:["NAME FOLDER ",Boolean(C)||(0,h.jsx)("span",{className:"login__text login__text-req",children:"Required field"})," "]}),(0,h.jsx)("input",{type:"text",className:"login__input",value:C,onChange:function(e){O(e.target.value)}})]}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsx)("h4",{className:"login__text",children:"Background foulder image"}),(0,h.jsx)("label",{htmlFor:"file-bgupload",className:"media--add add__label",children:"Upload file"}),(0,h.jsx)("input",{type:"file",accept:r.s.PHOTO,id:"file-bgupload",onChange:function(e){!function(e){b(e.target.files)}(e)}}),(0,h.jsxs)("h4",{className:"login__text",children:[r.s.PHOTO,Boolean(j.length)||(0,h.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),Boolean(j.length)&&(0,h.jsx)(m,{files:j,handleFileDelete:function(e){b(Array.from(j).filter((function(t,n){return n!==e})))}})]}),(0,h.jsxs)("div",{className:"login_item",children:[(0,h.jsx)("h4",{className:"login__text",children:"Media files"}),(0,h.jsx)("label",{htmlFor:"file-upload",className:"media--add add__label",children:"Upload file"}),(0,h.jsx)("input",{type:"file",multiple:!0,accept:T,id:"file-upload",onChange:function(e){!function(e){p(e.target.files)}(e)}}),(0,h.jsxs)("h4",{className:"login__text",children:[T,Boolean(g.length)||(0,h.jsx)("span",{className:"login__text login__text-req",children:" Required field"})]}),Boolean(g.length)&&(0,h.jsx)(m,{files:g,handleFileDelete:function(e){p(Array.from(g).filter((function(t,n){return n!==e})))}})]}),(0,h.jsxs)("div",{className:"login__nav",children:[(0,h.jsx)("button",{className:"media__item--delete",onClick:t,children:"Cancel"}),(0,h.jsx)("button",{className:"media--add",onClick:S,children:"Upload To Server"})]})]}),A?(0,h.jsx)(x.a,{}):(0,h.jsx)(h.Fragment,{})]})},p=n(4935),_=function(e){var t=e.label,n=e.text;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h5",{className:"media__item-text",children:t}),(0,h.jsx)("div",{className:"media__item-bg",children:(0,h.jsx)("button",{className:"media__item-bg_but",children:n})})]})},v=function(e){var t=e.arr,n=e.link,c=(0,a.s0)(),d=(0,f.mz)(n),m=(0,s.useContext)(o.I),x=m.device,v=m.isAuth,j=m.setIsAuth,b=(0,s.useState)(!1),N=(0,l.Z)(b,2),k=N[0],C=N[1],O=d.title[0].toUpperCase()+d.title.slice(1);return(0,h.jsxs)("div",{className:"media ".concat(d.title),id:O,children:[v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"media--add",onClick:function(e){e.stopPropagation(),C(!0)},children:"Add Collection"}),k&&(0,h.jsx)(g,{close:function(){C(!1)},link:"folder-".concat(d.title)})]}),(0,h.jsx)("h4",{className:"title__links",children:d.title}),(0,h.jsx)("div",{className:"media__list",children:!t.length||(0,i.R)(t,x).map((function(e,t){return(0,h.jsx)("div",{className:"media__itemline-".concat(e.length,"-").concat(t%2===0?"p":"n"," media__itemline"),children:e.map((function(e){return(0,h.jsxs)("div",{style:{backgroundImage:"url(".concat(p.n2,"uploads/").concat(e.bgfiles,")")},className:"media__item main--image",onClick:function(){c("/".concat(n,"/").concat(null===e||void 0===e?void 0:e.folderId).concat(d.tag===r.l.VIDEO?"/video/0":""))},children:[v&&(0,h.jsx)("button",{className:"media__item--delete",onClick:function(t){!function(e,t){e.stopPropagation(),u.W.post("media/delete-folder",{id:t}).then((function(e){alert("Delete success, update site")})).catch((function(e){var t;console.log(e),401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&j(""),alert(e)}))}(t,null===e||void 0===e?void 0:e.folderId)},children:"Delete"}),(0,h.jsx)(_,{label:null===e||void 0===e?void 0:e.label,text:(0,h.jsxs)(h.Fragment,{children:["view ",(0,h.jsx)("br",{}),"all"]})})]})}))},"wraper-media"+t)}))})]})}},5747:function(e,t,n){n.d(t,{TF:function(){return r},bK:function(){return a},mz:function(){return i}});var l=n(9042),i=function(e){switch(e){case"photo-list":return{title:"photo",buttonTitle:"open full",tag:l.l.PHOTO};case"video-list":return{title:"video",buttonTitle:"play",tag:l.l.VIDEO};default:return{title:"not found",buttonTitle:"not found",tag:l.l.PHOTO}}},a=function(e){switch(e){case"photo":default:return{tag:l.l.PHOTO};case"video":return{tag:l.l.VIDEO}}},r=function(e){switch(e){case"folder-photo":default:return{format:l.s.PHOTO,tag:l.l.PHOTO};case"folder-video":return{format:l.s.VIDEO,tag:l.l.VIDEO}}}},7479:function(e,t,n){n.d(t,{R:function(){return i}});var l=n(3433),i=function(e,t){if(0===e.length)return[];if(1===e.length)return[(0,l.Z)(e)];if("pc"!==t)return e.map((function(e){return[e]}));for(var n=[],i=0;i<e.length;i+=3)n.push((0,l.Z)(e.slice(i,i+3>=e.length?e.length:i+3)));return 1===n[n.length-1].length&&n[n.length-1].unshift(n[n.length-2].pop()),n}}}]);
//# sourceMappingURL=16.f090cc76.chunk.js.map