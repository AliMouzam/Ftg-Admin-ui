(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9368:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(3366),i=n(7462),o=n(7294),a=n(6010),s=n(4780),l=n(1796),c=n(3573),d=n(8169),p=n(5893),m=(0,d.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=n(8216),f=n(1657),g=n(1496),Z=n(1588),j=n(4867);function v(e){return(0,j.Z)("MuiCheckbox",e)}let b=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=e=>{let{classes:t,indeterminate:n,color:r}=e,o={root:["root",n&&"indeterminate",`color${(0,u.Z)(r)}`]},a=(0,s.Z)(o,v,t);return(0,i.Z)({},t,a)},k=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,u.Z)(n.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,p.jsx)(h,{}),P=(0,p.jsx)(m,{}),_=(0,p.jsx)(x,{}),S=o.forwardRef(function(e,t){var n,s;let l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:m=P,indeterminate:h=!1,indeterminateIcon:x=_,inputProps:u,size:g="medium",className:Z}=l,j=(0,r.Z)(l,y),v=h?x:m,b=h?x:c,S=(0,i.Z)({},l,{color:d,indeterminate:h,size:g}),z=w(S);return(0,p.jsx)(k,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":h},u),icon:o.cloneElement(v,{fontSize:null!=(n=v.props.fontSize)?n:g}),checkedIcon:o.cloneElement(b,{fontSize:null!=(s=b.props.fontSize)?s:g}),ownerState:S,ref:t,className:(0,a.Z)(z.root,Z)},j,{classes:z}))});var z=S},7109:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r,i=n(3366),o=n(7462),a=n(7294),s=n(6010),l=n(4780),c=n(8216),d=n(5861),p=n(7167),m=n(4423),h=n(1496),x=n(1588),u=n(4867);function f(e){return(0,u.Z)("MuiInputAdornment",e)}let g=(0,x.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Z=n(1657),j=n(5893);let v=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,c.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]},y=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:r,position:i,size:o,variant:a}=e,s={root:["root",n&&"disablePointerEvents",i&&`position${(0,c.Z)(i)}`,a,r&&"hiddenLabel",o&&`size${(0,c.Z)(o)}`]};return(0,l.Z)(s,f,t)},w=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:b})(({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${g.positionStart}&:not(.${g.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),k=a.forwardRef(function(e,t){let n=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),{children:l,className:c,component:h="div",disablePointerEvents:x=!1,disableTypography:u=!1,position:f,variant:g}=n,b=(0,i.Z)(n,v),k=(0,m.Z)()||{},C=g;g&&k.variant,k&&!C&&(C=k.variant);let P=(0,o.Z)({},n,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:x,position:f,variant:C}),_=y(P);return(0,j.jsx)(p.Z.Provider,{value:null,children:(0,j.jsx)(w,(0,o.Z)({as:h,ownerState:P,className:(0,s.Z)(_.root,c),ref:t},b,{children:"string"!=typeof l||u?(0,j.jsxs)(a.Fragment,{children:["start"===f?r||(r=(0,j.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,j.jsx)(d.Z,{color:"text.secondary",children:l})}))})});var C=k},7572:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(6278)}])},6278:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),o=n(1664),a=n.n(o),s=n(3321),l=n(7720),c=n(9368),d=n(3120),p=n(3841),m=n(3946),h=n(7357),x=n(4054),u=n(8396),f=n(7058),g=n(1496),Z=n(2734),j=n(7109),v=n(5861),b=n(480),y=n(9878),w=n(7562),k=n(8928),C=n(8756),P=n(8441);let _=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(20),paddingRight:"0 !important",[t.breakpoints.down("lg")]:{padding:t.spacing(10)}}}),S=(0,g.ZP)("img")(e=>{let{theme:t}=e;return{maxWidth:"48rem",[t.breakpoints.down("xl")]:{maxWidth:"38rem"},[t.breakpoints.down("lg")]:{maxWidth:"30rem"}}}),z=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:400},[t.breakpoints.up("lg")]:{maxWidth:450}}}),E=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.down("md")]:{maxWidth:400}}}),I=(0,g.ZP)(v.Z)(e=>{let{theme:t}=e;return{fontWeight:600,letterSpacing:"0.18px",marginBottom:t.spacing(1.5),[t.breakpoints.down("md")]:{marginTop:t.spacing(8)}}}),M=(0,g.ZP)(b.Z)(e=>{let{theme:t}=e;return{marginBottom:t.spacing(4),"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),D=(0,g.ZP)(a())(e=>{let{theme:t}=e;return{textDecoration:"none",color:t.palette.primary.main}}),W=()=>{let[e,t]=(0,i.useState)(!1),n=(0,Z.Z)(),{settings:o}=(0,C.r)(),g=(0,u.Z)(n.breakpoints.down("md")),{skin:b}=o;return(0,r.jsxs)(h.Z,{className:"content-right",children:[g?null:(0,r.jsxs)(h.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(_,{children:(0,r.jsx)(S,{alt:"register-illustration",src:"/images/pages/".concat("bordered"===b?"auth-v2-register-illustration-bordered":"auth-v2-register-illustration","-").concat(n.palette.mode,".png")})}),(0,r.jsx)(P.Z,{image:"/images/pages/auth-v2-register-mask-".concat(n.palette.mode,".png")})]}),(0,r.jsx)(z,{sx:"bordered"!==b||g?{}:{borderLeft:"1px solid ".concat(n.palette.divider)},children:(0,r.jsx)(h.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,r.jsxs)(E,{children:[(0,r.jsxs)(h.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:[(0,r.jsxs)("svg",{width:47,fill:"none",height:26,viewBox:"0 0 268 150",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:n.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint0_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:n.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:n.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint1_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,r.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:n.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint0_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{}),(0,r.jsx)("stop",{offset:"1",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint1_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{}),(0,r.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]}),(0,r.jsx)(v.Z,{variant:"h6",sx:{ml:2,lineHeight:1,fontWeight:700,fontSize:"1.5rem !important"},children:w.Z.templateName})]}),(0,r.jsxs)(h.Z,{sx:{mb:6},children:[(0,r.jsx)(I,{variant:"h5",children:"Adventure starts here \uD83D\uDE80"}),(0,r.jsx)(v.Z,{variant:"body2",children:"Make your app management easy and fun!"})]}),(0,r.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>e.preventDefault(),children:[(0,r.jsx)(d.Z,{autoFocus:!0,fullWidth:!0,sx:{mb:4},label:"Username",placeholder:"johndoe"}),(0,r.jsx)(d.Z,{fullWidth:!0,label:"Email",sx:{mb:4},placeholder:"user@email.com"}),(0,r.jsxs)(x.Z,{fullWidth:!0,children:[(0,r.jsx)(p.Z,{htmlFor:"auth-login-v2-password",children:"Password"}),(0,r.jsx)(f.Z,{label:"Password",id:"auth-login-v2-password",type:e?"text":"password",endAdornment:(0,r.jsx)(j.Z,{position:"end",children:(0,r.jsx)(m.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:()=>t(!e),children:(0,r.jsx)(y.Z,{icon:e?"mdi:eye-outline":"mdi:eye-off-outline"})})})})]}),(0,r.jsx)(M,{control:(0,r.jsx)(c.Z,{}),sx:{mb:4,mt:1.5,"& .MuiFormControlLabel-label":{fontSize:"0.875rem"}},label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.Z,{variant:"body2",component:"span",children:["I agree to"," "]}),(0,r.jsx)(D,{href:"/",onClick:e=>e.preventDefault(),children:"privacy policy & terms"})]})}),(0,r.jsx)(s.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Sign up"}),(0,r.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,r.jsx)(v.Z,{sx:{mr:2,color:"text.secondary"},children:"Already have an account?"}),(0,r.jsx)(v.Z,{href:"/login",component:a(),sx:{color:"primary.main",textDecoration:"none"},children:"Sign in instead"})]}),(0,r.jsx)(l.Z,{sx:{"& .MuiDivider-wrapper":{px:4},mt:e=>"".concat(e.spacing(5)," !important"),mb:e=>"".concat(e.spacing(7.5)," !important")},children:"or"}),(0,r.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(m.Z,{href:"/",component:a(),sx:{color:"#497ce2"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(y.Z,{icon:"mdi:facebook"})}),(0,r.jsx)(m.Z,{href:"/",component:a(),sx:{color:"#1da1f2"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(y.Z,{icon:"mdi:twitter"})}),(0,r.jsx)(m.Z,{href:"/",component:a(),onClick:e=>e.preventDefault(),sx:{color:e=>"light"===e.palette.mode?"#272727":"grey.300"},children:(0,r.jsx)(y.Z,{icon:"mdi:github"})}),(0,r.jsx)(m.Z,{href:"/",component:a(),sx:{color:"#db4437"},onClick:e=>e.preventDefault(),children:(0,r.jsx)(y.Z,{icon:"mdi:google"})})]})]})]})})})]})};W.getLayout=e=>(0,r.jsx)(k.Z,{children:e}),W.guestGuard=!0,t.default=W},8441:function(e,t,n){"use strict";var r=n(5893),i=n(8396),o=n(1496),a=n(2734);let s=(0,o.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"17.5%"}}}),l=e=>{let{image:t}=e,n=(0,a.Z)(),o=(0,i.Z)(n.breakpoints.down("md")),l=t||"/images/pages/auth-v2-login-mask-".concat(n.palette.mode,".png");return o?null:(0,r.jsx)(r.Fragment,{children:t&&"string"!=typeof t?t:(0,r.jsx)(s,{alt:"mask",src:l})})};t.Z=l}},function(e){e.O(0,[120,774,888,179],function(){return e(e.s=7572)}),_N_E=e.O()}]);