// {"framework" : "Vue"} 

!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="file:///Share/ULightApp/com.ums.jyftest/",t(t.s=74)}({0:function(e,t,n){e.exports=n.p+"font/UmsIconFont.ttf"},74:function(e,t,n){var i,o,r=[];r.push(n(75)),i=n(76);var s=n(82);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(__vue_optinos__=o.options),o.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\src\\entry\\room.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.scopedId="data-v-152ef85a",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i,e.exports.el="true",new Vue(e.exports)},75:function(e,t){e.exports={wrapper:{width:"750"},console:{height:"80",marginTop:"50",marginBottom:"70",marginLeft:"20",marginRight:"20",borderRadius:"10",borderColor:"#aaaaaa",borderWidth:"1",paddingLeft:"50",justifyContent:"center"},txt:{fontSize:"48",lineHeight:"122",textAlign:"left"}}},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(77),o=n.n(i);t.default={components:{checkList:o.a},data:function(){return{whichroom:"",roomlist:this.$store.state.allRooms}},created:function(){},methods:{checkListlisten:function(e){this.whichroom=e.join(","),this.$store.commit("changeRoom",e.join(","))}}}},77:function(e,t,n){"use strict";e.exports=n(78)},78:function(e,t,n){var i,o,r=[];r.push(n(79)),i=n(80);var s=n(81);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(__vue_optinos__=o.options),o.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\node_modules\\ums-comp\\packages\\ums-check-list\\src\\index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.scopedId="data-v-84f2e9a8",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i},79:function(e,t){e.exports={wrapper:{paddingLeft:"40",borderTopWidth:"1",borderBottomWidth:"1",borderColor:"#e7e7e7"},cell:{borderBottomColor:"#e7e7e7",borderBottomWidth:"1"},"select-item":{flexDirection:"row",height:"122",alignItems:"center",paddingRight:"54"},"circle-button":{width:"54",height:"54",borderRadius:"200",borderWidth:"1",borderColor:"#e7e7e7",lineHeight:"122",justifyContent:"center",alignItems:"center",marginLeft:"40"},"icon-gou":{textAlign:"center",fontSize:"62"},"icon-check":{opacity:1},"icon-uncheck":{opacity:0},"icon-check-enable":{color:"#26a2ff"},"icon-check-disable":{color:"#d9d9d9"},item:{fontSize:"48",marginLeft:"32",lineHeight:"122"},"dir-reverse":{justifyContent:"space-between"},"button-disable":{backgroundColor:"#d9d9d9"},"icon-hidden":{display:"none"}}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("animation");t.default={name:"ums-check-list",data:function(){return{title:"",current:0,flagArr:[],val:this.value}},props:{value:{type:String,default:""},options:{type:Array,default:function(){return[{label:"选项1",value:"选中第一个",disabled:!1,check:!1},{label:"选项2",value:"选中第二个",disabled:!1,check:!1},{label:"选项3",value:"选中第三个",disabled:!1,check:!1},{label:"选项4",value:"选中第四个",disabled:!1,check:!1}]}},"align-right":{type:Boolean,default:!1},max:{type:Number,default:-1}},watch:{flagArr:function(e){var t=[];this.current=0;for(var n=0;n<e.length;n++)e[n]&&(this.current++,t.push(this.options[n].value));this.$emit("checklistListener",t)}},mounted:function(){for(var e=this.$refs.btn,t=0;t<e.length;t++)this.flagArr.push(this.options[t].check)},methods:{clickBtn:function(e){if(!this.options[e].disabled){if(this.current==this.max){if(!this.flagArr[e])return;this.current--,console.log(this.current)}this.toggle(e),this.$set(this.flagArr,e,!this.flagArr[e]),this.options[e].check=!this.options[e].check}},toggle:function(e){var t=this.$refs.icon;this.flagArr[e]?i.transition(t[e],{duration:300,delay:0,timingFunction:"linear",styles:{opacity:0}}):i.transition(t[e],{duration:300,delay:0,timingFunction:"linear",styles:{opacity:1}})},btnCheckable:function(e){return-1==this.max?!(e.check||!e.disabled):this.current<this.max?!(e.check||!e.disabled):!e.check||void 0}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('"+n(0)+"')"})}}},81:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["content"]},[n("div",{staticClass:["wrapper"]},e._l(e.options,function(t,i){return n("div",{staticClass:["cell"]},[n("div",{staticClass:["select-item"],class:[e.alignRight?"dir-reverse":""],on:{click:function(t){e.clickBtn(i)}}},[n("div",{ref:"btn",refInFor:!0,staticClass:["circle-button"],class:[e.btnCheckable(t)?"button-disable":""]},[n("text",{ref:"icon",refInFor:!0,staticClass:["icon-gou"],class:[t.check?"icon-check":"icon-uncheck",t.disabled?"icon-check-disable":"icon-check-enable",e.btnCheckable(t)?"icon-hidden":""],style:{fontFamily:"iconfont"}},[e._v("")])]),n("div",{staticClass:["item"]},[n("text",{staticStyle:{fontSize:"48px",lineHeight:"122px"}},[e._v(e._s(t.label))])])])])}))])},staticRenderFns:[]},e.exports.render._withStripped=!0},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"}},[n("check-list",{attrs:{options:e.roomlist,max:1},on:{checklistListener:e.checkListlisten}}),n("div",{staticClass:["console"]},[n("text",{staticClass:["txt"]},[e._v("点餐房间号："+e._s(e.whichroom))])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});