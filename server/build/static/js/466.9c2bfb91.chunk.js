"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[466],{6148:function(t,e,n){n.d(e,{R:function(){return s}});var i=n(3433),s=function(t,e){if(1===t.length)return[(0,i.Z)(t)];if("pc"!==e)return t.map((function(t){return[t]}));for(var n=[],s=0;s<t.length;s+=3)n.push((0,i.Z)(t.slice(s,s+3>=t.length?t.length:s+3)));return 1===n[n.length-1].length&&n[n.length-1].unshift(n[n.length-2].pop()),n}},3466:function(t,e,n){n.r(e),n.d(e,{VideoList:function(){return r}});var i=n(1154),s=n(184),l=[{src:"string",videoId:"1"},{src:"string",videoId:"2"},{src:"string",videoId:"3"},{src:"string",videoId:"4"}],r=function(){return(0,s.jsx)(i.j,{arr:l})};e.default=r},1154:function(t,e,n){n.d(e,{j:function(){return d}});var i=n(7689),s=n(184),l=function(){return(0,s.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M7 12L2 6.5L7 1",stroke:"#141414","stroke-width":"2.2"}),(0,s.jsx)("path",{d:"M12.5 6.5L3 6.5",stroke:"#141414","stroke-width":"2.2"})]})},r=n(6148),c=function(){return(0,s.jsx)("svg",{width:"5",height:"9",viewBox:"0 0 5 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1 1L4 4.5L0.999999 8",stroke:"#141414","stroke-width":"1.5"})})},o=n(2791),a=n(3958),d=function(t){var e=t.arr,n=(0,i.UO)().setId,d=(0,i.s0)(),h=(0,i.TH)(),u=function(t){switch(t){case"photo-list":return{title:"photo",buttonTitle:(0,s.jsxs)(s.Fragment,{children:["open full ",(0,s.jsx)("br",{})," size"]})};case"video-list":return{title:"video",buttonTitle:"play"};default:return{title:"not found",buttonTitle:"not found"}}}(h.pathname.split("/")[1]),m=(0,o.useContext)(a.I).device;return(0,s.jsxs)("div",{className:"media__list content",children:[(0,s.jsx)(i.j3,{}),(0,s.jsxs)("div",{className:"media",children:[(0,s.jsxs)("h4",{className:"title__links",onClick:function(){d(-1)},children:[(0,s.jsx)("div",{children:(0,s.jsx)(l,{})}),"back to ",u.title]}),(0,s.jsxs)("div",{className:"media__list-subtitle",children:[(0,s.jsx)("h5",{children:u.title}),(0,s.jsx)(c,{}),(0,s.jsx)("h5",{children:n})]}),(0,s.jsx)("div",{className:"media__list",children:(0,r.R)(e,m).map((function(t,e){return(0,s.jsx)("div",{className:"media__itemline-".concat(t.length,"-").concat(e%2===0?"p":"n"," media__itemline"),children:t.map((function(t,e){return(0,s.jsx)("div",{style:{backgroundImage:t.src},className:"media__item",children:(0,s.jsx)("div",{className:"media__item-bg",onClick:function(){return console.log("`/${location.pathname.split('/')[1]}/${setId}/${path.title}/1` --\x3e","/".concat(h.pathname.split("/")[1],"/").concat(n,"/").concat(u.title,"/1")),void d("/".concat(h.pathname.split("/")[1],"/").concat(n,"/").concat(u.title,"/1"))},children:(0,s.jsxs)("button",{className:"media__item-bg_but",children:[" ",u.buttonTitle]})})})}))})}))})]})]})}}}]);
//# sourceMappingURL=466.9c2bfb91.chunk.js.map