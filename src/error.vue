<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="操作失败" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

      

<div class="btn-group" >
  <image class = "new-item" style="width:400; height:400;"  src="./static/002.png"/></image> 

 </div>
 <div class="btn-group" >
            <text >操作失败</text>
 </div>

 <div class="btn-group" >
        <div class="new-btn" @click="back">
            <text class = "new-btn-text">返回主页面</text>
          </div>
       </div>


      
       
       <!-- <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">人员管理</text>
          </div>
        </div>
        <div class="new-btn-group" >
        <div class="new-btn" @click="start">
            <text class = "new-btn-text">存放记录</text>
          </div>
       </div> -->
       <!-- <router-view class="view"></router-view> -->
  </div>
</template>

<style>
.new-btn-text {
    align-items: center;
    justify-content: center;
    background-color: #a327eb;
    
}
.new-btn {
  width: 500px;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin-top: 50px;
  background-color: #a327eb;

}
.new-btn-group {
  justify-content: center;

  flex-direction: row;
}
.btn-group {
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
}
.btn {
  width: 500px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  margin-top: 100px;
  background-color: #a327eb;

}
.btn-text {
  color: #ffffff;

  justify-content: center;
}
.wrapper {
  width: 750px;
}
.active {
  flex: 1;
  width: 250px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: green;
}
.test {
  background: #fff;
}
</style>

<script>
import { UmsButton, UmsToast } from "ums-comp";
import { umsHeader } from "ums-comp";
import umsApi from "ums-api";

export default {
  created() {
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1
  },
  methods: {
    back() {
      umsApi.navigator.push({ url: "index.js" });
    },
    backMethod() {
      umsApi.navigator.push({ url: "index.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'index.js'})
    }
  }
};
</script>
