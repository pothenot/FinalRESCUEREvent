define("a7e40b4f-0b7b-4c35-a1b7-94d7b4548907_0.1.0",["@ms/sp-fluentui-migration-utilities-bundle","@ms/office-ui-fabric-react-bundle","tslib","react","@ms/uifabric-styling-bundle","@ms/sp-fluentui-v9-utilities-bundle","@ms/sp-fluentui-v9-react-dialog-bundle","@ms/odsp-core-bundle","@ms/sp-fluentui-v9-react-button-bundle"],(e,t,n,a,i,r,o,s,c)=>(()=>{var d={124:(e,t,n)=>{var a=n(853);e.exports=a._Utilities}
,298:(e,t,n)=>{var a=n(79);e.exports=a.workaround_Icon}
,838:(e,t,n)=>{var a=n(79);e.exports=a.workaround_Popup}
,380:(e,t,n)=>{var a=n(79);e.exports=a.workaround_ResponsiveModeIndex}
,362:e=>{"use strict";e.exports=s},79:e=>{"use strict";e.exports=t},83:t=>{"use strict";t.exports=e},66:e=>{"use strict";e.exports=c},202:e=>{"use strict";e.exports=o},311:e=>{"use strict";e.exports=r},853:e=>{"use strict";e.exports=i},650:e=>{"use strict";e.exports=a},553:e=>{"use strict";e.exports=n}},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return d[e](n,n.exports,u),n.exports}u.d=(e,t)=>{for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var f={};return(()=>{"use strict";u.r(f),u.d(f,{Dialog:()=>oe,DialogContent:()=>T,DialogFooter:()=>A});var e,t=u(79),n=u(553),a=u(650);!function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(e||(e={}));var i=t.AnimationVariables.durationValue2,r={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},o=u(838),s=u(380),c=u(298),d=(0,t.memoizeFunction)(function(e,n){return{root:(0,t.mergeStyles)(e,n&&{touchAction:"none",selectors:{"& *":{userSelect:"none"}}})}}),l=a.createContext({window:"object"==typeof window?window:void 0}),p=function(e){var t,n;return(null!==(n=null===(t=null==e?void 0:e.window)||void 0===t?void 0:t.document)&&void 0!==n?n:"undefined"!=typeof document)?document:void 0},m={start:"touchstart",move:"touchmove",stop:"touchend"},_={start:"mousedown",move:"mousemove",stop:"mouseup"},h=function(e){function i(n){var i=e.call(this,n)||this;return i._currentEventType=_,i._events=[],i._onMouseDown=function(e){var t=a.Children.only(i.props.children).props.onMouseDown;return t&&t(e),i._currentEventType=_,i._onDragStart(e)},i._onMouseUp=function(e){var t=a.Children.only(i.props.children).props.onMouseUp;return t&&t(e),i._currentEventType=_,i._onDragStop(e)},i._onTouchStart=function(e){var t=a.Children.only(i.props.children).props.onTouchStart;return t&&t(e),i._currentEventType=m,i._onDragStart(e)},i._onTouchEnd=function(e){var t=a.Children.only(i.props.children).props.onTouchEnd;t&&t(e),i._currentEventType=m,i._onDragStop(e)},i._onDragStart=function(e){if("number"==typeof e.button&&0!==e.button)return!1;if(!(i.props.handleSelector&&!i._matchesSelector(e.target,i.props.handleSelector)||i.props.preventDragSelector&&i._matchesSelector(e.target,i.props.preventDragSelector))){i._touchId=i._getTouchId(e);var n=i._getControlPosition(e);if(void 0!==n){var a=i._createDragDataFromPosition(n);i.props.onStart&&i.props.onStart(e,a),i.setState({isDragging:!0,lastPosition:n});var r=p(i.context);i._events=[(0,t.on)(r.body,i._currentEventType.move,i._onDrag,!0),(0,t.on)(r.body,i._currentEventType.stop,i._onDragStop,!0)]}}},i._onDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=i._getControlPosition(e);if(t){var n=i._createUpdatedDragData(i._createDragDataFromPosition(t)),a=n.position;i.props.onDragChange&&i.props.onDragChange(e,n),i.setState({position:a,lastPosition:t})}},i._onDragStop=function(e){if(i.state.isDragging){var t=i._getControlPosition(e);if(t){var n=i._createDragDataFromPosition(t);i.setState({isDragging:!1,lastPosition:void 0}),i.props.onStop&&i.props.onStop(e,n),i.props.position&&i.setState({position:i.props.position}),i._events.forEach(function(e){return e()})}}},i.state={isDragging:!1,position:i.props.position||{x:0,y:0},lastPosition:void 0},i}return(0,n.__extends)(i,e),i.prototype.componentDidUpdate=function(e){!this.props.position||e.position&&this.props.position===e.position||this.setState({position:this.props.position})},i.prototype.componentWillUnmount=function(){this._events.forEach(function(e){return e()})},i.prototype.render=function(){var e=a.Children.only(this.props.children),t=e.props,i=this.props.position,r=this.state,o=r.position,s=r.isDragging,c=o.x,l=o.y;return i&&!s&&(c=i.x,l=i.y),a.cloneElement(e,{style:(0,n.__assign)((0,n.__assign)({},t.style),{transform:"translate(".concat(c,"px, ").concat(l,"px)")}),className:d(t.className,this.state.isDragging).root,onMouseDown:this._onMouseDown,onMouseUp:this._onMouseUp,onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd})},i.prototype._getControlPosition=function(e){var t=this._getActiveTouch(e);if(void 0===this._touchId||t){var n=t||e;return{x:n.clientX,y:n.clientY}}},i.prototype._getActiveTouch=function(e){return e.targetTouches&&this._findTouchInTouchList(e.targetTouches)||e.changedTouches&&this._findTouchInTouchList(e.changedTouches)},i.prototype._getTouchId=function(e){var t=e.targetTouches&&e.targetTouches[0]||e.changedTouches&&e.changedTouches[0];if(t)return t.identifier},i.prototype._matchesSelector=function(e,t){var n;if(!e||e===(null===(n=p(this.context))||void 0===n?void 0:n.body))return!1;var a=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return!!a&&(a.call(e,t)||this._matchesSelector(e.parentElement,t))},i.prototype._findTouchInTouchList=function(e){if(void 0!==this._touchId)for(var t=0;t<e.length;t++)if(e[t].identifier===this._touchId)return e[t]},i.prototype._createDragDataFromPosition=function(e){var t=this.state.lastPosition;return void 0===t?{delta:{x:0,y:0},lastPosition:e,position:e}:{delta:{x:e.x-t.x,y:e.y-t.y},lastPosition:t,position:e}},i.prototype._createUpdatedDragData=function(e){var t=this.state.position;return{position:{x:t.x+e.delta.x,y:t.y+e.delta.y},delta:e.delta,lastPosition:t}},i.contextType=l,i}(a.Component);function b(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=a.useCallback(function(t){i.current=t;for(var n=0,a=e;n<a.length;n++){var r=a[n];"function"==typeof r?r(t):r&&(r.current=t)}},(0,n.__spreadArray)([],e,!0));return i}var g=u(124);function v(e){var t=a.useRef();return void 0===t.current&&(t.current={value:"function"==typeof e?e():e}),t.current.value}var y=function(){var e=v({});return a.useEffect(function(){return function(){for(var t=0,n=Object.keys(e);t<n.length;t++){var a=n[t];clearTimeout(a)}}},[e]),v({setTimeout:function(t,n){var a=setTimeout(t,n);return e[a]=1,a},clearTimeout:function(t){delete e[t],clearTimeout(t)}})},S={x:0,y:0},D={isOpen:!1,isDarkOverlay:!0,className:"",containerClassName:"",enableAriaHiddenSiblings:!0},I=(0,t.classNamesFunction)(),x=a.forwardRef(function(e,r){var d,u,f,p,m,_,x,C=(0,t.getPropsWithDefaults)(D,e),O=C.allowTouchBodyScroll,w=C.className,E=C.children,A=C.containerClassName,L=C.scrollableContentClassName,k=C.elementToFocusOnDismiss,M=C.firstFocusableSelector,P=C.focusTrapZoneProps,T=C.forceFocusInsideTrap,U=C.disableRestoreFocus,F=void 0===U?C.ignoreExternalFocusing:U,H=C.isBlocking,R=C.isAlert,N=C.isClickableOutsideFocusTrap,B=C.isDarkOverlay,j=C.onDismiss,V=C.layerProps,z=C.overlay,G=C.isOpen,K=C.titleAriaId,W=C.styles,q=C.subtitleAriaId,Q=C.theme,Y=C.topOffsetFixed,J=C.responsiveMode,X=C.onLayerDidMount,Z=C.isModeless,$=C.dragOptions,ee=C.onDismissed,te=C.enableAriaHiddenSiblings,ne=C.popupProps,ae=a.useRef(null),ie=a.useRef(null),re=b(ie,null==P?void 0:P.componentRef),oe=a.useRef(null),se=b(ae,r),ce=(0,s.useResponsiveMode)(se),de=function(e,t){var n=a.useRef(t);return n.current||(n.current=(0,g.getId)("ModalFocusTrapZone")),n.current}(0,null==P?void 0:P.id),le=a.useContext(l).window,ue=y(),fe=ue.setTimeout,pe=ue.clearTimeout,me=a.useState(G),_e=me[0],he=me[1],be=a.useState(G),ge=be[0],ve=be[1],ye=a.useState(S),Se=ye[0],De=ye[1],Ie=a.useState(),xe=Ie[0],Ce=Ie[1],Oe=function(e){var t=a.useState(!1),n=t[0],i=t[1];return[n,{setTrue:v(function(){return function(){i(!0)}}),setFalse:v(function(){return function(){i(!1)}}),toggle:v(function(){return function(){i(function(e){return!e})}})}]}(),we=Oe[0],Ee=Oe[1],Ae=Ee.toggle,Le=Ee.setFalse,ke=v(function(){return{onModalCloseTimer:0,allowTouchBodyScroll:O,scrollableContent:null,lastSetCoordinates:S,events:new t.EventGroup({})}}),Me=($||{}).keepInBounds,Pe=null!=R?R:H&&!Z,Te=void 0===V?"":V.className,Ue=I(W,{theme:Q,className:w,containerClassName:A,scrollableContentClassName:L,isOpen:G,isVisible:ge,hasBeenOpened:ke.hasBeenOpened,modalRectangleTop:xe,topOffsetFixed:Y,isModeless:Z,layerClassName:Te,windowInnerHeight:null==le?void 0:le.innerHeight,isDefaultDragHandle:$&&!$.dragHandleSelector}),Fe=(0,n.__assign)((0,n.__assign)({eventBubblingEnabled:!1},V),{onLayerDidMount:V&&V.onLayerDidMount?V.onLayerDidMount:X,insertFirst:(null==V?void 0:V.insertFirst)||Z,className:Ue.layer}),He=a.useCallback(function(e){e?ke.allowTouchBodyScroll?(0,t.allowOverscrollOnElement)(e,ke.events):(0,t.allowScrollOnElement)(e,ke.events):ke.events.off(ke.scrollableContent),ke.scrollableContent=e},[ke]),Re=function(){var e=oe.current,t=null==e?void 0:e.getBoundingClientRect();t&&(Y&&Ce(t.top),Me&&(ke.minPosition={x:-t.left,y:-t.top},ke.maxPosition={x:t.left,y:t.top}))},Ne=a.useCallback(function(e,t){var n=ke.minPosition,a=ke.maxPosition;return Me&&n&&a&&(t=Math.max(n[e],t),t=Math.min(a[e],t)),t},[Me,ke]),Be=function(){var e;ke.lastSetCoordinates=S,Le(),ke.isInKeyboardMoveMode=!1,he(!1),De(S),null===(e=ke.disposeOnKeyUp)||void 0===e||e.call(ke),null==ee||ee()},je=a.useCallback(function(){Le(),ke.isInKeyboardMoveMode=!1},[ke,Le]),Ve=a.useCallback(function(e,t){De(function(e){return{x:Ne("x",e.x+t.delta.x),y:Ne("y",e.y+t.delta.y)}})},[Ne]),ze=a.useCallback(function(){ie.current&&ie.current.focus()},[]);a.useEffect(function(){var e;pe(ke.onModalCloseTimer),G&&(requestAnimationFrame(function(){return fe(Re,0)}),he(!0),$&&(e=function(e){e.altKey&&e.ctrlKey&&e.keyCode===t.KeyCodes.space&&(0,t.elementContains)(ke.scrollableContent,e.target)&&(Ae(),e.preventDefault(),e.stopPropagation())},ke.disposeOnKeyUp||(ke.events.on(le,"keyup",e,!0),ke.disposeOnKeyUp=function(){ke.events.off(le,"keyup",e,!0),ke.disposeOnKeyUp=void 0})),ke.hasBeenOpened=!0,ve(!0)),!G&&_e&&(ke.onModalCloseTimer=fe(Be,1e3*parseFloat(i)),ve(!1))},[_e,G]),_=function(){ke.events.dispose()},(x=a.useRef(_)).current=_,a.useEffect(function(){return function(){var e;null===(e=x.current)||void 0===e||e.call(x)}},[]),function(e,t){a.useImperativeHandle(e.componentRef,function(){return{focus:function(){t.current&&t.current.focus()}}},[t])}(C,ie);var Ge=a.createElement(t.FocusTrapZone,(0,n.__assign)({},P,{id:de,ref:oe,componentRef:re,className:(0,t.css)(Ue.main,null==P?void 0:P.className),elementToFocusOnDismiss:null!==(d=null==P?void 0:P.elementToFocusOnDismiss)&&void 0!==d?d:k,isClickableOutsideFocusTrap:null!==(u=null==P?void 0:P.isClickableOutsideFocusTrap)&&void 0!==u?u:Z||N||!H,disableRestoreFocus:null!==(f=null==P?void 0:P.disableRestoreFocus)&&void 0!==f?f:F,forceFocusInsideTrap:(null!==(p=null==P?void 0:P.forceFocusInsideTrap)&&void 0!==p?p:T)&&!Z,firstFocusableSelector:(null==P?void 0:P.firstFocusableSelector)||M,focusPreviouslyFocusedInnerElement:null===(m=null==P?void 0:P.focusPreviouslyFocusedInnerElement)||void 0===m||m,onBlur:ke.isInKeyboardMoveMode?function(e){var t,n;null===(t=null==P?void 0:P.onBlur)||void 0===t||t.call(P,e),ke.lastSetCoordinates=S,ke.isInKeyboardMoveMode=!1,null===(n=ke.disposeOnKeyDown)||void 0===n||n.call(ke)}:void 0}),$&&ke.isInKeyboardMoveMode&&a.createElement("div",{className:Ue.keyboardMoveIconContainer},$.keyboardMoveIconProps?a.createElement(c.Icon,(0,n.__assign)({},$.keyboardMoveIconProps)):a.createElement(c.Icon,{iconName:"move",className:Ue.keyboardMoveIcon})),a.createElement("div",{ref:He,className:Ue.scrollableContent,"data-is-scrollable":!0},$&&we&&a.createElement($.menu,{items:[{key:"move",text:$.moveMenuItemText,onClick:function(){var e=function(e){if(e.altKey&&e.ctrlKey&&e.keyCode===t.KeyCodes.space)return e.preventDefault(),void e.stopPropagation();var n=e.altKey||e.keyCode===t.KeyCodes.escape;if(we&&n&&Le(),!ke.isInKeyboardMoveMode||e.keyCode!==t.KeyCodes.escape&&e.keyCode!==t.KeyCodes.enter||(ke.isInKeyboardMoveMode=!1,e.preventDefault(),e.stopPropagation()),ke.isInKeyboardMoveMode){var a=!0,i=function(e){var t=10;return e.shiftKey?e.ctrlKey||(t=50):e.ctrlKey&&(t=1),t}(e);switch(e.keyCode){case t.KeyCodes.escape:De(ke.lastSetCoordinates);case t.KeyCodes.enter:ke.lastSetCoordinates=S;break;case t.KeyCodes.up:De(function(e){return{x:e.x,y:Ne("y",e.y-i)}});break;case t.KeyCodes.down:De(function(e){return{x:e.x,y:Ne("y",e.y+i)}});break;case t.KeyCodes.left:De(function(e){return{x:Ne("x",e.x-i),y:e.y}});break;case t.KeyCodes.right:De(function(e){return{x:Ne("x",e.x+i),y:e.y}});break;default:a=!1}a&&(e.preventDefault(),e.stopPropagation())}};ke.lastSetCoordinates=Se,Le(),ke.isInKeyboardMoveMode=!0,ke.events.on(le,"keydown",e,!0),ke.disposeOnKeyDown=function(){ke.events.off(le,"keydown",e,!0),ke.disposeOnKeyDown=void 0}}},{key:"close",text:$.closeMenuItemText,onClick:Be}],onDismiss:Le,alignTargetEdge:!0,coverTarget:!0,directionalHint:t.DirectionalHint.topLeftEdge,directionalHintFixed:!0,shouldFocusOnMount:!0,target:ke.scrollableContent}),E));return _e&&ce>=(J||s.ResponsiveMode.small)&&a.createElement(t.Layer,(0,n.__assign)({ref:se},Fe),a.createElement(o.Popup,(0,n.__assign)({role:Pe?"alertdialog":"dialog",ariaLabelledBy:K,ariaDescribedBy:q,onDismiss:j,shouldRestoreFocus:!F,enableAriaHiddenSiblings:te,"aria-modal":!Z},ne),a.createElement("div",{className:Ue.root,role:Z?void 0:"document"},!Z&&a.createElement(t.Overlay,(0,n.__assign)({"aria-hidden":!0,isDarkThemed:B,onClick:H?void 0:j,allowTouchBodyScroll:O},z)),$?a.createElement(h,{handleSelector:$.dragHandleSelector||"#".concat(de),preventDragSelector:"button",onStart:je,onDragChange:Ve,onStop:ze,position:Se},Ge):Ge)))||null});x.displayName="Modal";var C=(0,t.styled)(x,function(e){var n,a=e.className,o=e.containerClassName,s=e.scrollableContentClassName,c=e.isOpen,d=e.isVisible,l=e.hasBeenOpened,u=e.modalRectangleTop,f=e.theme,p=e.topOffsetFixed,m=e.isModeless,_=e.layerClassName,h=e.isDefaultDragHandle,b=e.windowInnerHeight,g=f.palette,v=f.effects,y=f.fonts,S=(0,t.getGlobalClassNames)(r,f);return{root:[S.root,y.medium,{backgroundColor:"transparent",position:"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity ".concat(i)},p&&"number"==typeof u&&l&&{alignItems:"flex-start"},c&&S.isOpen,d&&{opacity:1},d&&!m&&{pointerEvents:"auto"},a],main:[S.main,{boxShadow:v.elevation64,borderRadius:v.roundedCorner2,backgroundColor:g.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"calc(100% - 32px)",maxWidth:"calc(100% - 32px)",minHeight:"176px",minWidth:"288px",overflowY:"auto",zIndex:m?t.ZIndexes.Layer:void 0},m&&{pointerEvents:"auto"},p&&"number"==typeof u&&l&&{top:u},h&&{cursor:"move"},o],scrollableContent:[S.scrollableContent,{overflowY:"auto",flexGrow:1,maxHeight:"100vh",selectors:(n={},n["@supports (-webkit-overflow-scrolling: touch)"]={maxHeight:b},n)},s],layer:m&&[_,S.layer,{pointerEvents:"none"}],keyboardMoveIconContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",padding:"3px 0px"},keyboardMoveIcon:{fontSize:y.xLargePlus.fontSize,width:"24px"}}},void 0,{scope:"Modal",fields:["theme","styles","enableAriaHiddenSiblings"]});C.displayName="Modal";var O=(0,t.classNamesFunction)(),w=function(e){function i(n){var a=e.call(this,n)||this;return(0,t.initializeComponentRef)(a),a}return(0,n.__extends)(i,e),i.prototype.render=function(){var e=this.props,t=e.className,n=e.styles,i=e.theme;return this._classNames=O(n,{theme:i,className:t}),a.createElement("div",{className:this._classNames.actions},a.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},i.prototype._renderChildrenAsActions=function(){var e=this;return a.Children.map(this.props.children,function(t){return t?a.createElement("span",{className:e._classNames.action},t):null})},i}(a.Component),E={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"},A=(0,t.styled)(w,function(e){var n=e.className,a=e.theme,i=(0,t.getGlobalClassNames)(E,a);return{actions:[i.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"16px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal",verticalAlign:"middle"}}},n],action:[i.action,{margin:"0 4px"}],actionsRight:[i.actionsRight,{alignItems:"center",display:"flex",fontSize:"0",justifyContent:"flex-end",marginRight:"-4px"}]}},void 0,{scope:"DialogFooter"});A.displayName="DialogFooter";var L=(0,t.classNamesFunction)(),k=a.createElement(A,null).type,M=function(i){function r(e){var n=i.call(this,e)||this;return(0,t.initializeComponentRef)(n),(0,t.warnDeprecations)("DialogContent",e,{titleId:"titleProps.id"}),n}return(0,n.__extends)(r,i),r.prototype.render=function(){var i,r=this.props,o=r.showCloseButton,s=r.className,c=r.closeButtonAriaLabel,d=r.onDismiss,l=r.subTextId,u=r.subText,f=r.titleProps,p=void 0===f?{}:f,m=r.titleId,_=r.title,h=r.type,b=r.styles,g=r.theme,v=r.draggableHeaderClassName,y=L(b,{theme:g,className:s,isLargeHeader:h===e.largeHeader,isClose:h===e.close,draggableHeaderClassName:v}),S=this._groupChildren();return u&&(i=a.createElement("p",{className:y.subText,id:l},u)),a.createElement("div",{className:y.content},a.createElement("div",{className:y.header},a.createElement("div",(0,n.__assign)({id:m,role:"heading","aria-level":1},p,{className:(0,t.css)(y.title,p.className)}),_),a.createElement("div",{className:y.topButton},this.props.topButtonsProps.map(function(e,i){return a.createElement(t.IconButton,(0,n.__assign)({key:e.uniqueId||i},e))}),(h===e.close||o&&h!==e.largeHeader)&&a.createElement(t.IconButton,{className:y.button,iconProps:{iconName:"Cancel"},ariaLabel:c,onClick:d}))),a.createElement("div",{className:y.inner},a.createElement("div",{className:y.innerContent},i,S.contents),S.footers))},r.prototype._groupChildren=function(){var e={footers:[],contents:[]};return a.Children.map(this.props.children,function(t){"object"==typeof t&&null!==t&&t.type===k?e.footers.push(t):e.contents.push(t)}),e},r.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},(0,n.__decorate)([s.withResponsiveMode],r)}(a.Component),P={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"},T=(0,t.styled)(M,function(e){var n,a,i,r=e.className,o=e.theme,s=e.isLargeHeader,c=e.isClose,d=e.hidden,l=e.isMultiline,u=e.draggableHeaderClassName,f=o.palette,p=o.fonts,m=o.effects,_=o.semanticColors,h=(0,t.getGlobalClassNames)(P,o);return{content:[s&&[h.contentLgHeader,{borderTop:"4px solid ".concat(f.themePrimary)}],c&&h.close,{flexGrow:1,overflowY:"hidden"},r],subText:[h.subText,p.medium,{margin:"0 0 24px 0",color:_.bodySubtext,lineHeight:"1.5",wordWrap:"break-word",fontWeight:t.FontWeights.regular}],header:[h.header,{position:"relative",width:"100%",boxSizing:"border-box"},c&&h.close,u&&[u,{cursor:"move"}]],button:[h.button,d&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:_.buttonText,fontSize:t.IconFontSizes.medium}}}],inner:[h.inner,{padding:"0 24px 24px",selectors:(n={},n["@media (min-width: ".concat(t.ScreenWidthMinSmall,"px) and (max-width: ").concat(t.ScreenWidthMaxSmall,"px)")]={padding:"0 16px 16px"},n)}],innerContent:[h.content,{position:"relative",width:"100%"}],title:[h.title,p.xLarge,{color:_.bodyText,margin:"0",minHeight:p.xLarge.fontSize,padding:"16px 46px 20px 24px",lineHeight:"normal",selectors:(a={},a["@media (min-width: ".concat(t.ScreenWidthMinSmall,"px) and (max-width: ").concat(t.ScreenWidthMaxSmall,"px)")]={padding:"16px 46px 16px 16px"},a)},s&&{color:_.menuHeader},l&&{fontSize:p.xxLarge.fontSize}],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"15px 15px 0 0",selectors:(i={"> *":{flex:"0 0 auto"},".ms-Dialog-button":{color:_.buttonText},".ms-Dialog-button:hover":{color:_.buttonTextHovered,borderRadius:m.roundedCorner2}},i["@media (min-width: ".concat(t.ScreenWidthMinSmall,"px) and (max-width: ").concat(t.ScreenWidthMaxSmall,"px)")]={padding:"15px 8px 0 0"},i)}]}},void 0,{scope:"DialogContent"});T.displayName="DialogContent";var U=(0,t.classNamesFunction)(),F={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1,enableAriaHiddenSiblings:!0},H={type:e.normal,className:"",topButtonsProps:[]},R=function(e){function i(n){var a=e.call(this,n)||this;return a._getSubTextId=function(){var e=a.props,t=e.ariaDescribedById,n=e.modalProps,i=e.dialogContentProps,r=e.subText,o=n&&n.subtitleAriaId||t;return o||(o=(i&&i.subText||r)&&a._defaultSubTextId),o},a._getTitleTextId=function(){var e=a.props,t=e.ariaLabelledById,n=e.modalProps,i=e.dialogContentProps,r=e.title,o=n&&n.titleAriaId||t;return o||(o=(i&&i.title||r)&&a._defaultTitleTextId),o},a._id=(0,t.getId)("Dialog"),a._defaultTitleTextId=a._id+"-title",a._defaultSubTextId=a._id+"-subText",a}return(0,n.__extends)(i,e),i.prototype.render=function(){var e,t,i,r,o,s=this.props,c=s.className,d=s.containerClassName,l=s.contentClassName,u=s.elementToFocusOnDismiss,f=s.firstFocusableSelector,p=s.forceFocusInsideTrap,m=s.styles,_=s.hidden,h=s.disableRestoreFocus,b=void 0===h?s.ignoreExternalFocusing:h,g=s.isBlocking,v=s.isClickableOutsideFocusTrap,y=s.isDarkOverlay,S=s.isOpen,D=void 0===S?!_:S,I=s.onDismiss,x=s.onDismissed,O=s.onLayerDidMount,w=s.responsiveMode,E=s.subText,A=s.theme,L=s.title,k=s.topButtonsProps,M=s.type,P=s.minWidth,R=s.maxWidth,N=s.modalProps,B=(0,n.__assign)({onLayerDidMount:O},null==N?void 0:N.layerProps);(null==N?void 0:N.dragOptions)&&!(null===(e=N.dragOptions)||void 0===e?void 0:e.dragHandleSelector)&&(r="ms-Dialog-draggable-header",(o=(0,n.__assign)({},N.dragOptions)).dragHandleSelector=".".concat(r));var j=(0,n.__assign)((0,n.__assign)((0,n.__assign)((0,n.__assign)({},F),{elementToFocusOnDismiss:u,firstFocusableSelector:f,forceFocusInsideTrap:p,disableRestoreFocus:b,isClickableOutsideFocusTrap:v,responsiveMode:w,className:c,containerClassName:d,isBlocking:g,isDarkOverlay:y,onDismissed:x}),N),{dragOptions:o,layerProps:B,isOpen:D}),V=(0,n.__assign)((0,n.__assign)((0,n.__assign)({className:l,subText:E,title:L,topButtonsProps:k,type:M},H),s.dialogContentProps),{draggableHeaderClassName:r,titleProps:(0,n.__assign)({id:(null===(t=s.dialogContentProps)||void 0===t?void 0:t.titleId)||this._defaultTitleTextId},null===(i=s.dialogContentProps)||void 0===i?void 0:i.titleProps)}),z=U(m,{theme:A,className:j.className,containerClassName:j.containerClassName,hidden:_,dialogDefaultMinWidth:P,dialogDefaultMaxWidth:R});return a.createElement(C,(0,n.__assign)({},j,{className:z.root,containerClassName:z.main,onDismiss:I||j.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),a.createElement(T,(0,n.__assign)({subTextId:this._defaultSubTextId,showCloseButton:j.isBlocking,onDismiss:I},V),s.children))},i.defaultProps={hidden:!0},(0,n.__decorate)([s.withResponsiveMode],i)}(a.Component),N={root:"ms-Dialog"},B=(0,t.styled)(R,function(e){var n,a=e.className,i=e.containerClassName,r=e.dialogDefaultMinWidth,o=void 0===r?"288px":r,s=e.dialogDefaultMaxWidth,c=void 0===s?"340px":s,d=e.hidden,l=e.theme;return{root:[(0,t.getGlobalClassNames)(N,l).root,l.fonts.medium,a],main:[{width:o,outline:"3px solid transparent",selectors:(n={},n["@media (min-width: ".concat(t.ScreenWidthMinMedium,"px)")]={width:"auto",maxWidth:c,minWidth:o},n)},!d&&{display:"flex"},i]}},void 0,{scope:"Dialog"});B.displayName="Dialog";var j=u(311),V=u(202),z=u(66);const G=(0,j.__styles)({root:{mc9l5x:"f1w7gpdv",Bg96gwp:"fez10in",ycbfsm:"fg4l7m0"}},{d:[".f1w7gpdv{display:inline;}",".fez10in{line-height:0;}"],t:["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]}),K=e=>{const{title:t,primaryFill:n="currentColor",...a}=e,i={...a,title:void 0,fill:n},r=G();return i.className=(0,j.mergeClasses)(r.root,i.className),t&&(i["aria-label"]=t),i["aria-label"]||i["aria-labelledby"]?i.role="img":i["aria-hidden"]=!0,i},W=(e,t,n)=>{const i="1em"===t?"20":t,r=a.forwardRef((e,r)=>{const o={...K(e),ref:r,width:t,height:t,viewBox:`0 0 ${i} ${i}`,xmlns:"http://www.w3.org/2000/svg"};return a.createElement("svg",o,...n.map(e=>a.createElement("path",{d:e,fill:o.fill})))});return r.displayName=e,r},q=W("Dismiss24Regular","24",["m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"]);var Q=u(362),Y=function(){return Q.KillSwitch.isActivated("0280ff93-1695-40c9-b246-95b206efa389")};function J(){return Q.KillSwitch.isActivated("ff71af3a-03b2-40cb-ba36-f16c8f9c2fd0")}function X(){return Q.KillSwitch.isActivated("770a293a-c016-44da-be21-98e095956314")}var Z=u(83),$=new Set(["ariaDescribedById","ariaLabelledById","className","closeButtonAriaLabel","componentRef","containerClassName","contentClassName","dialogContentProps","firstFocusableSelector","forceFocusInsideTrap","hidden","ignoreExternalFocusing","isBlocking","isDarkOverlay","isOpen","maxWidth","minWidth","modalProps","onDismiss","onDismissed","onLayerDidMount","onLayerMounted","responsiveMode","styles","subText","theme","title","topButtonsProps","type"]),ee=function(e){if(Array.isArray(e))return e.map(ee);if(a.isValidElement(e)){var t=e.props;return t.onClick?a.createElement(V.DialogTrigger,null,e):a.cloneElement(e,{},ee(t.children))}return e},te=u(853),ne=(0,j.makeStyles)({DialogContent:{overflowX:"hidden"},topButton:{"&:hover .fui-Button__icon":{color:Z.tokens.semanticButtonTextHovered}}}),ae=(0,t.classNamesFunction)({useStaticStyles:!0}),ie=1e3*parseFloat(t.AnimationVariables.durationValue2),re=function(i){var r,o,s,c,d=function(e){var t=[],n=[],i=void 0;return a.Children.toArray(e.children).forEach(function(e){var r;r=e,a.isValidElement(r)&&r.type===A?(n.push(e.props.children),i=e.props):t.push(e)}),{content:t,footer:n,footerProps:i}}(i),l=d.content,u=d.footer,f=d.footerProps,p=u&&(J()?ee(u):u),m=function(e){var t=e.title;return(0,n.__assign)({},e.dialogContentProps).title||t}(i),_=function(e){var t=e.subText;return(0,n.__assign)({},e.dialogContentProps).subText||t}(i),h=function(e){var t=e.ariaDescribedById,a=e.ariaLabelledById,i=e.closeButtonAriaLabel,r=e.dialogContentProps,o=e.hidden,s=e.isBlocking,c=e.isOpen,d=e.modalProps,l=e.onDismiss,u=function(e){return e?"alert":"modal"}(s||(null==d?void 0:d.isBlocking)),f={modalType:u,open:void 0!==o?!o:c,onOpenChange:function(e,t){var n,a,i;J()?(null==l||l(e),null===(a=null==r?void 0:r.onDismiss)||void 0===a||a.call(r,e),Y()&&(null===(i=null==d?void 0:d.onDismissed)||void 0===i||i.call(d))):!1===t.open&&("triggerClick"===t.type?(null==r?void 0:r.onDismiss)?r.onDismiss(e):null==l||l(e):l?l(e):null===(n=null==d?void 0:d.onDismiss)||void 0===n||n.call(d,e))},closeButtonAriaLabel:i};return(0,n.__assign)((0,n.__assign)({"aria-labelledby":a||(null==d?void 0:d.titleAriaId),"aria-describedby":t||(null==d?void 0:d.subtitleAriaId)},f),function(e,t){return a=e,i=t,r=(0,n.__assign)({},a),Object.keys(r).forEach(function(e){i.has(e)&&delete r[e]}),r;var a,i,r}(e,$))}(i),b=i.closeButtonAriaLabel,g=i.className,v=i.contentClassName,y=i.containerClassName,S=i.dialogContentProps,D=i.minWidth,I=i.maxWidth,x=i.modalProps,C=(null==x?void 0:x.className)||g,O=(null==x?void 0:x.containerClassName)||y,w=(null==S?void 0:S.className)||v,E=ae(function(e,i,r){void 0===r&&(r=["styles","theme"]);var o=(0,a.useContext)(t.CustomizerContext),s=t.Customizations.getSettings(r,"Modal",o.customizations),c={};if(s.styles&&"function"==typeof s.styles&&(s.styles=s.styles((0,n.__assign)((0,n.__assign)({},s),i))),s.styles){if(c.default!==s.styles||c.component!==(null==i?void 0:i.styles)){var d=(0,te.concatStyleSets)(s.styles,null==i?void 0:i.styles);c.default=s.styles,c.component=null==i?void 0:i.styles,c.merged=d}return(0,n.__assign)((0,n.__assign)((0,n.__assign)({},s),i),{styles:c.merged})}return(0,n.__assign)((0,n.__assign)({},s),i)}(0,i.modalProps).styles),L=ne(),k=a.useState(document.activeElement),M=k[0],P=k[1],T=a.useRef(!1),U=function(){var e=a.useState(null),t=e[0],n=e[1];return a.useEffect(function(){var e;if(!Q.KillSwitch.isActivated("809258a0-dc10-4132-ab04-d92e5cdabf4d")&&t){var n=t.parentElement,a=null===(e=null==n?void 0:n._virtual)||void 0===e?void 0:e.parent;a&&!document.contains(a)&&(n._virtual={parent:document.body})}},[t]),n}();(D||I)&&(c={minWidth:D&&"".concat(D,"px"),maxWidth:I&&"".concat(I,"px")});var F=null!==(o=null!==(r=null==S?void 0:S.showCloseButton)&&void 0!==r?r:null==x?void 0:x.isBlocking)&&void 0!==o&&o,H=null==S?void 0:S.type,R=function(){if(X()){if(!T.current||!M||!M.focus)return;M.setAttribute("data-fui-focus-visible",""),M.focus()}};a.useEffect(function(){Y()||i.hidden&&setTimeout(function(){var e;null===(e=null==x?void 0:x.onDismissed)||void 0===e||e.call(x)},ie)},[i.hidden]),a.useLayoutEffect(function(){if(X()){if(!Y()&&i.ignoreExternalFocusing)return;h.open?P(document.activeElement):R()}return function(){R()}},[h.open]);var N,B=function(){T.current=!1},G=H===e.close||F&&H!==e.largeHeader,K=!Q.KillSwitch.isActivated("c6e1cbba-7884-480d-8acb-2276da2832f1")&&(null===(s=i.modalProps)||void 0===s?void 0:s.focusTrapZoneProps)?i.modalProps.focusTrapZoneProps:{},W=a.createElement(V.DialogBody,{className:(0,j.mergeClasses)("ms-Dialog-main",O),onPointerDown:X()?B:void 0,onMouseDown:X()?B:void 0,onKeyDown:X()?function(){T.current=!0}:void 0,tabIndex:-1},a.createElement(V.DialogTitle,{action:G?a.createElement(V.DialogTrigger,{action:"close"},a.createElement(z.Button,{appearance:"subtle",className:(0,j.mergeClasses)(Q.KillSwitch.isActivated("3fee4e33-c8e8-4dec-98d3-70359116e853")?void 0:L.topButton,"ms-Dialog-button--close"),"aria-label":b||"Close",icon:a.createElement(q,{"data-icon-name":"Cancel"})})):void 0,className:(0,j.mergeClasses)("ms-Dialog-title",G&&"ms-Dialog--close")},m),_||(null==l?void 0:l.length)?a.createElement(V.DialogContent,{className:(0,j.mergeClasses)("ms-Dialog-inner",L.DialogContent,w)},_&&a.createElement("p",null,_),l):null,a.createElement(V.DialogActions,{fluid:!!(null==f?void 0:f["data-isFluid"]),className:(0,j.mergeClasses)("ms-Dialog-actions",null==f?void 0:f.className)},p));return a.createElement(V.Dialog,(0,n.__assign)({},h),a.createElement(V.DialogSurface,{style:c,className:(0,j.mergeClasses)(E.main,C),ref:U},(N={ODB:60457,ODC:"FluentUIV9ShimFocusTrapZone"},Q.Features.isFeatureEnabled(N)?W:a.createElement(t.FocusTrapZone,(0,n.__assign)({},K),W))))};re.displayName="DialogShim";var oe=(0,Z.wrapper)(B,re,60426)})(),f})());