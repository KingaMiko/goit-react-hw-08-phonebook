"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[901],{901:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var o=n(4165),r=n(5861),a=n(2791),i=n(9434),l=n(4270),c=n(3634),s="NOT_FOUND";var u=function(e,t){return e===t};function d(e,t){var n="object"===typeof t?t:{equalityCheck:t},o=n.equalityCheck,r=void 0===o?u:o,a=n.maxSize,i=void 0===a?1:a,l=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e(t[r],n[r]))return!1;return!0}}(r),d=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var r=n[o];return o>0&&(n.splice(o,1),n.unshift(r)),r.value}return s}return{get:o,put:function(t,r){o(t)===s&&(n.unshift({key:t,value:r}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function p(){var t=d.get(arguments);if(t===s){if(t=e.apply(null,arguments),l){var n=d.getEntries(),o=n.find((function(e){return l(e.value,t)}));o&&(t=o.value)}d.put(arguments,t)}return t}return p.clearCache=function(){return d.clear()},p}function p(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];var a,i=0,l={memoizeOptions:void 0},c=o.pop();if("object"===typeof c&&(l=c,c=o.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=l,u=s.memoizeOptions,d=void 0===u?n:u,f=Array.isArray(d)?d:[d],v=p(o),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),m=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return a=h.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:v,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return r}var v=f(d),h=function(e){return e.contacts.items},m=function(e){return e.filter},g=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},b=v([h,m],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),Z=n(4554),y=n(890),C=n(4942),j=n(3366),z=n(7462),w=n(3733),S=n(4419),k=n(2065),A=n(6934),M=n(1402),R=n(3701),I=n(4036),L=n(5878),N=n(1217);function P(e){return(0,N.Z)("MuiIconButton",e)}var W=(0,L.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),E=n(184),O=["edge","children","className","color","disabled","disableFocusRipple","size"],B=(0,A.ZP)(R.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,I.Z)(n.color))],n.edge&&t["edge".concat((0,I.Z)(n.edge))],t["size".concat((0,I.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,z.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,k.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,o=e.ownerState,r=null==(t=(n.vars||n).palette)?void 0:t[o.color];return(0,z.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,z.Z)({color:null==r?void 0:r.main},!o.disableRipple&&{"&:hover":(0,z.Z)({},r&&{backgroundColor:n.vars?"rgba(".concat(r.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,k.Fq)(r.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,C.Z)({},"&.".concat(W.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),F=a.forwardRef((function(e,t){var n=(0,M.Z)({props:e,name:"MuiIconButton"}),o=n.edge,r=void 0!==o&&o,a=n.children,i=n.className,l=n.color,c=void 0===l?"default":l,s=n.disabled,u=void 0!==s&&s,d=n.disableFocusRipple,p=void 0!==d&&d,f=n.size,v=void 0===f?"medium":f,h=(0,j.Z)(n,O),m=(0,z.Z)({},n,{edge:r,color:c,disabled:u,disableFocusRipple:p,size:v}),g=function(e){var t=e.classes,n=e.disabled,o=e.color,r=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==o&&"color".concat((0,I.Z)(o)),r&&"edge".concat((0,I.Z)(r)),"size".concat((0,I.Z)(a))]};return(0,S.Z)(i,P,t)}(m);return(0,E.jsx)(B,(0,z.Z)({className:(0,w.Z)(g.root,i),centerRipple:!0,focusRipple:!p,disabled:u,ref:t,ownerState:m},h,{children:a}))})),H=n(2716),_=n(2271),V=n(7029),T=function(){var e=(0,i.v9)(h),t=(0,i.v9)(m),n=(0,i.I0)(),o=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).sort((function(e,t){return e.name.localeCompare(t.name)}));return(0,E.jsx)(Z.Z,{sx:{maxWidth:"400px",width:"100%",mt:3,mx:"auto"},children:o.map((function(e,t){var o=e.id,r=e.name,a=e.number;return(0,E.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"center",padding:"10px 10px",borderBottom:"1px solid #ddd"},children:[(0,E.jsx)(H.Z,{color:"primary",sx:{marginRight:3}}),(0,E.jsx)(Z.Z,{sx:{flex:1,minWidth:0},children:(0,E.jsx)(y.Z,{variant:"h6",color:"secondary",noWrap:!0,children:r})}),(0,E.jsx)(Z.Z,{sx:{flex:1,minWidth:0,marginLeft:1},children:(0,E.jsx)(y.Z,{variant:"body1",noWrap:!0,children:a})}),(0,E.jsx)(F,{onClick:function(){return function(e){n((0,c.GK)(e))}(o)},size:"small",sx:{color:V.r.palette.primary.main,marginLeft:1},children:(0,E.jsx)(_.Z,{})})]},o)}))})},q=n(9439),D=n(8675),K=n(4294),G=n(1413),$=function(){var e=function(e){var t=(0,a.useState)(e),n=(0,q.Z)(t,2),o=n[0],r=n[1];return[o,function(e){r((0,G.Z)((0,G.Z)({},o),{},(0,C.Z)({},e.target.name,e.target.value)))},function(){r(e)}]}({name:"",number:""}),t=(0,q.Z)(e,3),n=t[0],o=t[1],r=t[2],l=(0,i.I0)();return(0,E.jsxs)(Z.Z,{component:"form",onSubmit:function(e){e.preventDefault(),l((0,c.uK)({name:n.name,number:n.number})),r()},autoComplete:"off",width:"300px",bgcolor:"rgba(255, 255, 255, 0.8)",padding:"20px",borderRadius:"3px",boxShadow:"0 9px 50px hsla(20, 67%, 75%, 0.31)",children:[(0,E.jsx)(D.Z,{value:n.name,onChange:o,type:"text",name:"name",label:"Name",placeholder:"Name",required:!0,fullWidth:!0,InputLabelProps:{shrink:!0},sx:{marginBottom:"10px"}}),(0,E.jsx)(D.Z,{value:n.number,onChange:o,type:"tel",name:"number",label:"Number",placeholder:"Number",fullWidth:!0,required:!0,sx:{marginBottom:"10px"},pattern:"(\\+48)?\\s?(\\d{3}-\\d{3}-\\d{3}|\\d{3}\\s\\d{3}\\s\\d{3}|\\d{9,11})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",InputLabelProps:{shrink:!0}}),(0,E.jsx)(K.Z,{type:"submit",variant:"contained",color:"primary",sx:{marginTop:"10px",width:"100%"},children:"Add contact"})]})},U=n(4808),Y=function(){var e=(0,i.I0)(),t=(0,i.v9)(m);return(0,E.jsx)(Z.Z,{my:2,children:(0,E.jsx)(D.Z,{variant:"outlined",fullWidth:!0,type:"text",value:t,onChange:function(t){e((0,U.T)(t.target.value))},label:"Search for contact",placeholder:"Enter contact name",InputLabelProps:{shrink:!0},sx:{backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"3px","& fieldset":{borderColor:"rgba(0,0,0,0.23)"},"&:hover fieldset":{borderColor:"rgba(0,0,0,0.6)"},"&.Mui-focused fieldset":{borderColor:"primary.main"}}})})},J=n(3239),Q=n(5527);function X(e){return(0,N.Z)("MuiAlert",e)}var ee=(0,L.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),te=n(9201),ne=(0,te.Z)((0,E.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),oe=(0,te.Z)((0,E.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),re=(0,te.Z)((0,E.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ae=(0,te.Z)((0,E.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ie=(0,te.Z)((0,E.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),le=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],ce=(0,A.ZP)(Q.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,I.Z)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode?k._j:k.$n,r="light"===t.palette.mode?k.$n:k._j,a=n.color||n.severity;return(0,z.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===n.variant&&(0,C.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:o(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(a,"StandardBg")]:r(t.palette[a].light,.9)},"& .".concat(ee.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"outlined"===n.variant&&(0,C.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:o(t.palette[a].light,.6),border:"1px solid ".concat((t.vars||t).palette[a].light)},"& .".concat(ee.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"filled"===n.variant&&(0,z.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}))})),se=(0,A.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ue=(0,A.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),de=(0,A.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),pe={success:(0,E.jsx)(ne,{fontSize:"inherit"}),warning:(0,E.jsx)(oe,{fontSize:"inherit"}),error:(0,E.jsx)(re,{fontSize:"inherit"}),info:(0,E.jsx)(ae,{fontSize:"inherit"})},fe=a.forwardRef((function(e,t){var n,o,r,a,i,l,c=(0,M.Z)({props:e,name:"MuiAlert"}),s=c.action,u=c.children,d=c.className,p=c.closeText,f=void 0===p?"Close":p,v=c.color,h=c.components,m=void 0===h?{}:h,g=c.componentsProps,x=void 0===g?{}:g,b=c.icon,Z=c.iconMapping,y=void 0===Z?pe:Z,C=c.onClose,k=c.role,A=void 0===k?"alert":k,R=c.severity,L=void 0===R?"success":R,N=c.slotProps,P=void 0===N?{}:N,W=c.slots,O=void 0===W?{}:W,B=c.variant,H=void 0===B?"standard":B,_=(0,j.Z)(c,le),V=(0,z.Z)({},c,{color:v,severity:L,variant:H}),T=function(e){var t=e.variant,n=e.color,o=e.severity,r=e.classes,a={root:["root","".concat(t).concat((0,I.Z)(n||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,S.Z)(a,X,r)}(V),q=null!=(n=null!=(o=O.closeButton)?o:m.CloseButton)?n:F,D=null!=(r=null!=(a=O.closeIcon)?a:m.CloseIcon)?r:ie,K=null!=(i=P.closeButton)?i:x.closeButton,G=null!=(l=P.closeIcon)?l:x.closeIcon;return(0,E.jsxs)(ce,(0,z.Z)({role:A,elevation:0,ownerState:V,className:(0,w.Z)(T.root,d),ref:t},_,{children:[!1!==b?(0,E.jsx)(se,{ownerState:V,className:T.icon,children:b||y[L]||pe[L]}):null,(0,E.jsx)(ue,{ownerState:V,className:T.message,children:u}),null!=s?(0,E.jsx)(de,{ownerState:V,className:T.action,children:s}):null,null==s&&C?(0,E.jsx)(de,{ownerState:V,className:T.action,children:(0,E.jsx)(q,(0,z.Z)({size:"small","aria-label":f,title:f,color:"inherit",onClick:C},K,{children:(0,E.jsx)(D,(0,z.Z)({fontSize:"small"},G))}))}):null]}))})),ve=n(4586);function he(){var e=(0,i.I0)(),t=(0,i.v9)(h),n=(0,i.v9)(g),s=(0,i.v9)(x),u=(0,i.v9)(b);(0,a.useEffect)((function(){e((0,c.yF)())}),[e]);var d=(0,a.useCallback)(function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e((0,c.uK)(n));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l.q,{children:(0,E.jsx)("title",{children:"Contacts"})}),(0,E.jsxs)(Z.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(45deg, #f2f2f2 30%, #d9d9d9 90%)",overflow:"hidden",position:"relative",children:[(0,E.jsxs)(Z.Z,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:"-1",overflow:"hidden",children:[(0,E.jsx)(ve.Z,{style:{fontSize:"20vw",opacity:.1,position:"absolute",top:"20%",left:"10%",transform:"rotate(25deg)"}}),(0,E.jsx)(ve.Z,{style:{fontSize:"20vw",opacity:.1,position:"absolute",bottom:"20%",right:"10%",transform:"rotate(-25deg)"}})]}),(0,E.jsx)(y.Z,{variant:"h3",component:"h1",textAlign:"center",color:"rgba(0,0,0,0.7)",fontWeight:"bold",mb:3,children:"Your Contacts"}),(0,E.jsx)($,{onSubmit:d}),(0,E.jsxs)(y.Z,{variant:"h6",component:"p",mt:2,children:["All contacts: ",t.length]}),(0,E.jsx)(Y,{}),n&&(0,E.jsx)(J.Z,{}),s&&(0,E.jsx)(fe,{severity:"error",children:s.message}),u.length>0?(0,E.jsx)(T,{contacts:u,onDeleteContact:function(t){return e((0,c.GK)(t))}}):(0,E.jsx)(y.Z,{variant:"body1",mt:2,children:"No contacts available."})]})]})}},4586:function(e,t,n){var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184),i=(0,r.default)((0,a.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");t.Z=i},2271:function(e,t,n){var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184),i=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.Z=i},2716:function(e,t,n){var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184),i=(0,r.default)((0,a.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");t.Z=i}}]);
//# sourceMappingURL=901.e92543a9.chunk.js.map