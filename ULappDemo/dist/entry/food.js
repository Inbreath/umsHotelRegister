// {"framework" : "Vue"} 

!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="file:///Share/ULightApp/com.ums.jyftest/",e(e.s=76)}({76:function(t,e,o){var r,n,i=[];i.push(o(77)),r=o(78);var s=o(79);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(__vue_optinos__=n.options),n.__file="G:\\银商notes\\笔记\\2018-02\\2018.02.06--格式修改+字段属性修改+酒店寄存开发计划文档\\酒店寄存器文档\\umsHoteiRegister\\ULappDemo\\src\\entry\\food.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n.scopedId="data-v-36220a5d",n.style=n.style||{},i.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},77:function(t,e){t.exports={wrapper:{width:"750",height:"1200"},"food-item":{borderColor:"#000000",borderWidth:"1",borderRadius:"50",marginTop:"20",marginRight:"20",marginBottom:0,marginLeft:"20",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},blank:{width:"750",height:"200"},"btn-group":{flexDirection:"row"},btn:{paddingTop:"20",paddingRight:"40",paddingBottom:"20",paddingLeft:"40",marginTop:"20",marginRight:"20",marginBottom:"20",marginLeft:"20",backgroundColor:"#FFA500",borderWidth:"1",borderColor:"#cccccc",borderStyle:"solid"},"btn-text":{color:"#333333"},title:{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}},78:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{setfood:function(t,e){console.log(this.$store.state.allFoods[0].url);var o={label:t,price:e};this.$store.commit("setFood",o)}}}},79:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"}},[o("scroller",[t._l(t.$store.state.allFoods,function(e){return o("div",{staticClass:["food-item"]},[o("text",[t._v("菜品名称："+t._s(e.label))]),o("text",[t._v("价格："+t._s(e.price)+"元")]),o("div",{staticClass:["title"]},[o("image",{staticStyle:{width:"150",height:"150"},attrs:{src:e.url}}),o("div",{staticClass:["btn-group"]},[o("div",{staticClass:["btn"],on:{click:function(o){t.setfood(e.label,e.price)}}},[o("text",[t._v("-")])]),o("text",[t._v(t._s(e.price)+"份")]),o("div",{staticClass:["btn"],on:{click:function(o){t.setfood(e.label,e.price)}}},[o("text",[t._v("+")])])])])])}),o("div",{staticClass:["blank"]})],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});