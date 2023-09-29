"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[198],{8922:function(n,e,t){t.d(e,{Fb:function(){return l},al:function(){return s},h4:function(){return d},im:function(){return p}});var r,a,i,o,u=t(168),c=t(6487),l=c.ZP.div(r||(r=(0,u.Z)(["\n  margin-bottom: 10px;\n"]))),s=c.ZP.h2(a||(a=(0,u.Z)(["\n  margin-top: 70px;\n"]))),p=c.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 5px;\n  max-width: 500px;\n  width: auto;\n  min-height: 500px;\n  margin: 50px auto;\n  background: white;\n  height: auto;\n  border-radius: 3px;\n  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);\n  background-color: rgba(232, 160, 191, 0.7);\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    height: 100vh;\n  }\n"]))),d=c.ZP.h1(o||(o=(0,u.Z)(["\n  margin: 30px;\n  text-align: center;\n  font-size: 25px;\n"])))},7198:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r=t(4165),a=t(5861),i=t(2791),o=t(9434),u=t(4270),c=t(3634),l=t(4808),s="NOT_FOUND";var p=function(n,e){return n===e};function d(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?p:r,i=t.maxSize,o=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),l=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return s}return{get:r,put:function(e,a){r(e)===s&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function d(){var e=l.get(arguments);if(e===s){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return d.clearCache=function(){return l.clear()},d}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function h(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var i,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],h=f(r),x=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:x,dependencies:h,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return a}var x,m,g,v,b,y,Z,j,w,k,C,P=h(d),A=function(n){return n.contacts.items},z=function(n){return n.filter},_=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},q=P([A,z],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),E=t(168),S=t(6487),N=S.ZP.ul(x||(x=(0,E.Z)(["\n  background-color: rgba(186, 144, 198, 0.8);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 3px;\n  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);\n"]))),I=S.ZP.li(m||(m=(0,E.Z)(["\n  background-color: #fdf4f5;\n  border-radius: 3px;\n  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);\n  padding: 10px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),L=S.ZP.div(g||(g=(0,E.Z)(["\n  margin-right: 30px;\n"]))),O=S.ZP.span(v||(v=(0,E.Z)(["\n  margin-right: 1em;\n"]))),D=t(184),K=function(){var n=(0,o.v9)(A),e=(0,o.v9)(z),t=(0,o.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,D.jsx)(N,{children:r.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,D.jsxs)(I,{children:[(0,D.jsxs)(L,{children:[(0,D.jsx)(O,{children:r}),(0,D.jsx)("span",{children:a})]}),(0,D.jsx)("button",{type:"button",onClick:function(){return function(n){t((0,c.GK)(n))}(e)},children:"Delete"})]},e)}))})},R=t(9439),T=t(4942),G=t(1413),B=S.ZP.form(b||(b=(0,E.Z)(["\n  background-color: rgba(186, 144, 198, 0.8);\n  display: flex;\n  min-width: 290px;\n\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-radius: 3px;\n  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);\n"]))),J=S.ZP.label(y||(y=(0,E.Z)(["\n  width: 100%;\n  margin-bottom: 2px;\n  color: black;\n  font-size: 15px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),M=S.ZP.input(Z||(Z=(0,E.Z)(["\n  width: 95%;\n  margin: 10px auto;\n  text-align: center;\n  height: 30px;\n"]))),U=S.ZP.input(j||(j=(0,E.Z)(["\n  width: 95%;\n  margin-bottom: 10px;\n  text-align: center;\n  height: 30px;\n"]))),$=function(){var n=function(n){var e=(0,i.useState)(n),t=(0,R.Z)(e,2),r=t[0],a=t[1];return[r,function(n){a((0,G.Z)((0,G.Z)({},r),{},(0,T.Z)({},n.target.name,n.target.value)))},function(){a(n)}]}({name:"",number:""}),e=(0,R.Z)(n,3),t=e[0],r=e[1],a=e[2],u=(0,o.I0)();return(0,D.jsxs)(B,{onSubmit:function(n){n.preventDefault(),u((0,c.uK)({name:t.name,number:t.number})),a()},children:[(0,D.jsx)(J,{children:(0,D.jsx)(M,{value:t.name,onChange:r,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0105\u0107\u0119\u0142\u0144\xf3\u015b\u017a\u017c\u0104\u0106\u0118\u0141\u0143\xd3\u015a\u0179\u017b]+(\\s[a-zA-Z\u0105\u0107\u0119\u0142\u0144\xf3\u015b\u017a\u017c\u0104\u0106\u0118\u0141\u0143\xd3\u015a\u0179\u017b]+)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,D.jsx)(J,{children:(0,D.jsx)(U,{value:t.number,onChange:r,type:"tel",name:"number",placeholder:"Number",pattern:"(\\+48)?\\s?(\\d{3}-\\d{3}-\\d{3}|\\d{3}\\s\\d{3}\\s\\d{3}|\\d{9,11})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,D.jsx)("button",{type:"submit",children:"Add contact"})]})},H=S.ZP.div(w||(w=(0,E.Z)(["\n  margin-bottom: 15px;\n"]))),Q=S.ZP.label(k||(k=(0,E.Z)(["\n  margin: 0 auto;\n  display: flex;\n"]))),V=S.ZP.input(C||(C=(0,E.Z)(["\n  width: 300px;\n  margin: 0px auto;\n  text-align: center;\n  height: 30px;\n"]))),W=function(){var n=(0,o.I0)(),e=(0,o.v9)(z);return(0,D.jsx)(H,{children:(0,D.jsx)(Q,{children:(0,D.jsx)(V,{type:"text",value:e,onChange:function(e){n((0,l.T)(e.target.value))},placeholder:"Search for contact"})})})},X=t(8922);function Y(){var n=(0,o.I0)(),e=(0,o.v9)(A),t=(0,o.v9)(z),s=(0,o.v9)(_),p=(0,o.v9)(F),d=(0,o.v9)(q);(0,i.useEffect)((function(){n((0,c.yF)())}),[n]);var f=(0,i.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,c.uK)(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),[n]),h=(0,i.useCallback)((function(e){n((0,l.T)(e.target.value))}),[n]),x=(0,i.useCallback)((function(e){n((0,c.GK)(e))}),[n]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u.q,{children:(0,D.jsx)("title",{children:" Contacs "})}),(0,D.jsxs)(X.im,{children:[(0,D.jsx)(X.h4,{children:"Phonebook"}),(0,D.jsx)($,{onSubmit:f}),(0,D.jsx)(X.al,{children:"Contacts"}),(0,D.jsxs)(X.Fb,{children:["All contacts: ",e.length]}),(0,D.jsx)(W,{value:t,onChange:h}),s&&!p&&(0,D.jsx)("b",{children:"Request in progress..."}),p&&(0,D.jsx)("div",{style:{color:"red"},children:p.message}),d.length>0?(0,D.jsx)(K,{contacts:d,onDeleteContact:x}):(0,D.jsx)("p",{children:"No contacts available."})]})]})}}}]);
//# sourceMappingURL=198.383eca8e.chunk.js.map