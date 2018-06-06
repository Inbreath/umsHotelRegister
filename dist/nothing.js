// {"framework" : "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="file:///Share/ULightApp/com.ums.jyftest/",t(t.s=85)}({0:function(e,t,n){e.exports=n.p+"font/UmsIconFont.ttf"},1:function(e,t,n){"use strict";e.exports=n(3)},18:function(e,t,n){e.exports=n.p+"img/002.png"},2:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/base");var r=function(){var e=o.info();return JSON.parse(e)},i=function(e){return e=e||"yyyyMMddHHmmss",o.getDeviceTime(e)};e.exports={info:r,getTime:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/battery");var r=function(e){return new Promise(function(t,n){o.status(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={status:r}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/screen");var r={get:function(e){return new Promise(function(t,n){o.getBrightness(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})},set:function(e,t){return new Promise(function(n,r){o.setBrightness(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})}},i={status:function(e){return new Promise(function(t,n){o.getOrientation(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})},lock:function(e,t){return"function"==typeof e&&(t=e,e={}),["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary","portrait","landscape","any"].indexOf(e)<0&&(e="any"),new Promise(function(n,r){o.lockOrientation(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})},unlock:function(e){return new Promise(function(t,n){o.unlockOrientation(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})}},u=function(e){return new Promise(function(t,n){o.info(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={brightness:r,orientation:i,info:u}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/volume");var r=function(e){return new Promise(function(t,n){o.get(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})},i=function(e,t){return new Promise(function(n,r){o.set(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={get:r,set:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/audio");var r=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/image");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),e.limit=e.limit||1,e.quality=e.quality&&e.quality<100?parseInt(e.quality):100,new Promise(function(n,r){o.pick({limit:e.limit,quality:e.quality,width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},i=function(e,t,n){return t=t||{},"function"==typeof t&&(n=t,t={}),new Promise(function(r,i){if(!e)return void i({code:110040,message:"MEDIA_MISSING_ARGUMENT"});"string"==typeof e&&(e=[e]),["dots","label","none"].indexOf(t.style)<0&&(t.style="dots"),"dots"===t.style&&(e.length>9?t.style="label":1===e.length&&(t.style="none")),o.preview(e,{current:t.current,style:t.style},function(e){e=e||{},e.error?(i(e.error),"function"==typeof n&&n(e.error)):(r(),"function"==typeof n&&n(null))})})},u=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.info(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},c=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.exif(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={pick:r,preview:i,info:u,exif:c}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/video");var r=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,n){var o=void 0;o=weex.requireModule("stream"),e.exports=o},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},i=void 0;i=weex.requireModule("ums/network/transfer");var u=function(e,t,n,o){return new Promise(function(u,c){if(!e)return void c({code:151040,message:"DOWNLOAD_MISSING_ARGUMENT"});"function"==typeof t?o=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof n&&(o=n),"function"==typeof t.onProgress&&(n=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),n=n||{},i.download({url:t.url,headers:t.headers||{},target:t.target},function(e){e=e||{},e.error?(c(e.error),"function"==typeof o&&o(e.error)):e.progress?"function"==typeof n.onProgress&&n.onProgress(e.progress):(u(e),"function"==typeof o&&o(e))})})},c=function(e,t,n,o){return new Promise(function(u,c){return e?("function"==typeof t?o=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof n&&(o=n),"function"==typeof t.onProgress&&(n=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),n=n||{},t.path?(t.method=t.method?t.method.toUpperCase():"POST",["POST","PUT","PATCH"].indexOf(t.method)<0?void c({code:151050,message:"UPLOAD_INVALID_ARGUMENT",details:"Unsupported request method"}):void i.upload({url:t.url,method:t.method,path:t.path,name:t.name,headers:t.headers||{},formData:t.formData||{},mimeType:t.mimeType},function(e){e=e||{},e.error?(c(e.error),"function"==typeof o&&o(e.error)):e.progress?"function"==typeof n.onProgress&&n.onProgress(e.progress):(u(e),"function"==typeof o&&o(e))})):void c({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})):void c({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})})};e.exports={download:u,upload:c}},function(e,t,n){var o=void 0;o=weex.requireModule("webSocket"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/network");var r=function(e){return new Promise(function(t,n){o.status(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={status:r}},function(e,t,n){var o=void 0;o=weex.requireModule("CommPlugin"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("Hermes"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("SignaturePlugin"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("TransferPlugin"),e.exports=o},,,,,,,,,,,,,,,,function(e,t,n){var o={},r=n(31),i=n(32),u=n(33),c=n(34),f=n(35),a=n(36),s=n(37),l=n(38),d=n(39),p=n(40),m=n(41),y=n(42),v=n(43),g=n(44),h=n(45),x=n(46),w=n(47),b=n(48),_=n(49),P=n(50),M=n(51),S=n(52),q=n(53),C=n(54),k=n(55);void 0!==r&&(o.camera=r),void 0!==i&&(o.geolocation=i),void 0!==u&&(o.audio=u.audio,o.image=u.image,o.video=u.video),void 0!==c&&(o.modal=c),void 0!==f&&(o.recorder=f),void 0!==a&&(o.stream=a.stream,o.download=a.transfer.download,o.upload=a.transfer.upload,o.websocket=a.websocket,o.networkType=a.status.status),void 0!==s&&(o.getDeviceInfo=s.base.info,o.getTime=s.base.getTime,o.battery=s.battery,o.brightness=s.screen.brightness,o.getScreenInfo=s.screen.info,o.volume=s.volume,o.height=s.height,o.width=s.width),void 0!==l&&(o.actionsheet=l),void 0!==S&&(o.handleKeyEvent=S.handleKeyEvent),void 0!==d&&(o.animation=d),void 0!==p&&(o.picker=p),void 0!==m&&(o.meta=m),void 0!==y&&(o.clipboard=y),void 0!==v&&(o.dom=v),void 0!==g&&(o.navigator=g),void 0!==h&&(o.storage=h),void 0!==x&&(o.webview=x),void 0!==w&&(o.globalEvent=w),void 0!==P&&(o.common=P.common,o.hermes=P.hermes,o.signature=P.signature,o.transfer=P.transfer),void 0!==b&&(o.callTrans=b.callTrans,o.callApps=b.callApps,o.callLight=b.callLight,o.callCashier=b.callCashier,o.callPrinter=b.callPrinter,o.setResult=b.setResult),void 0!==_&&(o.getCurrentPath=_.getCurrentPath,o.getLocalFileString=_.getLocalFileString,o.getAppConfig=_.getAppConfig,o.getPackageName=_.getPackageName),void 0!==M&&(o.scanCode=M.scanCode,o.continueScanCode=M.continueScanCode),void 0!==q&&(o.openDB=q.openDB,o.closeDB=q.closeDB,o.deleteDB=q.deleteDB,o.executeSql=q.executeSql,o.sqlBatch=q.sqlBatch),void 0!==C&&(o.bluetooth=C),void 0!==k&&(o.appstore=k),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("ums/camera");var r=function(e,t){e=e||{},"function"==typeof e&&(t=e,e={}),o.captureImage({width:e.width||null,height:e.height||null},function(e){"function"==typeof t&&t(e)})},i=function(e,t){e=e||{},"function"==typeof e&&(t=e,e={}),o.captureVideo({width:e.width||null,height:e.height||null},function(e){"function"==typeof t&&t(e)})};e.exports={captureImage:r,captureVideo:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/geolocation");var r=function(e){o.get(function(t){"function"==typeof e&&e(t)})},i=function(e,t){"function"==typeof e&&(t=e,e={}),o.watch({maximumAge:e.maximumAge||0,timeout:e.timeout||1e4,model:e.model||"highAccuracy"},function(e){"function"==typeof t&&t(e)})},u=function(e){o.clearWatch(function(t){"function"==typeof e&&e(t)})};e.exports={get:r,watch:i,clearWatch:u}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),i=o(r),u=n(5),c=o(u),f=n(6),a=o(f);e.exports={audio:i.default,image:c.default,video:a.default}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/modal");var r=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.alert({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t())})})},i=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.confirm({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},u=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.prompt({title:e.title||"",message:e.message||"",text:e.text||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},c=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},["top","middle","bottom"].indexOf(e.position)<0&&(e.position="middle"),o.toast({message:e.message||"",duration:e.duration||3e3,position:e.position},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t())})})};e.exports={alert:r,confirm:i,prompt:u,toast:c}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/recorder");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),new Promise(function(n,r){["stereo","mono"].indexOf(e.channel)<0&&(e.channel="stereo"),["low","standard","high"].indexOf(e.quality)<0&&(e.quality="standard"),o.start({channel:e.channel,quality:e.quality},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})};e.exports={start:r,pause:i,stop:u}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(7),i=o(r),u=n(8),c=o(u),f=n(9),a=o(f),s=n(10),l=o(s);e.exports={stream:i.default,transfer:c.default,websocket:a.default,status:l.default}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(0),i=o(r),u=n(1),c=o(u),f=n(2),a=o(f),s=n(3),l=o(s),d=750/weex.config.env.deviceWidth*weex.config.env.deviceHeight;e.exports={base:i.default,battery:c.default,screen:a.default,volume:l.default,width:750,height:d}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/actionsheet");var r=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.create({title:e.title||"",message:e.message||"",items:e.items||[],index:e.index||0},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})};e.exports={create:r}},function(e,t,n){var o=void 0;o=weex.requireModule("animation"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("picker"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("meta"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("clipboard"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("dom"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("navigator"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("storage"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("webview"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("globalEvent"),e.exports=o},function(e,t,n){var o=void 0,r=void 0;o=weex.requireModule("ums/launcher"),r=weex.requireModule("navigator");var i=function(e,t){"function"==typeof e&&(t=e,e={appName:null,bizName:null,transData:{}}),o.callTrans({appName:e.appName,bizName:e.bizName,transData:e.transData},function(e){"function"==typeof t&&t(e)})},u=function(e,t){"function"==typeof e&&(t=e,e={}),o.callNativeApps({pkgName:e.pkgName||null,activityName:e.activity||null,transData:e.transData||{}},function(e){"function"==typeof t&&t(e)})},c=function(e,t){e=e||{},e.entryFile,e.transData,r.push({url:"file:///Share/ULightApp/"+pkgName+"/"+entryFile,animated:"true"},function(e){t(e)})},f=function(e,t){"function"==typeof e&&(t=e,e={}),void 0!=e.amt&&0===parseFloat(e.amt)&&delete e.amt,o.callCashier({params:e},function(e){"function"==typeof t&&t(e)})},a=function(e,t){"string"==typeof e&&(e={type:"script",data:e}),e=e||{},o.callPrinter({type:e.type||"script",data:e.data},function(e){"function"==typeof t&&t(e)})},s=function(e,t){e=e||{},o.setResult(e,function(e){"function"==typeof t&&t(e)})};e.exports={callTrans:i,callApps:u,callLight:c,callCashier:f,callPrinter:a,setResult:s}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/path");var r=function(){return o.getCurrentPath()},i=function(e){return"string"!=typeof e?"":o.loadFileString(e)},u=function(){return o.getAppConfig()},c=function(){return o.getPackageName()};e.exports={getCurrentPath:r,getLocalFileString:i,getAppConfig:u,getPackageName:c}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(11),i=o(r),u=n(12),c=o(u),f=n(13),a=o(f),s=n(14),l=o(s);e.exports={common:i.default,hermes:c.default,signature:a.default,transfer:l.default}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/scanqr");var r=function(e,t){return new Promise(function(n,r){"function"==typeof e&&(t=e,e={}),o.scanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):n(),"function"==typeof t&&t(e)})})},i=function(e,t){return new Promise(function(n,r){"function"==typeof e&&(t=e,e={}),o.continueScanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):n(),"function"==typeof t&&t(e)})})};e.exports={scanCode:r,continueScanCode:i}},function(e,t,n){var o=void 0,r=void 0;o=weex.requireModule("globalEvent"),r=weex.requireModule("globalKey");var i=function(e,t){"function"==typeof e?(t=e,e={}):(e=e||{},e.back&&r.setValue("back",e.back),e.menu&&r.setValue("menu",e.menu),e.home&&r.setValue("home",e.home));var n=!1,i=!1,u=!1,c={get back(){return n},set back(e){n=e,r.setValue("back",e)},get menu(){return u},set menu(e){u=e,r.setValue("menu",e)},get home(){return i},set home(e){i=e,r.setValue("home",e)}};return o.addEventListener("onKeyPressed",function(e){console.log("====>>>> onKeyPressed = "+JSON.stringify(e)),t(e)}),c};e.exports={handleKeyEvent:i}},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},i=void 0;i=weex.requireModule("ums/sqlite");var u=function(e){i.exec("open",[],function(t){"function"==typeof e&&e(t)})},c=function(e){i.exec("close",[],function(t){"function"==typeof e&&e(t)})},f=function(e){i.exec("delete",[],function(t){"function"==typeof e&&e(t)})},a=function(e,t,n){var o,u,c,f,a,s,l;if(f="string"==typeof e?e:e.toString(),c=[],l=[],t&&t.constructor===Array)for(o=0,u=t.length;o<u;o++)s=t[o],a=void 0===s?"undefined":r(s),c.push(null===s||void 0===s?null:"number"===a||"string"===a?s:s.toString());l.push({sql:f,params:c}),i.exec("executeSqlBatch",l,function(e){"function"==typeof n&&n(e)})},s=function(e,t){var n,o,r,u;if(!e||e.constructor!==Array)return void t("sqlBatch expects an array");for(n=[],o=0,r=e.length;o<r;o++)if(u=e[o],u.constructor===Array){if(0===u.length)return void t("sqlBatch array element of zero (0) length");n.push({sql:u[0],params:0===u.length?[]:u[1]})}else n.push({sql:u,params:[]});i.exec("executeSqlBatch",n,function(e){"function"==typeof t&&t(e)})};e.exports={openDB:u,closeDB:c,deleteDB:f,executeSql:a,sqlBatch:s}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/bluetooth");var r=function(){return o.isEnabled()},i=function(e,t){return new Promise(function(n,r){e=e||{},o.enableBluetooth({enable:e.enable||"true"},function(e){e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t(e))})})},u=function(e,t){return new Promise(function(n,r){e=e||{},o.startIBeacon({major:e.major||10178,minor:e.minor||24895,txPower:e.txPower||197,uuid:e.uuid||"FDA50693-A4E2-4FB1-AFCF-C6EB07647825"},function(e){e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t(e))})})},c=function(e){return new Promise(function(t,n){o.stopIBeacon(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})},f=function(e){return new Promise(function(t,n){o.searchDevice(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})},a=function(e){return new Promise(function(t,n){o.stopSearch(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})};e.exports={startIbeacon:u,stopIbeacon:c,searchDevice:f,stopSearch:a,isEnabled:r,enableBluetooth:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/appstore");var r=function(e,t,n){return new Promise(function(r,i){e=e||{},o.callPay(e,function(e){e=e||{},e.error?(i(e.error),"function"==typeof t&&t(e.error)):(r(e),"function"==typeof t&&t(e))},function(e){e=e||{},e.error?(i(e.error),"function"==typeof n&&n(e.error)):(r(e),"function"==typeof n&&n(e))})})},i=function(e,t){return new Promise(function(n,r){e=e||{},o.queryPayResult(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={callPay:r,queryPayResult:i}}])},3:function(e,t,n){var o,r,i=[];i.push(n(4)),o=n(5);var u=n(6);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="D:\\android\\umsHotelRegister\\ULappDemo\\node_modules\\ums-comp\\packages\\ums-header\\src\\index.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-791700e9",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},4:function(e,t){e.exports={wrap:{width:"750",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},rightPart:{paddingRight:"28",justifyContent:"flex-end"},leftPart:{paddingLeft:"28"},titleText:{textOverflow:"ellipsis",textAlign:"center",lines:1,width:"360"},title:{width:"360"},side:{width:"126",flexDirection:"row",alignItems:"center",flex:1},"header-text":{fontSize:"32",fontFamily:"'Open Sans', sans-serif"}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{right:!1,left:!1}},props:{height:{type:String,default:"97px"},backgroundColor:{type:String,default:"#004684"},title:String,color:{type:String,default:"#ffffff"},fontSize:{type:String,default:"42px"}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"umsHeader",src:"url('"+n(0)+"')"})},methods:{onLeftPartClick:function(){this.$emit("onLeftPartClick")},onRightPartClick:function(){this.$emit("onRightPartClick")}},created:function(){this.left=!!this.$slots.left,this.right=!!this.$slots.right}}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrap"],style:{backgroundColor:e.backgroundColor,height:e.height}},[e.left?n("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[e._t("left")],2):n("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[n("text",{staticStyle:{fontFamily:"umsHeader",color:"#FFF",width:"120px"}},[e._v("返回")])]),n("div",{staticClass:["title"]},[e._t("title",[e.title?n("text",{staticClass:["titleText","header-text"],style:{color:e.color,"font-size":e.fontSize}},[e._v(e._s(e.title))]):e._e()])],2),e.right?n("div",{staticClass:["rightPart","side"],style:{height:e.height},on:{click:e.onRightPartClick}},[e._t("right")],2):n("div",{staticStyle:{flex:"1"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},85:function(e,t,n){var o,r,i=[];i.push(n(86)),o=n(87);var u=n(88);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="D:\\android\\umsHotelRegister\\ULappDemo\\src\\nothing.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-70048b3b",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},86:function(e,t){e.exports={"new-btn-text":{alignItems:"center",justifyContent:"center",backgroundColor:"#a327eb"},"new-btn":{width:"500",height:"100",justifyContent:"center",alignItems:"center",paddingTop:"20",paddingRight:"40",paddingBottom:"20",paddingLeft:"40",marginTop:"50",backgroundColor:"#a327eb"},"new-btn-group":{justifyContent:"center",flexDirection:"row"},"btn-group":{marginTop:"50",flexDirection:"row",justifyContent:"center"},btn:{width:"500",height:"50",alignItems:"center",justifyContent:"center",paddingTop:"40",paddingRight:"40",paddingBottom:"40",paddingLeft:"40",marginTop:"100",backgroundColor:"#a327eb"},"btn-text":{color:"#ffffff",justifyContent:"center"},wrapper:{width:"750"},active:{flex:1,width:"250",height:"100",justifyContent:"center",alignItems:"center",backgroundColor:"#008000"},test:{background:"#fff"}}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n.n(o),i=n(2),u=n.n(i);t.default={created:function(){},components:{UmsHeader:r.a},data:{index:1},methods:{back:function(){u.a.navigator.push({url:"index.js"})},backMethod:function(){u.a.navigator.push({url:"index.js"})},leftClick:function(){u.a.navigator.push({url:"index.js"})}}}},88:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"},on:{back:e.backMethod}},[o("ums-header",{staticClass:["header"],attrs:{title:"订单号错误",backgroundColor:"#a327eb",height:"150px"},on:{onLeftPartClick:e.leftClick}}),o("div",{staticClass:["btn-group"]},[o("image",{staticClass:["new-item"],staticStyle:{width:"400",height:"400"},attrs:{src:n(18)}})]),e._m(0,!1,!1),o("div",{staticClass:["btn-group"]},[o("div",{staticClass:["new-btn"],on:{click:e.back}},[o("text",{staticClass:["new-btn-text"]},[e._v("返回主界面")])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["btn-group"]},[n("text",[e._v("订单号输入错误或已被取走")])])}]},e.exports.render._withStripped=!0}});