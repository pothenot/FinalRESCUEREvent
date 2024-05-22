define("91976643-f860-4be9-ba8f-32b82339a0ca_0.1.0",["@ms/sp-fluentui-migration-utilities-bundle","@ms/uifabric-styling-bundle","tslib","react","@ms/office-ui-fabric-react-bundle","@ms/odsp-core-bundle","@ms/sp-fluentui-v9-utilities-bundle","@ms/sp-fluentui-v9-react-label-bundle","@ms/sp-fluentui-v9-react-switch-bundle"],(e,t,n,a,i,r,o,s,c)=>(()=>{var d={124:(e,t,n)=>{var a=n(853);e.exports=a._Utilities}
,362:e=>{"use strict";e.exports=r},79:e=>{"use strict";e.exports=i},83:t=>{"use strict";t.exports=e},61:e=>{"use strict";e.exports=s},969:e=>{"use strict";e.exports=c},311:e=>{"use strict";e.exports=o},853:e=>{"use strict";e.exports=t},650:e=>{"use strict";e.exports=a},553:e=>{"use strict";e.exports=n}},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return d[e](n,n.exports,u),n.exports}u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return(()=>{"use strict";u.r(f),u.d(f,{Toggle:()=>P});var e=u(124),t=u(553),n=u(650);function a(e){var t=n.useRef();return void 0===t.current&&(t.current={value:"function"==typeof e?e():e}),t.current.value}function i(e,t,i){var r=n.useState(t),o=r[0],s=r[1],c=a(void 0!==e),d=c?e:o,l=n.useRef(d),u=n.useRef(i);n.useEffect(function(){l.current=d,u.current=i});var f=a(function(){return function(e,t){var n="function"==typeof e?e(l.current):e;u.current&&u.current(t,n),c||s(n)}});return[d,f]}function r(t,a){var i=n.useRef(a);return i.current||(i.current=(0,e.getId)(t)),i.current}var o=u(79),s=(0,o.classNamesFunction)({cacheSize:100}),c=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return(0,t.__extends)(a,e),a.prototype.render=function(){var e=this.props,a=e.as,i=void 0===a?"label":a,r=e.children,c=e.className,d=e.disabled,l=e.styles,u=e.required,f=e.theme,p=s(l,{className:c,disabled:d,required:u,theme:f});return n.createElement(i,(0,t.__assign)({},(0,o.getNativeProps)(this.props,o.divProperties),{className:p.root}),r)},a}(n.Component),d=(0,o.styled)(c,function(e){var n,a=e.theme,i=e.className,r=e.disabled,s=e.required,c=a.semanticColors,d=o.FontWeights.semibold,l=c.bodyText,u=c.disabledBodyText,f=c.errorText;return{root:["ms-Label",a.fonts.medium,{fontWeight:d,color:l,boxSizing:"border-box",boxShadow:"none",margin:0,display:"block",padding:"5px 0",wordWrap:"break-word",overflowWrap:"break-word"},r&&{color:u,selectors:(n={},n[o.HighContrastSelector]=(0,t.__assign)({color:"GrayText"},(0,o.getHighContrastNoAdjustStyle)()),n)},s&&{selectors:{"::after":{content:"' *'",color:f,paddingRight:12}}},i]}},void 0,{scope:"Label"}),l=(0,e.classNamesFunction)(),p=n.forwardRef(function(a,o){var s=a.as,c=void 0===s?"div":s,u=a.ariaLabel,f=a.checked,p=a.className,_=a.defaultChecked,h=void 0!==_&&_,b=a.disabled,g=a.inlineLabel,v=a.label,y=a.offAriaLabel,S=a.offText,D=a.onAriaLabel,I=a.onChange,x=a.onChanged,C=a.onClick,O=a.onText,w=a.role,E=a.styles,A=a.theme,L=i(f,h,n.useCallback(function(e,t){null==I||I(e,t),null==x||x(t)},[I,x])),k=L[0],M=L[1],P=l(E,{theme:A,className:p,disabled:b,checked:k,inlineLabel:g,onOffMissing:!O&&!S}),T=k?D:y,U=r("Toggle",a.id),F="".concat(U,"-label"),H="".concat(U,"-stateText"),R=k?O:S,N=(0,e.getNativeProps)(a,e.inputProperties,["defaultChecked"]),B=void 0;u||T||(v&&(B=F),R&&!B&&(B=H));var j=n.useRef(null);(0,e.useFocusRects)(j),m(a,k,j);var V={root:{className:P.root,hidden:N.hidden},label:{children:v,className:P.label,htmlFor:U,id:F},container:{className:P.container},pill:(0,t.__assign)((0,t.__assign)({},N),{"aria-disabled":b,"aria-checked":k,"aria-label":u||T,"aria-labelledby":B,className:P.pill,"data-is-focusable":!0,"data-ktp-target":!0,disabled:b,id:U,onClick:function(e){b||(M(!k,e),C&&C(e))},ref:j,role:w||"switch",type:"button"}),thumb:{className:P.thumb},stateText:{children:R,className:P.text,htmlFor:U,id:H}};return n.createElement(c,(0,t.__assign)({ref:o},V.root),v&&n.createElement(d,(0,t.__assign)({},V.label)),n.createElement("div",(0,t.__assign)({},V.container),n.createElement("button",(0,t.__assign)({},V.pill),n.createElement("span",(0,t.__assign)({},V.thumb))),(k&&O||S)&&n.createElement(d,(0,t.__assign)({},V.stateText))))});p.displayName="ToggleBase";var m=function(e,t,a){n.useImperativeHandle(e.componentRef,function(){return{get checked(){return!!t},focus:function(){a.current&&a.current.focus()}}},[t,a])},_=u(853),h=(0,e.styled)(p,function(e){var n,a,i,r,o,s,c,d=e.theme,l=e.className,u=e.disabled,f=e.checked,p=e.inlineLabel,m=e.onOffMissing,h=d.semanticColors,b=d.palette,g=h.bodyBackground,v=h.inputBackgroundChecked,y=h.inputBackgroundCheckedHovered,S=b.neutralDark,D=h.disabledBodySubtext,I=h.smallInputBorder,x=h.inputForegroundChecked,C=h.disabledBodySubtext,O=h.disabledBackground,w=h.smallInputBorder,E=h.inputBorderHovered,A=h.disabledBodySubtext,L=h.disabledText;return{root:["ms-Toggle",f&&"is-checked",!u&&"is-enabled",u&&"is-disabled",d.fonts.medium,{marginBottom:"8px"},p&&{display:"flex",alignItems:"center"},l],label:["ms-Toggle-label",{display:"inline-block"},u&&{color:L,selectors:(n={},n[_.HighContrastSelector]={color:"GrayText"},n)},p&&!m&&{marginRight:16},m&&p&&{order:1,marginLeft:16},p&&{wordBreak:"break-word"}],container:["ms-Toggle-innerContainer",{display:"flex",position:"relative"}],pill:["ms-Toggle-background",(0,_.getFocusStyle)(d,{inset:-3}),{fontSize:"20px",boxSizing:"border-box",width:40,height:20,borderRadius:10,transition:"all 0.1s ease",border:"1px solid ".concat(w),background:g,cursor:"pointer",display:"flex",alignItems:"center",padding:"0 3px",overflow:"visible"},!u&&[!f&&{selectors:{":hover":[{borderColor:E}],":hover .ms-Toggle-thumb":[{backgroundColor:S,selectors:(a={},a[_.HighContrastSelector]={borderColor:"Highlight"},a)}]}},f&&[{background:v,borderColor:"transparent",justifyContent:"flex-end"},{selectors:(i={":hover":[{backgroundColor:y,borderColor:"transparent",selectors:(r={},r[_.HighContrastSelector]={backgroundColor:"Highlight"},r)}]},i[_.HighContrastSelector]=(0,t.__assign)({backgroundColor:"Highlight"},(0,_.getHighContrastNoAdjustStyle)()),i)}]],u&&[{cursor:"default"},!f&&[{borderColor:A}],f&&[{backgroundColor:D,borderColor:"transparent",justifyContent:"flex-end"}]],!u&&{selectors:{"&:hover":{selectors:(o={},o[_.HighContrastSelector]={borderColor:"Highlight"},o)}}}],thumb:["ms-Toggle-thumb",{display:"block",width:12,height:12,borderRadius:"50%",transition:"all 0.1s ease",backgroundColor:I,borderColor:"transparent",borderWidth:6,borderStyle:"solid",boxSizing:"border-box"},!u&&f&&[{backgroundColor:x,selectors:(s={},s[_.HighContrastSelector]={backgroundColor:"Window",borderColor:"Window"},s)}],u&&[!f&&[{backgroundColor:C}],f&&[{backgroundColor:O}]]],text:["ms-Toggle-stateText",{selectors:{"&&":{padding:"0",margin:"0 8px",userSelect:"none",fontWeight:_.FontWeights.regular}}},u&&{selectors:{"&&":{color:L,selectors:(c={},c[_.HighContrastSelector]={color:"GrayText"},c)}}}]}},void 0,{scope:"Toggle"}),b=u(969),g=u(362),v=u(311),y=u(61);function S(e,n){var a=(0,t.__assign)({},e);return Object.keys(a).forEach(function(e){n.has(e)&&delete a[e]}),a}function D(e,t){return S(e,t)}var I,x,C=new Set(["as","className","componentRef","label","onText","offText","ariaLabel","onAriaLabel","offAriaLabel","checked","defaultChecked","disabled","inlineLabel","onChange","onChanged","theme","styles","role"]),O=(0,o.classNamesFunction)({useStaticStyles:!0}),w=u(83),E={root:{display:"block",marginBottom:"8px"},rootWithInlineLabel:{display:"flex",alignItems:"center"},label:(0,t.__assign)({display:"inline-block"},v.shorthands.padding("5px","0")),inlineLabel:(0,t.__assign)({wordBreak:"break-word"},v.shorthands.padding("5px","0")),inlineLabelAndOnOffMissing:(0,t.__assign)({order:1},v.shorthands.margin("0","0","0","16px")),inlineLabelNotOnOffMissing:(0,t.__assign)({},v.shorthands.margin("0","16px","0","0")),container:(I={display:"flex",alignItems:"center"},I["&[data-fui-focus-within]:focus-within::after"]=(0,t.__assign)({},v.shorthands.borderStyle("none")),I["& > .fui-Switch__input"]={"&[data-fui-focus-visible] + .fui-Switch__indicator":(0,t.__assign)((0,t.__assign)({},v.shorthands.outline("2px","solid",w.tokens.colorStrokeFocus2)),{"outline-offset":"3px"})},I["& > .fui-Switch__indicator"]=(0,t.__assign)({transitionDuration:"200ms"},v.shorthands.margin(0)),I["& > .fui-Switch__label"]=(0,t.__assign)((0,t.__assign)({},v.shorthands.padding("0")),v.shorthands.margin(0,"8px")),I),containerV2:(x={display:"flex",alignItems:"center"},x["&[data-fui-focus-within]:focus-within::after"]=(0,t.__assign)({},v.shorthands.borderStyle("none")),x["@media (forced-colors: active)"]={"& > .fui-Switch__input":{"&[data-fui-focus-visible] + .fui-Switch__indicator":(0,t.__assign)((0,t.__assign)({},v.shorthands.outline("2px","solid","CanvasText")),{"outline-offset":"3px"})}},x["& > .fui-Switch__input"]={"&[data-fui-focus-visible] + .fui-Switch__indicator":(0,t.__assign)((0,t.__assign)({},v.shorthands.outline("2px","solid",w.tokens.colorStrokeFocus2)),{"outline-offset":"3px"})},x["& > .fui-Switch__indicator"]=(0,t.__assign)({transitionDuration:"200ms"},v.shorthands.margin(0)),x["& > .fui-Switch__label"]=(0,t.__assign)((0,t.__assign)({},v.shorthands.padding("0")),v.shorthands.margin(0,"8px")),x),disabled:{}},A=(0,t.__assign)((0,t.__assign)({root:(0,t.__assign)((0,t.__assign)({},E.root),{"& .fui-Switch__input:disabled":{"& ~ .fui-Switch__indicator":(0,t.__assign)({color:w.tokens.semanticDisabledBodySubtext},v.shorthands.borderColor(w.tokens.semanticDisabledBodySubtext))},"& .fui-Switch__input:disabled:checked":{"& ~ .fui-Switch__indicator":{color:w.tokens.semanticDisabledBackground,backgroundColor:w.tokens.semanticDisabledBodySubtext}}})},S(E,new Set(["root"]))),{disabled:{"& .fui-Label":{color:w.tokens.semanticDisabledText}}}),L=(0,v.makeStyles)(E),k=(0,v.makeStyles)(A),M=n.forwardRef(function(e,a){var s=a||n.createRef(),c=g.KillSwitch.isActivated("3fee4e33-c8e8-4dec-98d3-70359116e853")?L():k(),d=e.componentRef,l=e.onChange,u=e.onChanged,f=r("ToggleShim",null==e?void 0:e.id),p=i(e.checked,e.defaultChecked),m=p[0],_=p[1],h=function(e,a,i){var r=e.className,s=e.label,c=e.checked,d=e.disabled,l=e.onText,u=e.offText,f=e.ariaLabel,p=e.inlineLabel,m=e.role,_=e.onAriaLabel,h=e.offAriaLabel,b=e.onClick,S=e.styles,I=void 0===S?{}:S,x=(g.KillSwitch.isActivated("3b4b05f5-2c9b-4f57-a4ac-30468de4bfdb")?(0,o.classNamesFunction)({useStaticStyles:!0}):O)(I),w=c?_:h,E="".concat(a,"-label"),A=c?l:u,L=void 0;f||w||!s||(L=E);var k=!l&&!u,M=["ms-Toggle-label",i.label];return p&&(M.push(i.inlineLabel),k?M.push(i.inlineLabelAndOnOffMissing):M.push(i.inlineLabelNotOnOffMissing)),{root:{className:(0,v.mergeClasses)("ms-Toggle",r,p?i.rootWithInlineLabel:i.root,d&&i.disabled,x.root)},label:s&&n.createElement(y.Label,{className:v.mergeClasses.apply(void 0,(0,t.__spreadArray)((0,t.__spreadArray)([],M,!1),[x.label],!1)),weight:"semibold",htmlFor:a,id:E,disabled:d},s),switch:(0,t.__assign)({checked:c,label:(c&&l||u)&&A,disabled:d,id:a,onClick:b,role:m||"switch",input:{className:(0,v.mergeClasses)("ms-Toggle-background",x.pill),"aria-checked":c,"aria-labelledby":L,"aria-disabled":d,"data-ktp-target":!0,"aria-label":f||w,"data-is-focusable":!0},className:(0,v.mergeClasses)("ms-Toggle-innerContainer",g.KillSwitch.isActivated("6d70f0c8-02ba-4dbe-93e4-20fee5cf91f8")?i.container:i.containerV2)},D(e,C))}}((0,t.__assign)((0,t.__assign)({},e),{checked:m}),f,c),S=n.useCallback(function(e,t){_(t.checked),null==l||l(e,t.checked),null==u||u(t.checked)},[_]);return n.useImperativeHandle(d||void 0,function(){return{focus:function(){var e;"function"!=typeof s&&(null===(e=s.current)||void 0===e||e.focus())}}}),n.createElement("div",(0,t.__assign)({},h.root),h.label,n.createElement(b.Switch,(0,t.__assign)({},h.switch,{onChange:S,ref:s})))});M.displayName="ToggleShim";var P=(0,w.wrapper)(h,M,60461)})(),f})());