// {"framework" : "Vue"} 

!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="file:///Share/ULightApp/com.ums.jyftest/",t(t.s=13)}({13:function(e,t,o){var r,n,s=[];s.push(o(14)),r=o(15);var i=o(16);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=r=r.default),"function"==typeof n&&(__vue_optinos__=n.options),n.__file="D:\\ULightApp\\DEMO\\ULappDemo\\src\\entry\\box.vue",n.render=i.render,n.staticRenderFns=i.staticRenderFns,n.scopedId="data-v-06e4f676",n.style=n.style||{},s.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),e.exports=r,e.exports.el="true",new Vue(e.exports)},14:function(e,t){e.exports={wrapper:{width:"750"},"room-item":{border:"1",width:"750",height:"100"},active:{border:"1",backgroundColor:"#008000"}}},15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){},data:{room:"-1"},methods:{room:function(e){if(this.room==e)return"active"},changeRoom:function(e){this.room=e,this.$store.commit("changeRoom",e)}}}},16:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"],appendAsTree:!0,attrs:{append:"tree"}},e._l(e.$store.state.allRooms,function(t){return o("div",{staticClass:["room-item"],class:[e.room(t.room)],on:{click:function(o){e.changeRoom(t.room)}}},[e._v("\n    "+e._s(t.room)+"\n  ")])}))},staticRenderFns:[]},e.exports.render._withStripped=!0}});