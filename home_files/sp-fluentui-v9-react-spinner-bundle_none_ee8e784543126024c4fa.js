define("9edd6e18-f7b1-4f3b-a894-8110b691e911_0.1.0",["react","@ms/sp-fluentui-v9-utilities-bundle","@ms/sp-fluentui-v9-react-label-bundle"],(e,t,n)=>(()=>{"use strict";var a={61:e=>{e.exports=n},311:e=>{e.exports=t},650:t=>{t.exports=e}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{Spinner:()=>g,SpinnerContextProvider:()=>c,renderSpinner_unstable:()=>u,spinnerClassNames:()=>f,useSpinnerContext:()=>d,useSpinnerStyles_unstable:()=>b,useSpinner_unstable:()=>l});var e=r(650),t=r(311),n=r(61);const a=()=>e.createElement("svg",{className:"fui-Spinner__Progressbar"},e.createElement("circle",{className:"fui-Spinner__Track"}),e.createElement("circle",{className:"fui-Spinner__Tail"})),i=e.createContext(void 0),s={},c=i.Provider,d=()=>{var t;return null!==(t=e.useContext(i))&&void 0!==t?t:s},l=(i,r)=>{const{size:o}=d(),{appearance:s="primary",labelPosition:c="after",size:l=(null!=o?o:"medium"),delay:u=0}=i,f=(0,t.useId)("spinner"),{role:p="progressbar",tabIndex:m,..._}=i,h=t.slot.always((0,t.getIntrinsicElementProps)("div",{ref:r,role:p,..._},["size"]),{elementType:"div"}),[b,g]=e.useState(!1),[v,y]=(0,t.useTimeout)();e.useEffect(()=>{if(!(u<=0))return v(()=>{g(!0)},u),()=>{y()}},[v,y,u]);const S=t.slot.optional(i.label,{defaultProps:{id:f},renderByDefault:!1,elementType:n.Label}),D=t.slot.optional(i.spinner,{renderByDefault:!0,defaultProps:{children:e.createElement(a,null),tabIndex:m},elementType:"span"});return S&&h&&!h["aria-labelledby"]&&(h["aria-labelledby"]=S.id),{appearance:s,delay:u,labelPosition:c,size:l,shouldRenderSpinner:!u||b,components:{root:"div",spinner:"span",label:n.Label},root:h,spinner:D,label:S}},u=e=>{(0,t.assertSlots)(e);const{labelPosition:n,shouldRenderSpinner:a}=e;return(0,t.jsxs)(e.root,{children:[e.label&&a&&("above"===n||"before"===n)&&(0,t.jsx)(e.label,{}),e.spinner&&a&&(0,t.jsx)(e.spinner,{}),e.label&&a&&("below"===n||"after"===n)&&(0,t.jsx)(e.label,{})]})},f={root:"fui-Spinner",spinner:"fui-Spinner__spinner",label:"fui-Spinner__label"},p=(0,t.__styles)({root:{mc9l5x:"f22iagw",Bt984gj:"f122n59",Brf1p80:"f4d9j23",Bg96gwp:"fez10in",i8kkvl:"f4px1ci",Belr9w4:"fn67r4l"},horizontal:{Beiy3e4:"f1063pyq"},vertical:{Beiy3e4:"f1vx9l62"}},{d:[".f22iagw{display:flex;}",".f122n59{align-items:center;}",".f4d9j23{justify-content:center;}",".fez10in{line-height:0;}",".f4px1ci{column-gap:8px;}",".fn67r4l{row-gap:8px;}",".f1063pyq{flex-direction:row;}",".f1vx9l62{flex-direction:column;}"]}),m=(0,t.__styles)({spinnerSVG:{B3aqqti:"f1or16p5",Brovlpu:"f1grzc83",Bxa1mx5:"f19shzzi",Bwaue66:["f5tbecn","f15qb8s7"],fyp1ls:"fn4mtlg",ag6ruv:"f1y80fxs",osj692:"f1r2crtq",aq5vjd:"f1wsi8sr",tlu9e1:"f1bkm2qd",J3u96z:"f1urqz7h",d32isg:"f1da2vov",Bsvqbuc:"f11rfva0",b3s3i5:"f1exc66"},"extra-tiny":{Bah9ito:"f1x2gjcb",ut6tcf:"f1vjiaua",B7p06xz:"fv1u54w",B807ibg:"f1oebb0s"},tiny:{Bah9ito:"f1j4wmu2",ut6tcf:"f1vppzuq",B7p06xz:"fv1u54w",B807ibg:"fngtx1d"},"extra-small":{Bah9ito:"fmpqlna",ut6tcf:"f15z5jzu",B7p06xz:"fv1u54w",B807ibg:"fadawes"},small:{Bah9ito:"fo52gbo",ut6tcf:"f1b41i3v",B7p06xz:"fv1u54w",B807ibg:"f1xqyyrl"},medium:{Bah9ito:"f1aiqagr",ut6tcf:"f1wtx80b",B7p06xz:"f1flujpd",B807ibg:"f1u06hy7"},large:{Bah9ito:"f1trdq7b",ut6tcf:"f9e0mc5",B7p06xz:"f1flujpd",B807ibg:"f13pmvhl"},"extra-large":{Bah9ito:"f89rf2a",ut6tcf:"f1w2xg3q",B7p06xz:"f1flujpd",B807ibg:"fmn74v6"},huge:{Bah9ito:"f1rx7k5y",ut6tcf:"f1vtyt49",B7p06xz:"f1owbg48",B807ibg:"f1fr1izd"}},{f:[".f1or16p5:focus{outline-width:3px;}",".f1grzc83:focus{outline-style:solid;}",".f19shzzi:focus{outline-color:transparent;}"],k:["@keyframes fb7n1on{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}","@keyframes f1gx3jof{0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}}"],d:[".f5tbecn>svg{animation-name:fb7n1on;}",".f15qb8s7>svg{animation-name:f1gx3jof;}",".fn4mtlg>svg{animation-duration:3s;}",".f1y80fxs>svg{animation-iteration-count:infinite;}",".f1r2crtq>svg{animation-timing-function:linear;}",".f1wsi8sr>svg{background-color:transparent;}",".f1da2vov>svg>circle{cx:50%;}",".f11rfva0>svg>circle{cy:50%;}",".f1exc66>svg>circle{fill:none;}",".f1x2gjcb>svg{height:16px;}",".f1vjiaua>svg{width:16px;}",".fv1u54w>svg>circle{stroke-width:var(--strokeWidthThick);}",".f1oebb0s>svg>circle{r:7px;}",".f1j4wmu2>svg{height:20px;}",".f1vppzuq>svg{width:20px;}",".fngtx1d>svg>circle{r:9px;}",".fmpqlna>svg{height:24px;}",".f15z5jzu>svg{width:24px;}",".fadawes>svg>circle{r:11px;}",".fo52gbo>svg{height:28px;}",".f1b41i3v>svg{width:28px;}",".f1xqyyrl>svg>circle{r:13px;}",".f1aiqagr>svg{height:32px;}",".f1wtx80b>svg{width:32px;}",".f1flujpd>svg>circle{stroke-width:var(--strokeWidthThicker);}",".f1u06hy7>svg>circle{r:14.5px;}",".f1trdq7b>svg{height:36px;}",".f9e0mc5>svg{width:36px;}",".f13pmvhl>svg>circle{r:16.5px;}",".f89rf2a>svg{height:40px;}",".f1w2xg3q>svg{width:40px;}",".fmn74v6>svg>circle{r:18.5px;}",".f1rx7k5y>svg{height:44px;}",".f1vtyt49>svg{width:44px;}",".f1owbg48>svg>circle{stroke-width:var(--strokeWidthThickest);}",".f1fr1izd>svg>circle{r:20px;}"],m:[["@media screen and (prefers-reduced-motion: reduce){.f1bkm2qd>svg{animation-duration:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.f1urqz7h>svg{animation-iteration-count:1;}}",{m:"screen and (prefers-reduced-motion: reduce)"}]]}),_=(0,t.__styles)({inverted:{gwg7kz:"f1jvpmnu",Bvrehnu:"fq8a5sv",Bidp6o:"f1b4lwqj",cq3kgi:"f1najlst",Btwiser:"fjxod4",B8001xd:"fu3xdw0",Bdordwa:["f1ttdh6v","fmyjox0"],Bo2mdfu:"f1eseayc",E10nrc:"folzdkc",Bwl7w15:"fhlfkde",Bksq7rz:"f1esql28"},primary:{gwg7kz:"f11ditju",B8k2rxp:"f1m9nikz",Bvrehnu:"fq8a5sv",Bidp6o:"f1b4lwqj",cq3kgi:"f1najlst",Btwiser:"fjxod4",B8001xd:"fu3xdw0",Bdordwa:["f1ttdh6v","fmyjox0"],Bo2mdfu:"f1eseayc",E10nrc:"folzdkc",Bwl7w15:"fhlfkde",Bksq7rz:"f13qeqtg",y14cdu:"flglbw1"}},{d:[".f1jvpmnu>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}",".fq8a5sv>svg>circle.fui-Spinner__Tail{animation-name:f1v1ql0f;}",".f1b4lwqj>svg>circle.fui-Spinner__Tail{animation-duration:1.5s;}",".f1najlst>svg>circle.fui-Spinner__Tail{animation-iteration-count:infinite;}",".fjxod4>svg>circle.fui-Spinner__Tail{animation-timing-function:var(--curveEasyEase);}",".fu3xdw0>svg>circle.fui-Spinner__Tail{stroke-linecap:round;}",".f1ttdh6v>svg>circle.fui-Spinner__Tail{transform:rotate(-90deg);}",".fmyjox0>svg>circle.fui-Spinner__Tail{transform:rotate(90deg);}",".f1eseayc>svg>circle.fui-Spinner__Tail{transform-origin:50% 50%;}",".f1esql28>svg>circle.fui-Spinner__Track{stroke:rgba(255, 255, 255, 0.2);}",".f11ditju>svg>circle.fui-Spinner__Tail{stroke:var(--colorBrandStroke1);}",".f13qeqtg>svg>circle.fui-Spinner__Track{stroke:var(--colorBrandStroke2Contrast);}"],k:["@keyframes f1v1ql0f{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}"],m:[["@media screen and (prefers-reduced-motion: reduce){.folzdkc>svg>circle.fui-Spinner__Tail{animation-duration:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.fhlfkde>svg>circle.fui-Spinner__Tail{animation-iteration-count:1;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (forced-colors: active){.f1m9nikz>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}}",{m:"screen and (forced-colors: active)"}],["@media screen and (forced-colors: active){.flglbw1>svg>circle.fui-Spinner__Track{stroke:var(--colorNeutralBackgroundInverted);}}",{m:"screen and (forced-colors: active)"}]]}),h=(0,t.__styles)({inverted:{sj55zd:"f15aqcq"},primary:{},"extra-tiny":{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"},tiny:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"},"extra-small":{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"},small:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"},medium:{Bahqtrf:"fk6fouc",Be2twd7:"fod5ikn",Bhrd7zp:"fl43uef",Bg96gwp:"faaz57k"},large:{Bahqtrf:"fk6fouc",Be2twd7:"fod5ikn",Bhrd7zp:"fl43uef",Bg96gwp:"faaz57k"},"extra-large":{Bahqtrf:"fk6fouc",Be2twd7:"fod5ikn",Bhrd7zp:"fl43uef",Bg96gwp:"faaz57k"},huge:{Bahqtrf:"fk6fouc",Be2twd7:"f1pp30po",Bhrd7zp:"fl43uef",Bg96gwp:"f106mvju"}},{d:[".f15aqcq{color:rgba(255, 255, 255, 1);}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".fod5ikn{font-size:var(--fontSizeBase400);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".faaz57k{line-height:var(--lineHeightBase400);}",".f1pp30po{font-size:var(--fontSizeBase500);}",".f106mvju{line-height:var(--lineHeightBase500);}"]}),b=e=>{const{labelPosition:n,size:a,appearance:i="primary"}=e,r=p(),o=m(),s=h(),c=_();return e.root.className=(0,t.mergeClasses)(f.root,r.root,("above"===n||"below"===n)&&r.vertical,("before"===n||"after"===n)&&r.horizontal,e.root.className),e.spinner&&(e.spinner.className=(0,t.mergeClasses)(f.spinner,o.spinnerSVG,o[a],c[i],e.spinner.className)),e.label&&(e.label.className=(0,t.mergeClasses)(f.label,s[a],s[i],e.label.className)),e},g=e.forwardRef((e,n)=>{const a=l(e,n);return b(a),(0,t.useCustomStyleHook_unstable)("useSpinnerStyles_unstable")(a),u(a)});g.displayName="Spinner"})(),o})());