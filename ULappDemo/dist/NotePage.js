// {"framework" : "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="file:///Share/ULightApp/com.ums.jyftest/",t(t.s=108)}({0:function(e,t,o){e.exports=o.p+"font/UmsIconFont.ttf"},1:function(e,t,o){"use strict";e.exports=o(3)},108:function(e,t,o){var n,r,i=[];i.push(o(109)),n=o(110);var u=o(111);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\src\\NotePage.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-1d076556",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},109:function(e,t){e.exports={"title-text":{color:"#000000"},item:{marginTop:"20",marginRight:"20",marginBottom:"20",marginLeft:"20",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",borderBottom:"2px solid #ddd"},"input-text":{alignItems:"center",marginTop:"20",marginRight:0,marginBottom:"20",marginLeft:0,paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20",color:"#333333",width:"660",height:"80",borderWidth:"2",borderColor:"#979797",borderStyle:"solid"},console:{height:"80",width:700,marginTop:"20",marginBottom:"0",marginRight:"20",borderRadius:"10",borderColor:"#aaaaaa",borderWidth:"1",paddingLeft:"50"},"console-plus":{height:"240",width:700,marginTop:"20",marginBottom:"0",marginRight:"20",borderRadius:"10",borderColor:"#aaaaaa",borderWidth:"1",paddingLeft:"50"},"new-btn-text":{color:"#ffffff",justifyContent:"center"},"new-btn":{width:"600",height:"150",justifyContent:"center",alignItems:"center",paddingTop:"20",paddingRight:"40",paddingBottom:"20",paddingLeft:"40",marginTop:"100",backgroundColor:"#a327eb",borderRadius:"10",borderWidth:"1",borderColor:"#cccccc",borderStyle:"solid"},"new-btn-group":{justifyContent:"center",flexDirection:"row"},"btn-group":{flexDirection:"row",justifyContent:"center"},btn:{width:"280",height:"280",alignItems:"center",justifyContent:"center",paddingTop:"40",paddingRight:"40",paddingBottom:"40",paddingLeft:"40",marginTop:"100",backgroundColor:"#a327eb",borderRadius:"140",borderWidth:"1",borderColor:"#cccccc",borderStyle:"solid"},"btn-text":{color:"#ffffff",justifyContent:"center"},wrapper:{width:"750"},active:{flex:1,width:"250",height:"100",justifyContent:"center",alignItems:"center",backgroundColor:"#008000"},test:{background:"#fff"}}},110:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),r=o.n(n),i=o(2),u=o.n(i);t.default={data:function(){return{telphone:"",remark:"",name:"",index:1}},created:function(){var e=this;u.a.openDB(function(t){console.log("xydi+打开数据库成功"),u.a.executeSql("CREATE TABLE IF NOT EXISTS t_deposit (deposit_id, customer_tel,customer_name,photo_url,auth_method,password,deposit_date,deposit_time,isrefund,remark)",[],function(t){console.log("SQL batch result: "+t),u.a.closeDB(function(t){null!==t&&void 0!==re||console.log("xydi+关闭数据库成功"),u.a.storage.getItem("Verificationtype",function(t){var o=t.data;"1"==o?u.a.storage.getItem("name",function(t){var o=t.data;e.name=o}):"3"==o&&u.a.storage.getItem("password",function(t){var o=t.data;console.log("xydi+获取到的手机号"+o),e.telphone=o})})})})})},components:{UmsHeader:r.a},methods:function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({leftClick:function(){u.a.navigator.pop()},start:function(){var e=this;u.a.storage.getItem("state",function(t){var o=t.data;console.log("xydi+标志位"+o),"1"==o&&u.a.storage.setItem("state","0",function(t){if(null==e.name&&void 0==e.name)var o="";else var o=e.name;if(null==e.telphone&&void 0==e.telphone)var n="";else{var n=e.telphone;n=n.substr(0,3)+"****"+n.substr(7,4)}if(null==e.remark&&void 0==e.remark)var r="";else var r=e.remark;var i=u.a.getTime("yyyyMMddHHmmss"),a=i.substr(0,4)+"-"+i.substr(4,2)+"-"+i.substr(6,2)+" "+i.substr(8,2)+":"+i.substr(10,2)+":"+i.substr(12,2),c=Math.floor(100*Math.random());c=("0"+c).substr(-2);var f=i+c,s=u.a.getTime("yyyyMMdd"),l=u.a.getTime("HHmmss");u.a.storage.getItem("photourl",function(e){var t=e.data;u.a.storage.getItem("Verificationtype",function(e){var i=e.data;u.a.storage.getItem("password",function(e){var c=e.data;u.a.openDB(function(e){console.log("xydi+打开数据库成功1"),console.log("xydi: "+f+"--"+n+"--"+o+"--"+t+"--"+i+"--"+c),u.a.executeSql("INSERT INTO t_deposit VALUES (?,?,?,?,?,?,?,?,?,?)",[f,n,o,t,i,c,s,l,"0",r],function(e){console.log("xydiSQL batch result: "+e);var t=JSON.parse(e.substr(1,e.length-2));u.a.closeDB(function(e){null!==e&&void 0!==e||console.log("xydi+关闭数据库成功1"),console.log("xydi+数据库返回的结果1: "+t.type),u.a.storage.removeItem("photourl",function(e){u.a.storage.removeItem("Verificationtype",function(e){u.a.storage.removeItem("password",function(e){if("success"==t.type){console.log("xydi+插入成功1");var i="!hz l\n!asc n\n!gray 5\n!barcode 2 64\n*text c 欢迎使用酒店寄存\n*text l 寄存单号:"+f+"\n*barcode c "+f+"\n*text l 姓名:"+o+"\n*text l 电话:"+n+"\n*text l 备注:"+r+"\n*text l 寄存时间:"+a+"\n*text c";u.a.callPrinter({type:"script",data:i},function(e){console.log("xydi+打印结果"+JSON.stringify(e)),u.a.callPrinter({type:"script",data:i},function(e){u.a.navigator.push({url:"success.js"})})})}else console.log("xydi+插入失败"),u.a.navigator.push({url:"error.js"})})})})})})})})})})})})},isActive:function(e){return this.index==e?"active":"footer-item"},backMethod:function(){u.a.navigator.push({url:"keepWayPage.js"})}},"leftClick",function(){u.a.navigator.push({url:"keepWayPage.js"})})}},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"},on:{back:e.backMethod}},[o("ums-header",{staticClass:["header"],attrs:{title:"设置信息",backgroundColor:"#a327eb",height:"150px"},on:{onLeftPartClick:e.leftClick}}),o("div",{staticClass:["item"]},[o("text",{staticClass:["title-text"]},[e._v("姓名")]),o("input",{staticClass:["input-text"],attrs:{type:"text",placeholder:"请输入姓名",value:e.name},on:{input:function(t){e.name=t.target.attr.value.trim()}}}),o("text",{staticClass:["title-text"]},[e._v("手机号")]),o("input",{staticClass:["input-text"],attrs:{type:"text",placeholder:"请输入手机号",value:"",value:e.telphone},on:{input:function(t){e.telphone=t.target.attr.value}}}),o("text",{staticClass:["title-text"]},[e._v("备注")]),o("input",{staticClass:["input-text"],staticStyle:{height:"200px"},attrs:{type:"text",placeholder:"请输入备注",value:e.remark},on:{input:function(t){e.remark=t.target.attr.value.trim()}}})]),o("div",{staticClass:["new-btn-group"]},[o("div",{staticClass:["new-btn"],on:{click:e.start}},[o("text",{staticClass:["new-btn-text"]},[e._v("确认打单")])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,o){var n=void 0;n=weex.requireModule("ums/device/base");var r=function(){var e=n.info();return JSON.parse(e).data},i=function(e){return e=e||"yyyyMMddHHmmss",n.getDeviceTime(e)};e.exports={info:r,getTime:i}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/device/battery");var r=function(e){return new Promise(function(t,o){n.status(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(n),"function"==typeof e&&e(n))})})};e.exports={status:r}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/device/screen");var r={get:function(e){return new Promise(function(t,o){n.getBrightness(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(n),"function"==typeof e&&e(n))})})},set:function(e,t){return new Promise(function(o,r){n.setBrightness(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})}},i={status:function(e){return new Promise(function(t,o){n.getOrientation(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(n),"function"==typeof e&&e(null,n))})})},lock:function(e,t){return"function"==typeof e&&(t=e,e={}),["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary","portrait","landscape","any"].indexOf(e)<0&&(e="any"),new Promise(function(o,r){n.lockOrientation(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(e),"function"==typeof t&&t(null,e))})})},unlock:function(e){return new Promise(function(t,o){n.unlockOrientation(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(n),"function"==typeof e&&e(null,n))})})}},u=function(e){return new Promise(function(t,o){n.info(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(n),"function"==typeof e&&e(n))})})};e.exports={brightness:r,orientation:i,info:u}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/device/volume");var r=function(e){return new Promise(function(t,o){n.get(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(n),"function"==typeof e&&e(n))})})},i=function(e,t){return new Promise(function(o,r){n.set(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})};e.exports={get:r,set:i}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/media/audio");var r=function(e,t){return new Promise(function(o,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});n.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,o){n.pause(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,o){n.stop(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/media/image");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),e.limit=e.limit||1,e.quality=e.quality&&e.quality<100?parseInt(e.quality):100,new Promise(function(o,r){n.pick({limit:e.limit,quality:e.quality,width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},i=function(e,t,o){return t=t||{},"function"==typeof t&&(o=t,t={}),new Promise(function(r,i){if(!e)return void i({code:110040,message:"MEDIA_MISSING_ARGUMENT"});"string"==typeof e&&(e=[e]),["dots","label","none"].indexOf(t.style)<0&&(t.style="dots"),"dots"===t.style&&(e.length>9?t.style="label":1===e.length&&(t.style="none")),n.preview(e,{current:t.current,style:t.style},function(e){e=e||{},e.error?(i(e.error),"function"==typeof o&&o(e.error)):(r(),"function"==typeof o&&o(null))})})},u=function(e,t){return new Promise(function(o,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});n.info(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},a=function(e,t){return new Promise(function(o,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});n.exif(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})};e.exports={pick:r,preview:i,info:u,exif:a}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/media/video");var r=function(e,t){return new Promise(function(o,r){if(!e)return void r({code:110040,message:"MEDIA_MISSING_ARGUMENT"});n.play(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,o){n.pause(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,o){n.stop(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(),"function"==typeof e&&e(null))})})};e.exports={play:r,pause:i,stop:u}},function(e,t,o){var n=void 0;n=weex.requireModule("stream"),e.exports=n},function(e,t,o){var r="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},i=void 0;i=weex.requireModule("ums/network/transfer");var u=function(e,t,o,n){return new Promise(function(u,a){if(!e)return void a({code:151040,message:"DOWNLOAD_MISSING_ARGUMENT"});"function"==typeof t?n=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof o&&(n=o),"function"==typeof t.onProgress&&(o=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),o=o||{},i.download({url:t.url,headers:t.headers||{},target:t.target},function(e){e=e||{},e.error?(a(e.error),"function"==typeof n&&n(e.error)):e.progress?"function"==typeof o.onProgress&&o.onProgress(e.progress):(u(e),"function"==typeof n&&n(e))})})},a=function(e,t,o,n){return new Promise(function(u,a){return e?("function"==typeof t?n=t:"object"===(void 0===t?"undefined":r(t))&&("function"==typeof o&&(n=o),"function"==typeof t.onProgress&&(o=t)),"object"===(void 0===e?"undefined":r(e))?t=e:(t=t||{},t.url=e),o=o||{},t.path?(t.method=t.method?t.method.toUpperCase():"POST",["POST","PUT","PATCH"].indexOf(t.method)<0?void a({code:151050,message:"UPLOAD_INVALID_ARGUMENT",details:"Unsupported request method"}):void i.upload({url:t.url,method:t.method,path:t.path,name:t.name,headers:t.headers||{},formData:t.formData||{},mimeType:t.mimeType},function(e){e=e||{},e.error?(a(e.error),"function"==typeof n&&n(e.error)):e.progress?"function"==typeof o.onProgress&&o.onProgress(e.progress):(u(e),"function"==typeof n&&n(e))})):void a({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})):void a({code:151040,message:"UPLOAD_MISSING_ARGUMENT"})})};e.exports={download:u,upload:a}},function(e,t,o){var n=void 0;n=weex.requireModule("webSocket"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("ums/device/network");var r=function(e){return new Promise(function(t,o){n.status(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(n),"function"==typeof e&&e(n))})})};e.exports={status:r}},function(e,t,o){var n=void 0;n=weex.requireModule("CommPlugin"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("Hermes"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("SignaturePlugin"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("TransferPlugin"),e.exports=n},,,,,,,,,,,,,,,,function(e,t,o){var n={},r=o(31),i=o(32),u=o(33),a=o(34),c=o(35),f=o(36),s=o(37),l=o(38),d=o(39),p=o(40),m=o(41),y=o(42),g=o(43),v=o(44),h=o(45),x=o(46),w=o(47),b=o(48),P=o(49),_=o(50),S=o(51),M=o(52),C=o(53),k=o(54),q=o(55);void 0!==r&&(n.camera=r),void 0!==i&&(n.geolocation=i),void 0!==u&&(n.audio=u.audio,n.image=u.image,n.video=u.video),void 0!==a&&(n.modal=a),void 0!==c&&(n.recorder=c),void 0!==f&&(n.stream=f.stream,n.download=f.transfer.download,n.upload=f.transfer.upload,n.websocket=f.websocket,n.networkType=f.status.status),void 0!==s&&(n.getDeviceInfo=s.base.info,n.getTime=s.base.getTime,n.battery=s.battery,n.brightness=s.screen.brightness,n.getScreenInfo=s.screen.info,n.volume=s.volume,n.height=s.height,n.width=s.width),void 0!==l&&(n.actionsheet=l),void 0!==M&&(n.handleKeyEvent=M.handleKeyEvent),void 0!==d&&(n.animation=d),void 0!==p&&(n.picker=p),void 0!==m&&(n.meta=m),void 0!==y&&(n.clipboard=y),void 0!==g&&(n.dom=g),void 0!==v&&(n.navigator=v),void 0!==h&&(n.storage=h),void 0!==x&&(n.webview=x),void 0!==w&&(n.globalEvent=w),void 0!==_&&(n.common=_.common,n.hermes=_.hermes,n.signature=_.signature,n.transfer=_.transfer),void 0!==b&&(n.callTrans=b.callTrans,n.callApps=b.callApps,n.callLight=b.callLight,n.callCashier=b.callCashier,n.callPrinter=b.callPrinter),void 0!==P&&(n.getCurrentPath=P.getCurrentPath,n.getLocalFileString=P.getLocalFileString,n.getAppConfig=P.getAppConfig),void 0!==S&&(n.scanCode=S.scanCode,n.continueScanCode=S.continueScanCode),void 0!==C&&(n.openDB=C.openDB,n.closeDB=C.closeDB,n.deleteDB=C.deleteDB,n.executeSql=C.executeSql,n.sqlBatch=C.sqlBatch),void 0!==k&&(n.bluetooth=k),void 0!==q&&(n.appstore=q),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("ums/camera");var r=function(e,t){return e=e||{},new Promise(function(o,r){n.captureImage({width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(e),"function"==typeof t&&t(null,e))})})},i=function(e,t){return e=e||{},new Promise(function(o,r){n.captureVideo({width:e.width||null,height:e.height||null},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(e),"function"==typeof t&&t(null,e))})})};e.exports={captureImage:r,captureVideo:i}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/geolocation");var r=function(e,t){return"function"==typeof e&&(t=e,e={}),new Promise(function(e,o){n.get(function(n){n=n||{},n.error?(o(n.error),"function"==typeof t&&t(n.error,null)):(e(n),"function"==typeof t&&t(null,n))})})},i=function(e,t){return"function"==typeof e&&(t=e,e={}),new Promise(function(o,r){n.watch({maximumAge:e.maximumAge||0,timeout:e.timeout||1e4,model:e.model||"highAccuracy"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(e),"function"==typeof t&&t(null,e))})})},u=function(e){return new Promise(function(t,o){n.clearWatch(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(n),"function"==typeof e&&e(null,n))})})};e.exports={get:r,watch:i,clearWatch:u}},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var r=o(4),i=n(r),u=o(5),a=n(u),c=o(6),f=n(c);e.exports={audio:i.default,image:a.default,video:f.default}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/modal");var r=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={message:e}),e=e||{},n.alert({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(),"function"==typeof t&&t())})})},i=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={message:e}),e=e||{},n.confirm({title:e.title||"",message:e.message||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},u=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={message:e}),e=e||{},n.prompt({title:e.title||"",message:e.message||"",text:e.text||"",okButton:e.okButton||"OK",cancelButton:e.cancelButton||"Cancel"},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},a=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={message:e}),e=e||{},["top","middle","bottom"].indexOf(e.position)<0&&(e.position="middle"),n.toast({message:e.message||"",duration:e.duration||3e3,position:e.position},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(),"function"==typeof t&&t())})})};e.exports={alert:r,confirm:i,prompt:u,toast:a}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/recorder");var r=function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),new Promise(function(o,r){["stereo","mono"].indexOf(e.channel)<0&&(e.channel="stereo"),["low","standard","high"].indexOf(e.quality)<0&&(e.quality="standard"),n.start({channel:e.channel,quality:e.quality},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(),"function"==typeof t&&t(null))})})},i=function(e){return new Promise(function(t,o){n.pause(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(),"function"==typeof e&&e(null))})})},u=function(e){return new Promise(function(t,o){n.stop(function(n){n=n||{},n.error?(o(n.error),"function"==typeof e&&e(n.error,null)):(t(n),"function"==typeof e&&e(null,n))})})};e.exports={start:r,pause:i,stop:u}},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var r=o(7),i=n(r),u=o(8),a=n(u),c=o(9),f=n(c),s=o(10),l=n(s);e.exports={stream:i.default,transfer:a.default,websocket:f.default,status:l.default}},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var r=o(0),i=n(r),u=o(1),a=n(u),c=o(2),f=n(c),s=o(3),l=n(s),d=750/weex.config.env.deviceWidth*weex.config.env.deviceHeight;e.exports={base:i.default,battery:a.default,screen:f.default,volume:l.default,width:750,height:d}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/actionsheet");var r=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={message:e}),e=e||{},n.create({title:e.title||"",message:e.message||"",items:e.items||[],index:e.index||0},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error,null)):(o(e),"function"==typeof t&&t(null,e))})})};e.exports={create:r}},function(e,t,o){var n=void 0;n=weex.requireModule("animation"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("picker"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("meta"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("clipboard"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("dom"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("navigator"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("storage"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("webview"),e.exports=n},function(e,t,o){var n=void 0;n=weex.requireModule("globalEvent"),e.exports=n},function(e,t,o){var n=void 0,r=void 0;n=weex.requireModule("ums/launcher"),r=weex.requireModule("navigator");var i=function(e,t){return e=e||{},new Promise(function(o,r){n.callTrans({appName:e.appName||null,bizName:e.bizName||null,transData:e.transData||{}},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},u=function(e,t){return e=e||{},new Promise(function(o,r){n.callNativeApps({pkgName:e.pkgName||null,transData:e.transData||{}},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})},a=function(e,t){e=e||{},e.pkgName,e.entryFile,e.transData,r.push({url:"file:///Share/ULightApp/"+pkgName+"/"+entryFile,animated:"true"},function(e){t(e)})},c=function(e){return new Promise(function(t,o){n.callCashier(function(n){"Call callCashier error"===n?o(n):t(n),"function"==typeof e&&e(n)})})},f=function(e,t){return new Promise(function(o,r){"string"==typeof e&&(e={type:"script",data:e}),e=e||{},n.callPrinter({type:e.type||"script",data:e.data},function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})};e.exports={callTrans:i,callApps:u,callLight:a,callCashier:c,callPrinter:f}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/path");var r=function(){return n.getCurrentPath()},i=function(e){return"string"!=typeof e?"":n.loadFileString(e)},u=function(){return n.getAppConfig()};e.exports={getCurrentPath:r,getLocalFileString:i,getAppConfig:u}},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var r=o(11),i=n(r),u=o(12),a=n(u),c=o(13),f=n(c),s=o(14),l=n(s);e.exports={common:i.default,hermes:a.default,signature:f.default,transfer:l.default}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/scanqr");var r=function(e,t){return new Promise(function(o,r){"function"==typeof e&&(t=e,e={}),n.scanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):o(),"function"==typeof t&&t(e)})})},i=function(e,t){return new Promise(function(o,r){"function"==typeof e&&(t=e,e={}),n.continueScanQR(e,function(e){"call u-service fail"==e||"call u-sdk fail"==e?r(e):o(),"function"==typeof t&&t(e)})})};e.exports={scanCode:r,continueScanCode:i}},function(e,t,o){var n=void 0,r=void 0;n=weex.requireModule("globalEvent"),r=weex.requireModule("globalKey");var i=function(e,t){"function"==typeof e?(t=e,e={}):(e=e||{},e.back&&r.setValue("back",e.back),e.menu&&r.setValue("menu",e.menu),e.home&&r.setValue("home",e.home));var o=!1,i=!1,u=!1,a={get back(){return o},set back(e){o=e,r.setValue("back",e)},get menu(){return u},set menu(e){u=e,r.setValue("menu",e)},get home(){return i},set home(e){i=e,r.setValue("home",e)}};return n.addEventListener("onKeyPressed",function(e){console.log("====>>>> onKeyPressed = "+JSON.stringify(e)),t(e)}),a};e.exports={handleKeyEvent:i}},function(e,t,o){var r="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},i=void 0;i=weex.requireModule("ums/sqlite");var u=function(e){return new Promise(function(t,o){i.exec("open",[],function(n){null!==n&&void 0!==n?(o(n.type),"function"==typeof e&&e(n.message)):(t(),"function"==typeof e&&e(n))})})},a=function(e){return new Promise(function(t,o){i.exec("close",[],function(n){null!==n&&void 0!==n?(o(n.type),"function"==typeof e&&e(n.message)):(t(),"function"==typeof e&&e(n))})})},c=function(e){return new Promise(function(t,o){i.exec("delete",[],function(n){null!==n&&void 0!==n?(o(n.type),"function"==typeof e&&e(n.message)):(t(),"function"==typeof e&&e(n))})})},f=function(e,t,o){var n,u,a,c,f,s,l;if(c="string"==typeof e?e:e.toString(),a=[],l=[],t&&t.constructor===Array)for(n=0,u=t.length;n<u;n++)s=t[n],f=void 0===s?"undefined":r(s),a.push(null===s||void 0===s?null:"number"===f||"string"===f?s:s.toString());return l.push({sql:c,params:a}),new Promise(function(e,t){i.exec("executeSqlBatch",l,function(t){e(),"function"==typeof o&&o(t)})})},s=function(e,t){var o,n,r,u;if(!e||e.constructor!==Array)return void t("sqlBatch expects an array");for(o=[],n=0,r=e.length;n<r;n++)if(u=e[n],u.constructor===Array){if(0===u.length)return void t("sqlBatch array element of zero (0) length");o.push({sql:u[0],params:0===u.length?[]:u[1]})}else o.push({sql:u,params:[]});return new Promise(function(e,n){i.exec("executeSqlBatch",o,function(o){e(),"function"==typeof t&&t(o)})})};e.exports={openDB:u,closeDB:a,deleteDB:c,executeSql:f,sqlBatch:s}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/bluetooth");var r=function(e,t){return new Promise(function(o,r){e=e||{},n.startIBeacon({major:e.major||10178,minor:e.minor||24895,txPower:e.txPower||197,uuid:e.uuid||"FDA50693-A4E2-4FB1-AFCF-C6EB07647825"},function(e){e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(),"function"==typeof t&&t(e))})})},i=function(e){return new Promise(function(t,o){n.stopIBeacon(function(n){n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(),"function"==typeof e&&e(n))})})},u=function(e){return new Promise(function(t,o){n.searchDevice(function(n){n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(),"function"==typeof e&&e(n))})})},a=function(e){return new Promise(function(t,o){n.stopSearch(function(n){n.error?(o(n.error),"function"==typeof e&&e(n.error)):(t(),"function"==typeof e&&e(n))})})};e.exports={startIbeacon:r,stopIbeacon:i,searchDevice:u,stopSearch:a}},function(e,t,o){var n=void 0;n=weex.requireModule("ums/appstore");var r=function(e,t,o){return new Promise(function(r,i){e=e||{},n.callPay(e,function(e){e=e||{},e.error?(i(e.error),"function"==typeof t&&t(e.error)):(r(e),"function"==typeof t&&t(e))},function(e){e=e||{},e.error?(i(e.error),"function"==typeof o&&o(e.error)):(r(e),"function"==typeof o&&o(e))})})},i=function(e,t){return new Promise(function(o,r){e=e||{},n.queryPayResult(e,function(e){e=e||{},e.error?(r(e.error),"function"==typeof t&&t(e.error)):(o(e),"function"==typeof t&&t(e))})})};e.exports={callPay:r,queryPayResult:i}}])},3:function(e,t,o){var n,r,i=[];i.push(o(4)),n=o(5);var u=o(6);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(__vue_optinos__=r.options),r.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\node_modules\\ums-comp\\packages\\ums-header\\src\\index.vue",r.render=u.render,r.staticRenderFns=u.staticRenderFns,r.scopedId="data-v-56279376",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},4:function(e,t){e.exports={wrap:{width:"750",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},rightPart:{paddingRight:"28",justifyContent:"flex-end"},leftPart:{paddingLeft:"28"},titleText:{textOverflow:"ellipsis",textAlign:"center",lines:1,width:"360"},title:{width:"360"},side:{width:"126",flexDirection:"row",alignItems:"center",flex:1},"header-text":{fontSize:"32",fontFamily:"'Open Sans', sans-serif"}}},5:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{right:!1,left:!1}},props:{height:{type:String,default:"97px"},backgroundColor:{type:String,default:"#004684"},title:String,color:{type:String,default:"#ffffff"},fontSize:{type:String,default:"42px"}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"umsHeader",src:"url('"+o(0)+"')"})},methods:{onLeftPartClick:function(){this.$emit("onLeftPartClick")},onRightPartClick:function(){this.$emit("onRightPartClick")}},created:function(){this.left=!!this.$slots.left,this.right=!!this.$slots.right}}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrap"],style:{backgroundColor:e.backgroundColor,height:e.height}},[e.left?o("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[e._t("left")],2):o("div",{staticClass:["leftPart","side"],style:{height:e.height},on:{click:e.onLeftPartClick}},[o("text",{staticStyle:{fontFamily:"umsHeader",color:"#FFF",width:"120px"}},[e._v("返回")])]),o("div",{staticClass:["title"]},[e._t("title",[e.title?o("text",{staticClass:["titleText","header-text"],style:{color:e.color,"font-size":e.fontSize}},[e._v(e._s(e.title))]):e._e()])],2),e.right?o("div",{staticClass:["rightPart","side"],style:{height:e.height},on:{click:e.onRightPartClick}},[e._t("right")],2):o("div",{staticStyle:{flex:"1"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});