define("7f394f7b-0b39-41b0-89b3-16946caa2f33_0.1.0",["@ms/sp-fluentui-migration-utilities-bundle","@ms/office-ui-fabric-react-bundle","tslib","react","@ms/uifabric-styling-bundle","@ms/sp-fluentui-v9-utilities-bundle","@ms/odsp-core-bundle","@ms/sp-fluentui-v9-react-image-bundle","@ms/sp-fluentui-v9-react-radio-bundle","@ms/sp-fluentui-v9-react-label-bundle"],(e,t,n,a,i,r,o,s,c,d)=>(()=>{var l={124:(e,t,n)=>{var a=n(853);e.exports=a._Utilities}
,298:(e,t,n)=>{var a=n(79);e.exports=a.workaround_Icon}
,362:e=>{"use strict";e.exports=o},79:e=>{"use strict";e.exports=t},83:t=>{"use strict";t.exports=e},491:e=>{"use strict";e.exports=s},61:e=>{"use strict";e.exports=d},709:e=>{"use strict";e.exports=c},311:e=>{"use strict";e.exports=r},853:e=>{"use strict";e.exports=i},650:e=>{"use strict";e.exports=a},553:e=>{"use strict";e.exports=n}},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return l[e](n,n.exports,f),n.exports}f.d=(e,t)=>{for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var p={};return(()=>{"use strict";f.r(p),f.d(p,{ChoiceGroup:()=>Q});var e=f(79),t=f(553),n=f(650),a=f(298),i=(0,e.classNamesFunction)(),r={imageSize:{width:32,height:32}},o=function(o){var s=(0,e.getPropsWithDefaults)((0,t.__assign)((0,t.__assign)({},r),{key:o.itemKey}),o),c=s.ariaLabel,d=s.focused,l=s.required,u=s.theme,f=s.iconProps,p=s.imageSrc,m=s.imageSize,_=s.disabled,h=s.checked,b=s.id,g=s.styles,v=s.name,y=(0,t.__rest)(s,["ariaLabel","focused","required","theme","iconProps","imageSrc","imageSize","disabled","checked","id","styles","name"]),S=i(g,{theme:u,hasIcon:!!f,hasImage:!!p,checked:h,disabled:_,imageIsLarge:!!p&&(m.width>71||m.height>71),imageSize:m,focused:d}),D=(0,e.getNativeProps)(y,e.inputProperties),I=D.className,x=(0,t.__rest)(D,["className"]),C=function(){return n.createElement("span",{id:s.labelId,className:"ms-ChoiceFieldLabel"},s.text)},O=function(){var i=s.imageAlt,r=void 0===i?"":i,o=s.selectedImageSrc,c=(s.onRenderLabel?(0,e.composeRenderFunction)(s.onRenderLabel,C):C)((0,t.__assign)((0,t.__assign)({},s),{key:s.itemKey}));return n.createElement("label",{htmlFor:b,className:S.field},p&&n.createElement("div",{className:S.innerField},n.createElement("div",{className:S.imageWrapper},n.createElement(e.Image,(0,t.__assign)({src:p,alt:r},m))),n.createElement("div",{className:S.selectedImageWrapper},n.createElement(e.Image,(0,t.__assign)({src:o,alt:r},m)))),f&&n.createElement("div",{className:S.innerField},n.createElement("div",{className:S.iconWrapper},n.createElement(a.Icon,(0,t.__assign)({},f)))),p||f?n.createElement("div",{className:S.labelWrapper},c):c)},w=s.onRenderField,E=void 0===w?O:w;return n.createElement("div",{className:S.root},n.createElement("div",{className:S.choiceFieldWrapper},n.createElement("input",(0,t.__assign)({"aria-label":c,id:b,className:(0,e.css)(S.input,I),type:"radio",name:v,disabled:_,checked:h,required:l},x,{onChange:function(e){var n;null===(n=s.onChange)||void 0===n||n.call(s,e,(0,t.__assign)((0,t.__assign)({},s),{key:s.itemKey}))},onFocus:function(e){var n;null===(n=s.onFocus)||void 0===n||n.call(s,e,(0,t.__assign)((0,t.__assign)({},s),{key:s.itemKey}))},onBlur:function(e){var t;null===(t=s.onBlur)||void 0===t||t.call(s,e)}})),E((0,t.__assign)((0,t.__assign)({},s),{key:s.itemKey}),O)))};o.displayName="ChoiceGroupOption";var s={root:"ms-ChoiceField",choiceFieldWrapper:"ms-ChoiceField-wrapper",input:"ms-ChoiceField-input",field:"ms-ChoiceField-field",innerField:"ms-ChoiceField-innerField",imageWrapper:"ms-ChoiceField-imageWrapper",iconWrapper:"ms-ChoiceField-iconWrapper",labelWrapper:"ms-ChoiceField-labelWrapper",checked:"is-checked"},c="200ms",d="cubic-bezier(.4, 0, .23, 1)";function l(t,n){var a,i;return["is-inFocus",{selectors:(a={},a[".".concat(e.IsFocusVisibleClassName," &")]={position:"relative",outline:"transparent",selectors:{"::-moz-focus-inner":{border:0},":after":{content:'""',top:-2,right:-2,bottom:-2,left:-2,pointerEvents:"none",border:"1px solid ".concat(t),position:"absolute",selectors:(i={},i[e.HighContrastSelector]={borderColor:"WindowText",borderWidth:n?1:2},i)}}},a)}]}function u(e,t,n){return[t,{paddingBottom:2,transitionProperty:"opacity",transitionDuration:c,transitionTimingFunction:"ease",selectors:{".ms-Image":{display:"inline-block",borderStyle:"none"}}},(n?!e:e)&&["is-hidden",{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",opacity:0}]]}var m=(0,e.styled)(o,function(n){var a,i,r,o,f,p=n.theme,m=n.hasIcon,_=n.hasImage,h=n.checked,b=n.disabled,g=n.imageIsLarge,v=n.focused,y=n.imageSize,S=p.palette,D=p.semanticColors,I=p.fonts,x=(0,e.getGlobalClassNames)(s,p),C=S.neutralPrimary,O=D.inputBorderHovered,w=D.inputBackgroundChecked,E=S.themeDark,A=D.disabledBodySubtext,L=D.bodyBackground,k=S.neutralSecondary,M=D.inputBackgroundChecked,P=S.themeDark,T=D.disabledBodySubtext,U=S.neutralDark,F=D.focusBorder,H=D.inputBorderHovered,R=D.inputBackgroundChecked,N=S.themeDark,B=S.neutralLighter,j={selectors:{".ms-ChoiceFieldLabel":{color:U},":before":{borderColor:h?E:O},":after":[!m&&!_&&!h&&{content:'""',transitionProperty:"background-color",left:5,top:5,width:10,height:10,backgroundColor:k},h&&{borderColor:P,background:P}]}},V={borderColor:h?N:H,selectors:{":before":{opacity:1,borderColor:h?E:O}}},z=[{content:'""',display:"inline-block",backgroundColor:L,borderWidth:1,borderStyle:"solid",borderColor:C,width:20,height:20,fontWeight:"normal",position:"absolute",top:0,left:0,boxSizing:"border-box",transitionProperty:"border-color",transitionDuration:c,transitionTimingFunction:d,borderRadius:"50%"},b&&{borderColor:A,selectors:(a={},a[e.HighContrastSelector]=(0,t.__assign)({borderColor:"GrayText",background:"Window"},(0,e.getHighContrastNoAdjustStyle)()),a)},h&&{borderColor:b?A:w,selectors:(i={},i[e.HighContrastSelector]={borderColor:"Highlight",background:"Window",forcedColorAdjust:"none"},i)},(m||_)&&{top:3,right:3,left:"auto",opacity:h?1:0}],G=[{content:'""',width:0,height:0,borderRadius:"50%",position:"absolute",left:10,right:0,transitionProperty:"border-width",transitionDuration:c,transitionTimingFunction:d,boxSizing:"border-box"},h&&{borderWidth:5,borderStyle:"solid",borderColor:b?T:M,background:M,left:5,top:5,width:10,height:10,selectors:(r={},r[e.HighContrastSelector]={borderColor:"Highlight",forcedColorAdjust:"none"},r)},h&&(m||_)&&{top:8,right:8,left:"auto"}];return{root:[x.root,p.fonts.medium,{display:"flex",alignItems:"center",boxSizing:"border-box",color:D.bodyText,minHeight:26,border:"none",position:"relative",marginTop:8,selectors:{".ms-ChoiceFieldLabel":{display:"inline-block"}}},!m&&!_&&{selectors:{".ms-ChoiceFieldLabel":{paddingLeft:"26px"}}},_&&"ms-ChoiceField--image",m&&"ms-ChoiceField--icon",(m||_)&&{display:"inline-flex",fontSize:0,margin:"0 4px 4px 0",paddingLeft:0,backgroundColor:B,height:"100%"}],choiceFieldWrapper:[x.choiceFieldWrapper,v&&l(F,m||_)],input:[x.input,{position:"absolute",opacity:0,top:0,right:0,width:"100%",height:"100%",margin:0},b&&"is-disabled"],field:[x.field,h&&x.checked,{display:"inline-block",cursor:"pointer",marginTop:0,position:"relative",verticalAlign:"top",userSelect:"none",minHeight:20,selectors:{":hover":!b&&j,":focus":!b&&j,":before":z,":after":G}},m&&"ms-ChoiceField--icon",_&&"ms-ChoiceField-field--image",(m||_)&&{boxSizing:"content-box",cursor:"pointer",paddingTop:22,margin:0,textAlign:"center",transitionProperty:"all",transitionDuration:c,transitionTimingFunction:"ease",border:"1px solid transparent",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},h&&{borderColor:R},(m||_)&&!b&&{selectors:{":hover":V,":focus":V}},b&&{cursor:"default",selectors:{".ms-ChoiceFieldLabel":{color:D.disabledBodyText,selectors:(o={},o[e.HighContrastSelector]=(0,t.__assign)({color:"GrayText"},(0,e.getHighContrastNoAdjustStyle)()),o)}}},h&&b&&{borderColor:B}],innerField:[x.innerField,_&&{height:y.height,width:y.width},(m||_)&&{position:"relative",display:"inline-block",paddingLeft:30,paddingRight:30},(m||_)&&g&&{paddingLeft:24,paddingRight:24},(m||_)&&b&&{opacity:.25,selectors:(f={},f[e.HighContrastSelector]={color:"GrayText",opacity:1},f)}],imageWrapper:u(!1,x.imageWrapper,h),selectedImageWrapper:u(!0,x.imageWrapper,h),iconWrapper:[x.iconWrapper,{fontSize:32,lineHeight:32,height:32}],labelWrapper:[x.labelWrapper,I.medium,(m||_)&&{display:"block",position:"relative",margin:"4px 8px 2px 8px",height:32,lineHeight:15,maxWidth:2*y.width,overflow:"hidden",whiteSpace:"pre-wrap"}]}},void 0,{scope:"ChoiceGroupOption"}),_=f(124);function h(e,t){var a=n.useRef(t);return a.current||(a.current=(0,_.getId)(e)),a.current}function b(e){var t=n.useRef();return void 0===t.current&&(t.current={value:"function"==typeof e?e():e}),t.current.value}var g=n.createContext({window:"object"==typeof window?window:void 0}),v=(0,e.classNamesFunction)(),y=function(e,t){return"".concat(t,"-").concat(e.key)},S=function(t,n){return void 0===n?void 0:(0,e.find)(t,function(e){return e.key===n})},D=function(t,n,a,i,r){var o=S(t,n)||t.filter(function(e){return!e.disabled})[0],s=o&&(null==r?void 0:r.getElementById(y(o,a)));s&&(s.focus(),(0,e.setFocusVisibility)(!0,s,i))},I=n.forwardRef(function(a,i){var r=a.className,o=a.theme,s=a.styles,c=a.options,d=void 0===c?[]:c,l=a.label,u=a.required,f=a.disabled,p=a.name,_=a.defaultSelectedKey,I=a.componentRef,x=a.onChange,C=h("ChoiceGroup"),O=h("ChoiceGroupLabel"),w=(0,e.getNativeProps)(a,e.divProperties,["onChange","className","required"]),E=v(s,{theme:o,className:r,optionsContainIconOrImage:d.some(function(e){return!(!e.iconProps&&!e.imageSrc)})}),A=a.ariaLabelledBy||(l?O:a["aria-labelledby"]),L=function(e,t,a){var i=n.useState(t),r=i[0],o=i[1],s=b(void 0!==e),c=s?e:r,d=n.useRef(c),l=n.useRef(a);n.useEffect(function(){d.current=c,l.current=a});var u=b(function(){return function(e,t){var n="function"==typeof e?e(d.current):e;l.current&&l.current(t,n),s||o(n)}});return[c,u]}(a.selectedKey,_),k=L[0],M=L[1],P=n.useState(),T=P[0],U=P[1],F=n.useRef(null),H=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var i=n.useCallback(function(t){i.current=t;for(var n=0,a=e;n<a.length;n++){var r=a[n];"function"==typeof r?r(t):r&&(r.current=t)}},(0,t.__spreadArray)([],e,!0));return i}(F,i),R=n.useContext(e.FocusRectsContext);!function(e,t,a,i,r){var o=function(){var e;return(null!==(e=function(){var e;return null===(e=n.useContext(g).window)||void 0===e?void 0:e.document}())&&void 0!==e?e:"undefined"!=typeof document)?document:void 0}();n.useImperativeHandle(i,function(){return{get checkedOption(){return S(e,t)},focus:function(){D(e,t,a,r,o)}}},[e,t,a,r,o])}(d,k,C,I,null==R?void 0:R.registeredProviders),(0,e.useFocusRects)(F);var N=n.useCallback(function(e,t){var n;t&&(U(t.itemKey),null===(n=t.onFocus)||void 0===n||n.call(t,e))},[]),B=n.useCallback(function(e,t){var n;U(void 0),null===(n=null==t?void 0:t.onBlur)||void 0===n||n.call(t,e)},[]),j=n.useCallback(function(e,t){var n;t&&(M(t.itemKey),null===(n=t.onChange)||void 0===n||n.call(t,e),null==x||x(e,S(d,t.itemKey)))},[x,d,M]),V=n.useCallback(function(e){(function(e){return e.relatedTarget instanceof HTMLElement&&"true"===e.relatedTarget.dataset.isFocusTrapZoneBumper})(e)&&D(d,k,C,null==R?void 0:R.registeredProviders)},[d,k,C,R]);return n.createElement("div",(0,t.__assign)({className:E.root},w,{ref:H}),n.createElement("div",(0,t.__assign)({role:"radiogroup"},A&&{"aria-labelledby":A},{onFocus:V}),l&&n.createElement(e.Label,{className:E.label,required:u,id:O,disabled:f},l),n.createElement("div",{className:E.flexContainer},d.map(function(e){return n.createElement(m,(0,t.__assign)({itemKey:e.key},e,{key:e.key,onBlur:B,onFocus:N,onChange:j,focused:e.key===T,checked:e.key===k,disabled:e.disabled||f,id:y(e,C),labelId:e.labelId||"".concat(O,"-").concat(e.key),name:p||C,required:u}))}))))});I.displayName="ChoiceGroup";var x={root:"ms-ChoiceFieldGroup",flexContainer:"ms-ChoiceFieldGroup-flexContainer"},C=(0,e.styled)(I,function(t){var n=t.className,a=t.optionsContainIconOrImage,i=t.theme,r=(0,e.getGlobalClassNames)(x,i);return{root:[n,r.root,i.fonts.medium,{display:"block"}],flexContainer:[r.flexContainer,a&&{display:"flex",flexDirection:"row",flexWrap:"wrap"}]}},void 0,{scope:"ChoiceGroup"}),O=f(709),w=f(311),E=f(61),A=f(491);function L(e,n){return a=e,i=n,r=(0,t.__assign)({},a),Object.keys(r).forEach(function(e){i.has(e)&&delete r[e]}),r;var a,i,r}var k=f(362);function M(){return k.KillSwitch.isActivated("f206f4da-e007-431f-b312-12369feccd6b")}function P(){return k.KillSwitch.isActivated("9be0efc2-984e-45ee-a7e0-5db1ccfe9c73")}function T(){return k.KillSwitch.isActivated("cfb84100-dc41-492b-aaec-9e9533b590bf")}var U,F=(0,e.classNamesFunction)({useStaticStyles:!0}),H=new Set(["ariaLabelledBy","componentRef","defaultSelectedKey","label","onChange","options","selectedKey","styles","theme"]),R=new Set(["ariaLabel","disabled","iconProps","id","imageAlt","imageSize","imageSrc","key","labelId","onRenderField","onRenderLabel","selectedImageSrc","styles","text"]),N=f(83),B="32px",j=(0,w.makeStyles)({innerField:{position:"relative",display:"inline-block",paddingLeft:"30px",paddingRight:"30px"},innerFieldDisabled:(U={opacity:.25},U["@media screen and (-ms-high-contrast: active), screen and (forced-colors: active)"]={color:"GrayText",opacity:1},U),iconWrapper:{fontSize:B,lineHeight:B,height:B},iconWrapperV2:{fontSize:B,lineHeight:B},imageWrapper:{fontSize:B,lineHeight:B},labelWrapper:(0,t.__assign)({lineHeight:N.tokens.lineHeightBase100,height:"32px"},w.shorthands.margin("4px","8px","2px")),image:{display:"block"},field:(0,t.__assign)({display:"flex",alignItems:"center",flexDirection:"column"},w.shorthands.padding("22px","0px","0px","0px")),option:{"& .fui-Radio__input:enabled":{"& ~ label.fui-Radio__label":{color:N.tokens.semanticBodyText}},"& .fui-Radio__input:disabled":{"& ~ .fui-Radio__indicator":(0,t.__assign)({},w.shorthands.borderColor(N.tokens.colorNeutralForeground3)),"& ~ .fui-Radio__label":{color:N.tokens.colorNeutralForeground3}}}}),V=(0,w.makeStyles)({root:(0,t.__assign)((0,t.__assign)((0,t.__assign)({display:"flex",alignItems:"end",backgroundColor:N.tokens.colorNeutralBackground1Hover},T()?void 0:{boxSizing:"border-box"}),w.shorthands.margin(T()?"2px":"4px",T()?"2px":"4px","0px","0px")),{"&:has(input:enabled:not(:checked))":(0,t.__assign)({},w.shorthands.border("1px","solid","transparent")),"&:has(input:enabled:checked)":(0,t.__assign)({},w.shorthands.border("1px","solid",N.tokens.colorCompoundBrandStroke)),"&:has(input:enabled:focus)":(0,t.__assign)({},w.shorthands.border("1px","solid",N.tokens.colorCompoundBrandStroke)),"&:has(input:enabled:hover)":(0,t.__assign)({},w.shorthands.border("1px","solid",N.tokens.colorNeutralForeground1)),"& .ms-ChoiceFieldShim-labelWrapper":(0,t.__assign)((0,t.__assign)({},w.shorthands.overflow("hidden")),{whiteSpace:"pre-wrap"})}),disabledRoot:{"&:has(input:disabled:not(:checked))":{"& .fui-Radio__indicator":{display:"none"}}},input:{"&:enabled:not(:checked) ~ .fui-Radio__indicator":(0,t.__assign)({},w.shorthands.border("1px","solid","transparent")),"&:enabled:checked ~ .fui-Radio__indicator":{backgroundColor:N.tokens.colorNeutralBackground1},"&:enabled:focus ~ .fui-Radio__indicator":{backgroundColor:N.tokens.colorNeutralBackground1},"&:enabled:hover ~ .fui-Radio__indicator":{backgroundColor:N.tokens.colorNeutralBackground1}},indicator:{marginBottom:"0px"},indicatorV2:{marginBottom:"0px",position:"absolute",top:0,right:0,zIndex:5}}),z=(0,w.makeStyles)({root:{flexDirection:"row",flexWrap:"wrap"}}),G=(0,e.classNamesFunction)({useStaticStyles:!0}),K=function(e,t){return"".concat(t,"-").concat(e.key)},W=n.memo(function(e){var i=e.options,r=e.id,o=null==i?void 0:i[0].iconProps,s=null==i?void 0:i[0].imageSrc,c=V(),d=j(),l=e.optionStylesV9;return i?n.createElement(n.Fragment,null,i.map(function(e){var i=F(e.styles);return n.createElement(O.Radio,(0,t.__assign)({},function(e,i,r){var o=e.ariaLabel,s=e.disabled,c=e.iconProps,d=e.imageSrc,l=e.imageAlt,u=e.imageSize,f=e.key,p=e.text,m=e.onRenderLabel,_=(null==m?void 0:m((0,t.__assign)({},e)))||p,h=r,b=function(){var e=n.createElement(n.Fragment,null,d&&n.createElement("div",{className:(0,w.mergeClasses)("ms-ChoiceField-innerField",h.innerField,i.innerField)},n.createElement("div",{className:(0,w.mergeClasses)(T()?P()?h.iconWrapper:h.iconWrapperV2:h.imageWrapper,i.imageWrapper)},n.createElement(A.Image,(0,t.__assign)({src:d,alt:l},u,{className:T()?void 0:r.image})))),c&&n.createElement("div",{className:(0,w.mergeClasses)("ms-ChoiceField-innerField",h.innerField,i.innerField)},n.createElement("div",{className:(0,w.mergeClasses)(h.iconWrapper,i.iconWrapper)},n.createElement(a.Icon,(0,t.__assign)({},c)))),d||c?k.KillSwitch.isActivated("a5e6e3b7-4e0e-4e7a-8b0e-1e9b5d9b9c1b")?n.createElement("div",{className:(0,w.mergeClasses)(h.labelWrapper,i.labelWrapper)},_):n.createElement("div",{className:(0,w.mergeClasses)("ms-ChoiceField-labelWrapper ms-ChoiceFieldShim-labelWrapper",h.labelWrapper,i.labelWrapper)},n.createElement("span",{className:"ms-ChoiceFieldLabel ms-ChoiceFieldShimLabel"},_)):_);return M()&&i.field?n.createElement("div",{className:i.field},e):e},g=(0,t.__assign)({label:M()?b():{className:(0,w.mergeClasses)("ms-ChoiceField-field",P()||!d&&!c?"":h.field,i.field),children:b()},value:f,"aria-label":o||e["aria-label"]},L(e,R));return k.KillSwitch.isActivated("B20D8FD3-74D6-4C89-A443-87E3A9358342")?g.disabled=s:s&&(g.disabled=!0),g}(e,i,l),{className:(0,w.mergeClasses)("ms-ChoiceField",o&&"ms-ChoiceField--icon",s&&"ms-ChoiceField--image",(o||s)&&c.root,!k.KillSwitch.isActivated("3fee4e33-c8e8-4dec-98d3-70359116e853")&&d.option,null==i?void 0:i.choiceFieldWrapper,P()?void 0:i.root,!k.KillSwitch.isActivated("def9a5d9-f5c4-433d-87c5-28401328e604")&&(o||s)&&c.disabledRoot),input:{className:(0,w.mergeClasses)("ms-ChoiceField-input",M()||!o&&!s?void 0:c.input)},indicator:{className:o||s?M()?c.indicator:c.indicatorV2:void 0},id:K(e,r),key:k.KillSwitch.isActivated("78a2bdca-d35f-4893-bfb8-2310b30fb030")?void 0:e.key}))})):n.createElement(n.Fragment,null)}),q=function(e){var a=e.className,i=e.id,r=e.label,o=e.options,s=e.styles,c=(0,w.useId)("ChoiceGroupShim"),d=(0,w.useId)("ChoiceGroupShimLabel"),l=i||d,u=(null==o?void 0:o[0].iconProps)||(null==o?void 0:o[0].imageSrc),f=function(e,n){var a=e.ariaLabelledBy,i=e.componentRef,r=e.defaultSelectedKey,o=e.label,s=e.name,c=e.options,d=e.onChange,l=e.selectedKey,u=(null==c?void 0:c[0].iconProps)||(null==c?void 0:c[0].imageSrc)?"horizontal-stacked":"vertical",f=function(e){var t=new Map;return e?(e.forEach(function(e){t.set(e.key.toString(),e)}),t):t}(c),p=d&&function(e,t){return d(e,f.get(t.value))},m={name:k.KillSwitch.isActivated("d6691b58-3186-4a94-a806-9a8cffbfb324")?o:s||n,value:l,defaultValue:r,layout:u,onChange:p};return(0,t.__assign)((0,t.__assign)({"aria-labelledby":a||e["aria-labelledby"],ref:i},m),L(e,H))}(e,c),p=z(),m=j(),_=function(e){return{disabled:e.disabled,required:e.required,weight:"semibold"}}(e),h=G(s);return(null==o?void 0:o[0].onRenderField)?n.createElement(C,(0,t.__assign)({},e)):n.createElement("div",{className:(0,w.mergeClasses)("ms-ChoiceFieldGroup",h.root)},r&&n.createElement(E.Label,(0,t.__assign)({},_,{id:l,className:(0,w.mergeClasses)("ms-ChoiceField-labelWrapper",h.label)}),r),n.createElement(O.RadioGroup,(0,t.__assign)({},f,{"aria-labelledby":l,className:(0,w.mergeClasses)("ms-ChoiceFieldGroup-flexContainer",a,h.flexContainer,u&&p.root)}),n.createElement(W,{options:o,id:c,optionStylesV9:m})))};q.displayName="ChoiceGroupShim";var Q=(0,N.wrapper)(C,q,60415)})(),p})());