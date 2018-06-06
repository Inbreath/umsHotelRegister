<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="设置手机号" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="item">
        <text class="title-text" >手机号</text>
        
         <input class="input-text" type="text" placeholder="请设置手机号" v-model.trim="password" >
 
</div>    

       <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">确认</text>
          </div>
        </div>
  </div>
</template>

<style>
.title-text {
  color: #000;
}
.item {
  margin: 20px;
  padding: 10px;
  margin-left: 20px;
  border-bottom: 2px solid #ddd;
}
.input-text {
  align-items: center;
  margin: 20px 0 20px 0;
  padding: 20px 20px;
  color: #333333;
  width: 660px;
  height: 80px;
  border-width: 2px;
  border-color: #979797;
  border-style: solid;
  /*justify-content: space-between;*/
}
.console {
  height: 80px;
  width: 700ps;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #aaa;
  border-width: 1px;
  padding-left: 50px;
}
.console-plus {
  height: 240px;
  width: 700ps;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #aaa;
  border-width: 1px;
  padding-left: 50px;
}
.new-btn-text {
  color: #ffffff;
  justify-content: center;
}
.new-btn {
  width: 600px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin-top: 100px;
  background-color: #a327eb;

  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;
}
.new-btn-group {
  justify-content: center;

  flex-direction: row;
}
.btn-group {
  flex-direction: row;
  justify-content: center;
}
.btn {
  width: 280px;
  height: 280px;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  margin-top: 100px;
  background-color: #a327eb;

  border-radius: 140px;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;
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
Vue.prototype.umsApi = umsApi;

export default {
  created() {
    // this.jump('/food');
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1,
    password: "",
    password1: ""
  },
  methods: {
    start() {
      if(this.password!=""){
 
      umsApi.storage.setItem("Verificationtype", "3", event => {
        //余额查询type为2
        umsApi.storage.setItem("password", this.password, event => {
          umsApi.navigator.push({ url: "NotePage.js" });
        });
      });
      }else{
        var message1 = "手机号不能为空";
        UmsToast({
            message:message1,
            duration: 2000
          });
      }
    },

    backMethod() {
     umsApi.navigator.push({ url: "keepWayPage.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'keepWayPage.js'})
    }
  }
};
</script>
