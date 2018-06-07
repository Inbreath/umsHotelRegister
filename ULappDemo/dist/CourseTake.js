// {"framework" : "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="file:///Share/ULightApp/com.ums.jyftest/",t(t.s=46)}({0:function(e,t,n){e.exports=n.p+"font/UmsIconFont.ttf"},1:function(e,t,n){"use strict";e.exports=n(3)},2:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/base");var r=function(){var e=o.info();return JSON.parse(e).data},i=function(e){return e=e||"yyyyMMddHHmmss",o.getDeviceTime(e)};e.exports={info:r,getTime:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/battery");var r=function(e){return new Promise(function(t,n){o.status(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={status:r}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/screen");var r={get:function(e){return new Promise(function(t,n){o.getBrightness(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})},set:function(e,t){return new Promise(function(n,r){o.setBrightness(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})}},i={status:function(e){return new Promise(function(t,n){o.getOrientation(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})},lock:function(e,t){return"function"==typeof e&&(t=e,e={}),["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary","portrait","landscape","any"].indexOf(e)<0&&(e="any"),new Promise(function(n,r){o.lockOrientation(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})},unlock:function(e){return new Promise(function(t,n){o.unlockOrientation(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})}},u=function(e){return new Promise(function(t,n){o.info(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={brightness:r,orientation:i,info:u}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/volume");var r=function(e){return new Promise(function(t,n){o.get(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})},i=function(e,t){return new Promise(function(n,r){o.set(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={get:r,set:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/audio");var r=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/image");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),e.limit=e.limit||1,e.quality=e.quality&&e.quality<100?parseInt(e.quality):100,new Promise(function(n,r){o.pick({limit:e.limit,quality:e.quality,width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},i=function(e,t,n){return t=t||{},"function"==typeof t&&(n=t,t={}),new Promise(function(r,i){if(!e)return void i({code:110040,message:"MEDIA_MISSING_ARGUMENT"});"string"==typeof e&&(e=[e]),["dots","label","none"].indexOf(t.style)<0&&(t.style="dots"),"dots"===t.style&&(e.length>9?t.style="label":1===e.length&&(t.style="none")),o.preview(e,{current:t.current,style:t.style},function(e){e=e||{},e.error?(i(e.error),"function"==typeof n&&n(e.error)):(r(),"function"==typeof n&&n(null))})})},u=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.info(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},c=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.exif(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={pick:r,preview:i,info:u,exif:c}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/media/video");var r=function(e,t){return new Promise(function(n,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});o.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,n){var o=void 0;o=weex.requireModule("stream"),e.exports=o},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},i=void 0;i=weex.requireModule("ums/network/transfer");var u=function(e,t,n,o){return new Promise(function(u,c){if(!e)return void c({code:151040,message:"DOWNLOAD_MISSING_ARGUMENT"});"function"==typeof t?o=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof n&&(o=n),"function"==typeof t.onProgress&&(n=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),n=n||{},i.download({url:t.url,headers:t.headers||{},target:t.target},function(e){e=e||{},e.error?(c(e.error),"function"==typeof o&&o(e.error)):e.progress?"function"==typeof n.onProgress&&n.onProgress(e.progress):(u(e),"function"==typeof o&&o(e))})})},c=function(e,t,n,o){return new Promise(function(u,c){return e?("function"==typeof t?o=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof n&&(o=n),"function"==typeof t.onProgress&&(n=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),n=n||{},t.path?(t.method=t.method?t.method.toUpperCase():"POST",["POST","PUT","PATCH"].indexOf(t.method)<0?void c({code:151050,message:"UPLOAD_INVALID_ARGUMENT",details:"Unsupported request method"}):void i.upload({url:t.url,method:t.method,path:t.path,name:t.name,headers:t.headers||{},formData:t.formData||{},mimeType:t.mimeType},function(e){e=e||{},e.error?(c(e.error),"function"==typeof o&&o(e.error)):e.progress?"function"==typeof n.onProgress&&n.onProgress(e.progress):(u(e),"function"==typeof o&&o(e))})):void c({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})):void c({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})})};e.exports={download:u,upload:c}},function(e,t,n){var o=void 0;o=weex.requireModule("webSocket"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("ums/device/network");var r=function(e){return new Promise(function(t,n){o.status(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(o),"function"==typeof e&&e(o))})})};e.exports={status:r}},function(e,t,n){var o=void 0;o=weex.requireModule("CommPlugin"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("Hermes"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("SignaturePlugin"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("TransferPlugin"),e.exports=o},,,,,,,,,,,,,,,,function(e,t,n){var o={},r=n(31),i=n(32),u=n(33),c=n(34),f=n(35),s=n(36),a=n(37),l=n(38),d=n(39),p=n(40),m=n(41),y=n(42),v=n(43),g=n(44),h=n(45),x=n(46),w=n(47),b=n(48),P=n(49),_=n(50),C=n(51),M=n(52),S=n(53),q=n(54),k=n(55);void 0!==r&&(o.camera=r),void 0!==i&&(o.geolocation=i),void 0!==u&&(o.audio=u.audio,o.image=u.image,o.video=u.video),void 0!==c&&(o.modal=c),void 0!==f&&(o.recorder=f),void 0!==s&&(o.stream=s.stream,o.download=s.transfer.download,o.upload=s.transfer.upload,o.websocket=s.websocket,o.networkType=s.status.status),void 0!==a&&(o.getDeviceInfo=a.base.info,o.getTime=a.base.getTime,o.battery=a.battery,o.brightness=a.screen.brightness,o.getScreenInfo=a.screen.info,o.volume=a.volume,o.height=a.height,o.width=a.width),void 0!==l&&(o.actionsheet=l),void 0!==M&&(o.handleKeyEvent=M.handleKeyEvent),void 0!==d&&(o.animation=d),void 0!==p&&(o.picker=p),void 0!==m&&(o.meta=m),void 0!==y&&(o.clipboard=y),void 0!==v&&(o.dom=v),void 0!==g&&(o.navigator=g),void 0!==h&&(o.storage=h),void 0!==x&&(o.webview=x),void 0!==w&&(o.globalEvent=w),void 0!==_&&(o.common=_.common,o.hermes=_.hermes,o.signature=_.signature,o.transfer=_.transfer),void 0!==b&&(o.callTrans=b.callTrans,o.callApps=b.callApps,o.callLight=b.callLight,o.callCashier=b.callCashier,o.callPrinter=b.callPrinter),void 0!==P&&(o.getCurrentPath=P.getCurrentPath,o.getLocalFileString=P.getLocalFileString,o.getAppConfig=P.getAppConfig),void 0!==C&&(o.scanCode=C.scanCode,o.continueScanCode=C.continueScanCode),void 0!==S&&(o.openDB=S.openDB,o.closeDB=S.closeDB,o.deleteDB=S.deleteDB,o.executeSql=S.executeSql,o.sqlBatch=S.sqlBatch),void 0!==q&&(o.bluetooth=q),void 0!==k&&(o.appstore=k),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("ums/camera");var r=function(e,t){return e=e||{},new Promise(function(n,r){o.captureImage({width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})},i=function(e,t){return e=e||{},new Promise(function(n,r){o.captureVideo({width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})};e.exports={captureImage:r,captureVideo:i}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/geolocation");var r=function(e,t){return"function"==typeof e&&(t=e,e={}),new Promise(function(e,n){o.get(function(o){o=o||{},o.error?(n(o.error),"function"==typeof t&&t(o.error,null)):(e(o),"function"==typeof t&&t(null,o))})})},i=function(e,t){return"function"==typeof e&&(t=e,e={}),new Promise(function(n,r){o.watch({maximumAge:e.maximumAge||0,timeout:e.timeout||1e4,model:e.model||"highAccuracy"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})},u=function(e){return new Promise(function(t,n){o.clearWatch(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})};e.exports={get:r,watch:i,clearWatch:u}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),i=o(r),u=n(5),c=o(u),f=n(6),s=o(f);e.exports={audio:i.default,image:c.default,video:s.default}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/modal");var r=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.alert({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t())})})},i=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.confirm({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},u=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.prompt({title:e.title||"",message:e.message||"",text:e.text||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},c=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},["top","middle","bottom"].indexOf(e.position)<0&&(e.position="middle"),o.toast({message:e.message||"",duration:e.duration||3e3,position:e.position},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t())})})};e.exports={alert:r,confirm:i,prompt:u,toast:c}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/recorder");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),new Promise(function(n,r){["stereo","mono"].indexOf(e.channel)<0&&(e.channel="stereo"),["low","standard","high"].indexOf(e.quality)<0&&(e.quality="standard"),o.start({channel:e.channel,quality:e.quality},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,n){o.pause(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,n){o.stop(function(o){o=o||{},o.error?(n(o.error),"function"==typeof e&&e(o.error,null)):(t(o),"function"==typeof e&&e(null,o))})})};e.exports={start:r,pause:i,stop:u}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(7),i=o(r),u=n(8),c=o(u),f=n(9),s=o(f),a=n(10),l=o(a);e.exports={stream:i.default,transfer:c.default,websocket:s.default,status:l.default}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(0),i=o(r),u=n(1),c=o(u),f=n(2),s=o(f),a=n(3),l=o(a),d=750/weex.config.env.deviceWidth*weex.config.env.deviceHeight;e.exports={base:i.default,battery:c.default,screen:s.default,volume:l.default,width:750,height:d}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/actionsheet");var r=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={message:e}),e=e||{},o.create({title:e.title||"",message:e.message||"",items:e.items||[],index:e.index||0},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(n(e),"function"==typeof t&&t(null,e))})})};e.exports={create:r}},function(e,t,n){var o=void 0;o=weex.requireModule("animation"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("picker"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("meta"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("clipboard"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("dom"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("navigator"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("storage"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("webview"),e.exports=o},function(e,t,n){var o=void 0;o=weex.requireModule("globalEvent"),e.exports=o},function(e,t,n){var o=void 0,r=void 0;o=weex.requireModule("ums/launcher"),r=weex.requireModule("navigator");var i=function(e,t){return e=e||{},new Promise(function(n,r){o.callTrans({appName:e.appName||null,bizName:e.bizName||null,transData:e.transData||{}},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},u=function(e,t){return e=e||{},new Promise(function(n,r){o.callNativeApps({pkgName:e.pkgName||null,transData:e.transData||{}},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})},c=function(e,t){e=e||{},e.pkgName,e.entryFile,e.transData,r.push({url:"file:///Share/ULightApp/"+pkgName+"/"+entryFile,animated:"true"},function(e){t(e)})},f=function(e){return new Promise(function(t,n){o.callCashier(function(o){"Call callCashier error"===o?n(o):t(o),"function"==typeof e&&e(o)})})},s=function(e,t){return new Promise(function(n,r){"string"==typeof e&&(e={type:"script",data:e}),e=e||{},o.callPrinter({type:e.type||"script",data:e.data},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={callTrans:i,callApps:u,callLight:c,callCashier:f,callPrinter:s}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/path");var r=function(){return o.getCurrentPath()},i=function(e){return"string"!=typeof e?"":o.loadFileString(e)},u=function(){return o.getAppConfig()};e.exports={getCurrentPath:r,getLocalFileString:i,getAppConfig:u}},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(11),i=o(r),u=n(12),c=o(u),f=n(13),s=o(f),a=n(14),l=o(a);e.exports={common:i.default,hermes:c.default,signature:s.default,transfer:l.default}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/scanqr");var r=function(e,t){return new Promise(function(n,r){"function"==typeof e&&(t=e,e={}),o.scanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):n(),"function"==typeof t&&t(e)})})},i=function(e,t){return new Promise(function(n,r){"function"==typeof e&&(t=e,e={}),o.continueScanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):n(),"function"==typeof t&&t(e)})})};e.exports={scanCode:r,continueScanCode:i}},function(e,t,n){var o=void 0,r=void 0;o=weex.requireModule("globalEvent"),r=weex.requireModule("globalKey");var i=function(e,t){"function"==typeof e?(t=e,e={}):(e=e||{},e.back&&r.setValue("back",e.back),e.menu&&r.setValue("menu",e.menu),e.home&&r.setValue("home",e.home));var n=!1,i=!1,u=!1,c={get back(){return n},set back(e){n=e,r.setValue("back",e)},get menu(){return u},set menu(e){u=e,r.setValue("menu",e)},get home(){return i},set home(e){i=e,r.setValue("home",e)}};return o.addEventListener("onKeyPressed",function(e){console.log("====>>>> onKeyPressed = "+JSON.stringify(e)),t(e)}),c};e.exports={handleKeyEvent:i}},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)},i=void 0;i=weex.requireModule("ums/sqlite");var u=function(e){return new Promise(function(t,n){i.exec("open",[],function(o){null!==o&&void 0!==o?(n(o.type),"function"==typeof e&&e(o.message)):(t(),"function"==typeof e&&e(o))})})},c=function(e){return new Promise(function(t,n){i.exec("close",[],function(o){null!==o&&void 0!==o?(n(o.type),"function"==typeof e&&e(o.message)):(t(),"function"==typeof e&&e(o))})})},f=function(e){return new Promise(function(t,n){i.exec("delete",[],function(o){null!==o&&void 0!==o?(n(o.type),"function"==typeof e&&e(o.message)):(t(),"function"==typeof e&&e(o))})})},s=function(e,t,n){var o,u,c,f,s,a,l;if(f="string"==typeof e?e:e.toString(),c=[],l=[],t&&t.constructor===Array)for(o=0,u=t.length;o<u;o++)a=t[o],s=void 0===a?"undefined":r(a),c.push(null===a||void 0===a?null:"number"===s||"string"===s?a:a.toString());return l.push({sql:f,params:c}),new Promise(function(e,t){i.exec("executeSqlBatch",l,function(t){e(),"function"==typeof n&&n(t)})})},a=function(e,t){var n,o,r,u;if(!e||e.constructor!==Array)return void t("sqlBatch expects an array");for(n=[],o=0,r=e.length;o<r;o++)if(u=e[o],u.constructor===Array){if(0===u.length)return void t("sqlBatch array element of zero (0) length");n.push({sql:u[0],params:0===u.length?[]:u[1]})}else n.push({sql:u,params:[]});return new Promise(function(e,o){i.exec("executeSqlBatch",n,function(n){e(),"function"==typeof t&&t(n)})})};e.exports={openDB:u,closeDB:c,deleteDB:f,executeSql:s,sqlBatch:a}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/bluetooth");var r=function(e,t){return new Promise(function(n,r){e=e||{},o.startIBeacon({major:e.major||10178,minor:e.minor||24895,txPower:e.txPower||197,uuid:e.uuid||"FDA50693-A4E2-4FB1-AFCF-C6EB07647825"},function(e){e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(),"function"==typeof t&&t(e))})})},i=function(e){return new Promise(function(t,n){o.stopIBeacon(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})},u=function(e){return new Promise(function(t,n){o.searchDevice(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})},c=function(e){return new Promise(function(t,n){o.stopSearch(function(o){o.error?(n(o.error),"function"==typeof e&&e(o.error)):(t(),"function"==typeof e&&e(o))})})};e.exports={startIbeacon:r,stopIbeacon:i,searchDevice:u,stopSearch:c}},function(e,t,n){var o=void 0;o=weex.requireModule("ums/appstore");var r=function(e,t,n){return new Promise(function(r,i){e=e||{},o.callPay(e,function(e){e=e||{},e.error?(i(e.error),"function"==typeof t&&t(e.error)):(r(e),"function"==typeof t&&t(e))},function(e){e=e||{},e.error?(i(e.error),"function"==typeof n&&n(e.error)):(r(e),"function"==typeof n&&n(e))})})},i=function(e,t){return new Promise(function(n,r){e=e||{},o.queryPayResult(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(n(e),"function"==typeof t&&t(e))})})};e.exports={callPay:r,queryPayResult:i}}])},3:function(e,t,n){var o,r,i=[];i.push(n(4)),o=n(5);var u=n(6);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\node_modules\\ums-comp\\packages\\ums-header\\src\\index.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-56279376",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},4:function(e,t){e.exports={wrap:{width:"750",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},rightPart:{paddingRight:"28",justifyContent:"flex-end"},leftPart:{paddingLeft:"28"},titleText:{textOverflow:"ellipsis",textAlign:"center",lines:1,width:"360"},title:{width:"360"},side:{width:"126",flexDirection:"row",alignItems:"center",flex:1},"header-text":{fontSize:"32",fontFamily:"'Open Sans', sans-serif"}}},46:function(e,t,n){var o,r,i=[];i.push(n(47)),o=n(48);var u=n(49);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\src\\CourseTake.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-705f7f37",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},47:function(e,t){e.exports={console:{height:"300",width:"600",marginTop:"50",marginBottom:"0",marginLeft:"20",marginRight:"20",borderRadius:"10",borderColor:"#a327eb",borderWidth:"1",paddingLeft:"50",justifyContent:"center"},"new-btn-group":{justifyContent:"center",marginTop:"50",flexDirection:"row"},"btn-group":{flexDirection:"row",alignItems:"center",justifyContent:"center"},"new-item":{alignItems:"center",justifyContent:"center"},"new-btn-text":{color:"#ffffff",justifyContent:"center"},"new-btn":{width:"600",height:"150",justifyContent:"center",alignItems:"center",paddingTop:"20",paddingRight:"40",paddingBottom:"20",paddingLeft:"40",marginTop:"100",backgroundColor:"#a327eb",borderRadius:"10",borderWidth:"1",borderColor:"#cccccc",borderStyle:"solid"},btn:{width:"240",height:"70",alignItems:"center",justifyContent:"center",paddingTop:"40",paddingRight:"40",paddingBottom:"40",paddingLeft:"40",marginTop:"20",backgroundColor:"#a327eb",borderRadius:"10",borderWidth:"1",borderColor:"#cccccc",borderStyle:"solid"},"btn-text":{color:"#ffffff",justifyContent:"center"},wrapper:{width:"750"},active:{flex:1,width:"250",height:"100",justifyContent:"center",alignItems:"center",backgroundColor:"#008000"},test:{background:"#fff"}}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n.n(o),i=n(2),u=n.n(i);t.default={created:function(){},components:{UmsHeader:r.a},data:{index:1,photourl1:"",name:"",tel:"",remark:"",savetime:""},methods:{previouspage:function(){u.a.navigator.push({url:"CourseSave.js"})},nextpage:function(){u.a.navigator.push({url:"CourseRecord.js"})},cancle:function(){u.a.navigator.push({url:"index.js"})},leftClick:function(){u.a.navigator.push({url:"index.js"})}}}},49:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"},on:{back:e.backMethod}},[n("ums-header",{staticClass:["header"],attrs:{title:"使用说明-取件",backgroundColor:"#a327eb",height:"150px"},on:{onLeftPartClick:e.leftClick}}),e._m(0,!1,!1),n("div",{staticClass:["new-btn-group"]},[n("div",{staticClass:["btn-group"]},[n("div",{staticClass:["btn"],on:{click:e.previouspage}},[n("text",{staticClass:["btn-text"]},[e._v("上一页")])]),n("div",{staticClass:["btn"],on:{click:e.nextpage}},[n("text",{staticClass:["btn-text"]},[e._v("下一页")])])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["new-btn-group"]},[n("div",{staticClass:["console"],staticStyle:{height:"800"}},[n("div",{staticClass:["new-item-group"]},[n("text",{staticClass:["title-text"]},[e._v("取件流程:")]),n("text",{staticClass:["title-text"]},[e._v("1.点击主界面的取件按钮，系统会进入到填入寄存单号的页面,可以手工填入寄存单号，也可以扫寄存小票上面的条码\n          ")]),n("text",{staticClass:["title-text"]},[e._v("2.然后会跳到存件的信息，确认正确后，点击取件，然后会调用验证，用之前保存的验证方式重新验证即可。\n          ")]),n("text",{staticClass:["title-text"]},[e._v("3.验证完成后，就会跳到结果页面，如果结果是验证成功，则表示是该顾客存的，可以叫存件交给顾客。\n          ")])])])])}]},e.exports.render._withStripped=!0},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{right:!1,left:!1}},props:{height:{type:String,default:"97px"},backgroundColor:{type:String,default:"#004684"},title:String,color:{type:String,default:"#ffffff"},fontSize:{type:String,default:"42px"}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"umsHeader",src:"url('"+n(0)+"')"})},methods:{onLeftPartClick:function(){this.$emit("onLeftPartClick")},onRightPartClick:function(){this.$emit("onRightPartClick")}},created:function(){this.left=!!this.$slots.left,this.right=!!this.$slots.right}}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrap"],style:{backgroundColor:e.backgroundColor,height:e.height}},[e.left?n("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[e._t("left")],2):n("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[n("text",{staticStyle:{fontFamily:"umsHeader",color:"#FFF",width:"120px"}},[e._v("返回")])]),n("div",{staticClass:["title"]},[e._t("title",[e.title?n("text",{staticClass:["titleText","header-text"],style:{color:e.color,"font-size":e.fontSize}},[e._v(e._s(e.title))]):e._e()])],2),e.right?n("div",{staticClass:["rightPart","side"],style:{height:e.height},on:{click:e.onRightPartClick}},[e._t("right")],2):n("div",{staticStyle:{flex:"1"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});