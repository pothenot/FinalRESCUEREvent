(()=>{var e=document.currentScript;define("2ade42ba-c2c8-4cc4-9b7b-bd962efd6162_1.0.0",["tslib","@microsoft/load-themed-styles","@microsoft/sp-core-library","@microsoft/sp-diagnostics","@microsoft/sp-page-context","@ms/office-ui-fabric-react-bundle","@ms/sp-a11y","@ms/sp-office-browser-feedback","@ms/sp-telemetry","@ms/sp-topic-dataproviders","@microsoft/sp-loader"],(t,n,a,i,r,o,s,c,d,l,u)=>(()=>{"use strict";var f,p,m,_={230:e=>{e.exports=n},878:e=>{e.exports=a},377:e=>{e.exports=i},37:e=>{e.exports=u},171:e=>{e.exports=r},79:e=>{e.exports=o},205:e=>{e.exports=s},142:e=>{e.exports=c},186:e=>{e.exports=d},99:e=>{e.exports=l},553:e=>{e.exports=t}},h={};function b(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={exports:{}};return _[e](n,n.exports,b),n.exports}b.m=_,b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce((t,n)=>(b.f[n](e,t),t),[])),b.u=e=>"chunk.sp-feedback-getFeedbackOptions_none_ffdfb3f5691409d9c27e.js",b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f={},p="2ade42ba-c2c8-4cc4-9b7b-bd962efd6162_1.0.0:",b.l=(e,t,n,a)=>{if(f[e])f[e].push(t);else{var i,r;if(void 0!==n)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var c=o[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==p+n){i=c;break}}i||(r=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",p+n),i.src=e,0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous")),f[e]=[t];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(l);var a=f[e];if(delete f[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach(e=>e(n)),t)return t(n)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),r&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m=e?e.src:"",b.p=m.slice(0,m.lastIndexOf("/")+1),b.f.compat=(e,t)=>{for(var n=function(e){return{768:[{i:"8494e7d7-6b99-47b2-a741-59873e42f16f",v:"12.44.8",m:962}]}[e]||[]}(e),a=0;a<n.length;a++)b.m[n[a].m]||(e=>{t.push(g.SPComponentLoader.loadComponentById(e.i,e.v).then(t=>{b.m[e.m]=e=>e.exports=t}))})(n[a])};var g=b(37);(()=>{var e={277:0};b.f.j=(t,n)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((n,i)=>a=e[t]=[n,i]);n.push(a[2]=i);var r=b.p+b.u(t),o=new Error;b.l(r,n=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,a[1](o)}},"chunk-"+t,t)}};var t=(t,n)=>{var a,i,[r,o,s]=n,c=0;if(r.some(t=>0!==e[t])){for(a in o)b.o(o,a)&&(b.m[a]=o[a]);s&&s(b)}for(t&&t(n);c<r.length;c++)i=r[c],b.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self["webpackJsonp_2ade42ba-c2c8-4cc4-9b7b-bd962efd6162_1.0.0"]=self["webpackJsonp_2ade42ba-c2c8-4cc4-9b7b-bd962efd6162_1.0.0"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var v={};return(()=>{b.r(v),b.d(v,{SPFeedback:()=>I,spFeedbackServiceKey:()=>x});var e=b(553);b(230).loadStyles("#obf-TFormContainer{color:#000!important}",!0);var t=b(878),n=b(377),a=b(171),i=b(79),r=b(205);const o=function(n){function a(e){return n.call(this,e,{serviceKey:a.serviceKey,isShared:!1})||this}return(0,e.__extends)(a,n),a.prototype.createA11yManager=function(e){var a=this;t.Validate.isNotNullOrUndefined(e,"domElement"),n.prototype.createServiceComponent.call(this,this.componentConfiguration,function(t){return r.A11yManager.create(e,a.componentConfiguration||void 0)})},Object.defineProperty(a.prototype,"a11yManager",{get:function(){return this.serviceComponent},enumerable:!1,configurable:!0}),a.a11yServiceName="sp-pages-core:A11yManager",a.serviceKey=t.ServiceKey.create(a.a11yServiceName,a),a}(function(){function e(e,n){t.Validate.isNotNullOrUndefined(e,"serviceScope"),t.Validate.isNotNullOrUndefined(n,"serviceConfiguration"),t.Validate.isNotNullOrUndefined(n.serviceKey,"serviceConfiguration.serviceKey"),this._serviceScope=e,this._serviceConfiguration=n,this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed||(this.onDispose(),this._isDisposed=!0)},Object.defineProperty(e.prototype,"componentConfiguration",{get:function(){return this._componentConfiguration},set:function(e){this._componentConfiguration=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serviceConfiguration",{get:function(){return this._serviceConfiguration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serviceScope",{get:function(){return this._serviceScope},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!1,configurable:!0}),e.prototype.createServiceComponent=function(e,n){t.Validate.isNotNullOrUndefined(n,"componentFactory"),void 0===this._serviceComponent&&(this._componentConfiguration=e,this._serviceComponent=n(e))},Object.defineProperty(e.prototype,"serviceComponent",{get:function(){return this._serviceComponent},enumerable:!1,configurable:!0}),e.prototype.onDispose=function(){},e}());var s=b(142),c=b(186);const d=JSON.parse('{"G9":"You just published a page! Tell us how it went.","_3":"We have just two questions for you.","dH":"Sure","vN":"Not now","Wh":"How satisfied are you with creating and publishing a page?","HB":"1 - Very dissatisfied","k8":"2","t0":"3","gt":"4","ZB":"5 - Very satisfied","MS":"Press alt + down arrow key to go to feedback form.","KI":"You just edited an image! Tell us how it went.","Hh":"How would you rate your experience with images in SharePoint Pages?","lc":"Please tell us more. Why did you choose that rating?","$D":"You just edited a page! Tell us how it went.","Zr":"How easy was it for you to use the text web part?","wN":"1 - Very hard","Dv":"5 - Very easy"}');var l={CampaignId:"dd025788-0c5d-4dde-812e-2b30af0d3bf9",StartTimeUtc:"2020-03-19T00:00:00Z",EndTimeUtc:"2025-01-01T00:00:00Z",GovernedChannelType:0,Scope:{Type:1},NominationScheme:{Type:0,PercentageNumerator:100,PercentageDenominator:100,NominationPeriod:{Type:0,IntervalSeconds:1296e3},CooldownPeriod:{Type:0,IntervalSeconds:10368e3}},SurveyTemplate:{Type:2,ActivationEvent:{Type:0,Activity:"PublishFeatureUsage",Count:1,IsAggregate:!0},Content:{Prompt:{Title:d.G9,Question:d._3,YesLabel:d.dH,NoLabel:d.vN},Rating:{isZeroBased:!1,Question:d.Wh,RatingValuesAscending:[d.HB,d.k8,d.t0,d.gt,d.ZB]},Question:{Question:d.lc}}}};const u=JSON.parse('{"YJ":"You\\u0027ve created a new page! Tell us how it went.","jM":"How satisfied are you with creating and finding your page?","sC":"Tell us more. Why did you choose that rating?"}');var f=(0,e.__assign)((0,e.__assign)({},{CampaignId:"f75eef0a-4a84-4533-a546-1948d664e5b1",StartTimeUtc:"2024-01-01T00:00:00Z",EndTimeUtc:"2026-12-01T00:00:00Z"}),{GovernedChannelType:0,Scope:{Type:1},NominationScheme:{Type:0,PercentageNumerator:100,PercentageDenominator:100,NominationPeriod:{Type:0,IntervalSeconds:1296e3},CooldownPeriod:{Type:0,IntervalSeconds:10368e3}},SurveyTemplate:{Type:2,ActivationEvent:{Type:1,Sequence:[{Type:0,IsAggregate:!0,Activity:"SharePointStartCreatePage",Count:1},{Type:0,IsAggregate:!0,Activity:"SharePointStartUsage",Count:1}],IsAggregate:!0},Content:{Prompt:{Title:u.YJ,Question:d._3,YesLabel:d.dH,NoLabel:d.vN},Rating:{isZeroBased:!1,Question:u.jM,RatingValuesAscending:[d.HB,d.k8,d.t0,d.gt,d.ZB]},Question:{Question:u.sC}}}}),p=[l,{CampaignId:"5ad3420d-1e81-40f3-80bd-812c7989977a",StartTimeUtc:"2023-03-10T00:00:00Z",EndTimeUtc:"2025-01-01T00:00:00Z",GovernedChannelType:0,Scope:{Type:1},NominationScheme:{Type:0,PercentageNumerator:100,PercentageDenominator:100,NominationPeriod:{Type:0,IntervalSeconds:1296e3},CooldownPeriod:{Type:0,IntervalSeconds:7884e3}},SurveyTemplate:{Type:2,ActivationEvent:{Type:0,Activity:"ImageEditUsage",Count:5,IsAggregate:!0},Content:{Prompt:{Title:d.KI,Question:d._3,YesLabel:d.dH,NoLabel:d.vN},Rating:{isZeroBased:!1,Question:d.Hh,RatingValuesAscending:[d.HB,d.k8,d.t0,d.gt,d.ZB]},Question:{Question:d.lc}}}},f,{CampaignId:"37cdaeac-09cf-40a4-b22a-1c0af173f566",StartTimeUtc:"2024-01-12T00:00:00Z",EndTimeUtc:"2024-03-02T00:00:00Z",GovernedChannelType:0,Scope:{Type:1},NominationScheme:{Type:0,PercentageNumerator:100,PercentageDenominator:100,NominationPeriod:{Type:0,IntervalSeconds:1296e3},CooldownPeriod:{Type:0,IntervalSeconds:7884e3}},SurveyTemplate:{Type:2,ActivationEvent:{Type:1,Sequence:[{Type:0,IsAggregate:!1,Activity:"RichTextEditorUsage",Count:2},{Type:0,IsAggregate:!1,Activity:"PageAuthoringEndUsage",Count:1}]},Content:{Prompt:{Title:d.$D,Question:d._3,YesLabel:d.dH,NoLabel:d.vN},Rating:{isZeroBased:!1,Question:d.Zr,RatingValuesAscending:[d.wN,d.k8,d.t0,d.gt,d.Dv]},Question:{Question:d.lc}}}}];const m=function(){function e(){}return e.EDOG="edog",e.PROD_BUBBLE="prodbubble",e.PROD="prod",e}();var _=b(99);function h(){return t._SPKillSwitch.isActivated("efd1bfe1-3659-40a2-8029-9383f78c5d5a")}var g="SPFeedback",y=s.officeFeedbackIntlBaseUrl,S="AppUsageTime",D="UpdateFlightsForOfficeFeedback",I=function(){function r(e){var t=this;this.instanceId="f709c1cd-2daf-4093-a99a-a167b55ebc23",this.componentId="f709c1cd-2daf-4093-a99a-a167b55ebc23",this.isDisposed=!1,e.whenFinished(function(){t._serviceScope=e,t._pageContext=e.consume(a.PageContext.serviceKey),t._a11yService=e.consume(o.serviceKey)})}return r._translateOfficeFeedbackPolicies=function(t){var n=(0,e.__assign)({},r._defaultFeedbackPolicy);return t.forEach(function(e){if("common\\feedback"===e.key&&"Web"===e.platform)switch(e.settingId){case"office16;L_SendFeedback":n.policyAllowFeedback="1"===e.value;break;case"office16;L_SendSurvey":n.policyAllowSurvey="1"===e.value;break;case"office16;L_Screenshot":n.policyAllowScreenshot="1"===e.value;break;case"office16;L_EmailCollection":n.policyAllowContact="1"===e.value;break;case"office16;L_LogCollection":n.policyAllowContent="1"===e.value}}),n},r._getOCPSPolicies=function(e){return new _.OCPSPolicyDataProvider(e).getPolicies().then(function(e){if(e.value&&e.value.length>0){var t=e.value[0].policiesPayload;if(t)return r._translateOfficeFeedbackPolicies(t)}return r._defaultFeedbackPolicy})},r._handleDismiss=function(t,a){var i,o,s,c,d,l={campaignId:t},u=new n._LogEntry(g,a?"Submitted":"Dismissed",n._LogType.Event,l);if(n._EngagementLogger.logEventWithLogEntry(u),a){var f=null===(i=r._spFloodgate)||void 0===i?void 0:i.getEngine(),p="Unknown";if(f){var m=f.launchedSurveys;if(!m)return p="NoSurveys",void r._logNoBackupScore(p);var _=void 0;for(var h in m)if((null===(c=null===(s=null===(o=m[h])||void 0===o?void 0:o.surveyInfo)||void 0===s?void 0:s.data)||void 0===c?void 0:c.backEndIdentifier)===t){if(void 0!==(_=null===(d=m[h].rating)||void 0===d?void 0:d.selectedIndex)){var b=new n._LogEntry(g,"Rated",n._LogType.Event,(0,e.__assign)((0,e.__assign)({},l),{rating:(++_).toString()}));n._EngagementLogger.logEventWithLogEntry(b)}else p="NoSurveyResult",r._logNoBackupScore(p);return}p="CampaignMismatch"}else p="NoEngine";r._logNoBackupScore(p)}},r._logNoBackupScore=function(e){new n._QosMonitor("".concat(g,".NoBackupScore")).writeUnexpectedFailure(e)},r._setFloodgateWindowEvents=function(){this&&(window.addEventListener("focus",r._resumeUsage),window.addEventListener("blur",r._pauseUsage),window.addEventListener("unload",r._stopFloodgate),document.addEventListener(D,this._handleFlightsForOfficeFeedback))},r._stopFloodgate=function(){r._spFloodgate?(r._pauseUsage(),r._spFloodgate.stop()):r._floodgateLogError("floodGateUndefinedAtStop",!1)},r._startFloodgateAsync=function(){return r._spFloodgate||r._floodgateLogError("floodGateUndefinedAtStart",!0),r._spFloodgate.start().then(function(){return r._resumeUsage()}).catch(function(e){r._floodgateLogError("floodGateStartFailed",!0,e)})},r._pauseUsage=function(){r._spFloodgate&&r._spFloodgate.stop(),r._activityListener?r._activityListener.logActivityStopTime(S,new Date):r._floodgateLogError("floodGateUndefinedAtPause",!1)},r._resumeUsage=function(){r._spFloodgate&&r._spFloodgate.start().catch(function(){}),r._activityListener?(r._activityListener.logActivity("AppResume"),r._activityListener.logActivityStartTime(S)):r._floodgateLogError("floodGateUndefinedAtResume",!1)},r._initializeStartFloodgateAsync=function(){return r._spFloodgate.initialize().then(function(){return r._startFloodgateAsync()}).then(function(){n._TraceLogger.logVerbose(r._logSource,"Initialized and started floodgate successfully")}).catch(function(e){r._floodgateLogError("_initializeStartFloodgateAsync",!0,e)})},r._floodgateLogError=function(e,t,a){if(a=a||new Error(e),n._TraceLogger.logError(r._logSource,a,e),t)throw new n._QosMonitor("".concat(g,".").concat(e)).writeUnexpectedFailure(void 0,a),a},r._getTheme=function(){var e,t,n=window.__themeState__;return(null==n?void 0:n.theme)&&(e=n.theme.themePrimary,t=n.theme.themeSecondary),{themePrimary:e||"#0078d4",themeSecondary:t||"#2b88d8"}},Object.defineProperty(r,"_buildNumber",{get:function(){var e=c._Telemetry.buildNumber,t=/[0-9]{1,4}-?[0-9]{1,2}-?[0-9]{1,2}\.[0-9]{1,9}/;return t.test(e)?e.match(t)[0].replace(/-/g,""):"0"},enumerable:!1,configurable:!0}),Object.defineProperty(r,"_activityListener",{get:function(){var e,t;return null===(t=null===(e=r._spFloodgate)||void 0===e?void 0:e.getEngine())||void 0===t?void 0:t.getActivityListener()},enumerable:!1,configurable:!0}),Object.defineProperty(r,"_infoOnUIAppHost",{get:function(){var e="Default";return t._BrowserUtilities.isTeamsWebViewHosted()||t._BrowserUtilities.isTeamsBrowserHosted()||t._BrowserUtilities.isEmbeddedInSite()?e="TeamsNonMobile":(t._BrowserUtilities.isTeamsAndroidHosted()||t._BrowserUtilities.isTeamsIOSHosted())&&(e="TeamsMobile"),e},enumerable:!1,configurable:!0}),r.prototype.startAppUsageAsync=function(e){return this._feedbackOptions=e,this.setupFloodgate().then(function(){r._activityListener&&r._activityListener.logActivityStartTime(S)}).catch(function(e){n._TraceLogger.logError(r._logSource,e,"SPFeedbackUtility.startAppUsageAsync")})},r.prototype.setupFeedback=function(t){var a=this;if(r._isFeedbackInitialized)return Promise.resolve(r._spFeedback);var i=new n._QosMonitor("".concat(g,".setupFeedback"));return(0,s.loadFloodgateAsync)().then(function(){return(0,e.__awaiter)(a,void 0,void 0,function(){return(0,e.__generator)(this,function(e){switch(e.label){case 0:return r._spFeedback=window.OfficeBrowserFeedback,[4,this._initializeFeedback(t)];case 1:return e.sent(),i.writeSuccess(),[2,r._spFeedback]}})})}).catch(function(e){throw i.writeUnexpectedFailure("SetUpFail",e),e})},r.prototype.setupFloodgate=function(){var t=this;if(r._isFloodgateInitialized)return Promise.resolve(r._spFeedback);var a=new n._QosMonitor("".concat(g,".setupFloodgate"));return(0,s.loadFloodgateAsync)().then(function(){return(0,e.__awaiter)(t,void 0,void 0,function(){return(0,e.__generator)(this,function(e){switch(e.label){case 0:return r._spFeedback=window.OfficeBrowserFeedback,r._spFloodgate=r._spFeedback.floodgate,[4,this._initializeFloodgate()];case 1:return e.sent(),a.writeSuccess(),[2,r._spFeedback]}})})}).catch(function(e){throw a.writeUnexpectedFailure("SetUpFail",e),e})},r.prototype.logActivityForFeedbackAsync=function(e){if(e&&(void 0===e.isDependentExpGroup||(null==e?void 0:e.isDependentExpGroup))){var t=new n._QosMonitor("".concat(g,".logActivityForFeedbackAsync"));return this.setupFloodgate().then(function(){r._activityListener.logActivity(e.name),t.writeSuccess()}).catch(function(e){return t.writeUnexpectedFailure("FeedbackLogActivityFail",e),Promise.reject(e)})}},r.prototype.onSurveyActivated=function(e){try{n._EngagementLogger.logEvent("".concat(g,".SurveyActivated")),window.addEventListener("keydown",this._handleKeyDown,!1)}catch(e){r._floodgateLogError("onSurveyActivatedPreLog",!1,e)}e.launch(),this._a11yService.a11yManager.alert(d.MS)},r.prototype.dispose=function(){window.removeEventListener("focus",r._resumeUsage),window.removeEventListener("blur",r._pauseUsage),window.removeEventListener("unload",r._stopFloodgate),window.removeEventListener("keydown",this._handleKeyDown,!1),document.removeEventListener(D,r._handleFlightsForOfficeFeedback),t._SPEventManager.instance.unregisterEvent("recordSurveyEvent",this,this.logActivityForFeedbackAsync),r._isFeedbackInitialized=!1,r._isFloodgateInitialized=!1,this.isDisposed=!0},r.prototype._initializeFeedback=function(a){var i,o;return(0,e.__awaiter)(this,void 0,void 0,function(){var c,d,l,u,f,m,_,b,v,S,D;return(0,e.__generator)(this,function(e){switch(e.label){case 0:return[4,this._getFeedbackOptions()];case 1:return c=e.sent(),r._isFeedbackInitialized||!c?[2]:(function(){try{window.localStorage&&window.localStorage.setItem("obf-CampaignDefinitions",JSON.stringify(p))}catch(e){new n._QosMonitor("".concat(g,".CampaignDefinitions")).writeUnexpectedFailure("StorageFailure",e)}}(),d=t.Environment.type===t.EnvironmentType.Local?1:0,l=r._getTheme(),u=this._pageContext,f=null===(i=u.aadInfo)||void 0===i?void 0:i.tenantId.toString(),m="a:".concat(null===(o=u.aadInfo)||void 0===o?void 0:o.userId.toString()),(_={feedbackTenant:window.location.hostname}).appData=JSON.stringify({UiHost:r._infoOnUIAppHost}),b=r._buildNumber,v=u.legacyPageContext,(S=a)?[3,5]:h()?[3,3]:[4,r._getOCPSPolicies(this._serviceScope)]);case 2:return D=e.sent(),[3,4];case 3:D=r._defaultFeedbackPolicy,e.label=4;case 4:S=D,e.label=5;case 5:return r._spFeedback.initOptions={appId:c.appId,applicationGroup:_,build:b,environment:d,intlFilename:"officebrowserfeedbackstrings.js",intlUrl:y,locale:u.cultureInfo.currentUICultureName,onError:function(e){new n._QosMonitor("".concat(g,".initOnError")).writeUnexpectedFailure("SDKErrorHandler",new Error(e))},primaryColour:l.themePrimary,sendFeedbackPolicyValue:h()||S.policyAllowSurvey?1:0,screenshot:S.policyAllowScreenshot,secondaryColour:l.themeSecondary,stylesUrl:s.officeFeedbackCssUrl,telemetryGroup:{audienceGroup:this._pageEnvironment,deviceType:navigator.userAgent,loggableUserId:m,officeUILang:u.legacyPageContext.currentLanguage,platform:navigator.platform,tenantId:f,featureArea:c.featureArea},showEmailAddress:S.policyAllowContact,userEmail:u.user.email,webGroup:{browser:navigator.appCodeName,browserVersion:navigator.appVersion},bugForm:c.bugForm,isShowThanks:c.isShowThanks,telemetrySink:(0,s.getTelemetrySink)({featureArea:c.featureArea,legacyPageContext:v,pageContext:u,version:b})},r._spFeedback.initOptions.telemetryGroup.flights=Array.from(r._flightsForTelemetryGroup).join(","),r._isFeedbackInitialized=!0,t._SPEventManager.instance.registerEvent("recordSurveyEvent",this,this.logActivityForFeedbackAsync),[2]}})})},r.prototype._initializeFloodgate=function(){return(0,e.__awaiter)(this,void 0,void 0,function(){return(0,e.__generator)(this,function(e){switch(e.label){case 0:return[4,this._initializeFeedback()];case 1:return e.sent(),r._isFloodgateInitialized||(r._spFloodgate.initOptions={onSurveyActivatedCallback:this,onDismiss:r._handleDismiss,governanceServiceEnabled:!0},r._setFloodgateWindowEvents(),r._initializeStartFloodgateAsync().then(function(){r._isFloodgateInitialized=!0})),[2]}})})},r.prototype._handleKeyDown=function(e){if(e.altKey&&e.which===i.KeyCodes.pageDown){var t=document.getElementById("obf-TPromptContainer")||void 0;t?this._a11yService.a11yManager.focusTo(t):r._floodgateLogError("toastContainerNotFound",!1)}},Object.defineProperty(r.prototype,"_pageEnvironment",{get:function(){var e=this._pageContext;switch((e.legacyPageContext&&e.legacyPageContext.env||"").toLowerCase()){case m.EDOG:case m.PROD_BUBBLE:return"Dogfood";default:return"Production"}},enumerable:!1,configurable:!0}),r.prototype._getFeedbackOptions=function(){return(0,e.__awaiter)(this,void 0,void 0,function(){var t,n=this;return(0,e.__generator)(this,function(e){switch(e.label){case 0:return this._feedbackOptions?[3,2]:(t=this,[4,b.e(768).then(b.bind(b,559)).then(function(e){return e.getFeedbackOptions(n._pageContext,n._serviceScope)})]);case 1:t._feedbackOptions=e.sent(),e.label=2;case 2:return[2,this._feedbackOptions]}})})},r.feedbackServiceName="sp-feedback:SPFeedback",r._defaultFeedbackPolicy={policyAllowFeedback:!0,policyAllowSurvey:!0,policyAllowScreenshot:!1,policyAllowContact:!1,policyAllowContent:!1},r._flightsForTelemetryGroup=new Set,r._logSource=n._LogSource.create(g),r._isFeedbackInitialized=!1,r._isFloodgateInitialized=!1,r._handleFlightsForOfficeFeedback=function(e){var t=e;if(t&&t.detail&&t.detail.flights){var n=!1,a=function(e){var t,a=e.split("_"),i=2===a.length?a[1]:void 0;void 0!==i&&(t="0"===i?"1":"0",t=a[0]+"_"+t),t&&r._flightsForTelemetryGroup.has(t)&&(r._flightsForTelemetryGroup.delete(t),n=!0)};if("string"==typeof t.detail.flights){var i=t.detail.flights;a(i),r._flightsForTelemetryGroup.has(i)||(r._flightsForTelemetryGroup.add(i),n=!0)}else t.detail.flights.forEach(function(e){a(e),r._flightsForTelemetryGroup.has(e)||(r._flightsForTelemetryGroup.add(e),n=!0)});n&&r._isFloodgateInitialized&&(r._isFloodgateInitialized=!1,r._stopFloodgate(),r._spFeedback.initOptions.telemetryGroup.flights=Array.from(r._flightsForTelemetryGroup).join(","),r._startFloodgateAsync().then(function(){r._isFloodgateInitialized=!0}))}},r}(),x=t.ServiceKey.create(I.feedbackServiceName,I)})(),v})())})();