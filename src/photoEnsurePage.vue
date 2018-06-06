<template>
  <div class="wrapper" @back='backMethod' append="tree">
     <ums-header
      title="存件" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="btn-group" >
  <image class = "new-item" style="width:500; height:500;" :src = "photourl1"/></image> 

 </div>
        <div class="btn-group" >
          <div class="btn" @click="backTaking">
            <text class = "btn-text">重新拍照</text>
          </div>
          <div class="btn" @click="keepPhoto">
            <text class = "btn-text">保存</text>
          </div>
        </div>

  </div>
</template>

<style>
.new-btn-text{
    color: #ffffff;    
    justify-content: center;
  }
  .new-btn{
    width: 600px;
    height: 150px;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    margin-top: 100px;
    background-color: #8774E8;
    
    border-radius: 10px;
    border-width:1px;
    border-color: #ccc;
    border-style: solid ; 
  }
  .new-btn-group{
    justify-content: center;

    flex-direction: row;
  }
  .btn-group{
    margin-top: 50px;
    flex-direction: row;
    justify-content: center;
  }
  .btn{
    width: 240px;
    height: 50px;
    align-items: center;
    justify-content: center;
    padding: 40px 40px;
    margin-top: 100px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #a327eb;
    
    border-radius: 10px;
    border-width:1px;
    border-color: #ccc;
    border-style: solid ; 
  }
   .btn-text{
    color: #ffffff;
    
    justify-content: center;

  }
  .wrapper { 
    width:750px;
  }
  .active{
    flex:1;
    width: 250px;
    height: 100px;
    justify-content:center;
    align-items:center;
    background-color: green;
  }
  .test{
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
    umsApi.storage.getItem("photourl", event => {
      var photourl = event.data;
      console.log("photourl: " + photourl);
      this.photourl1 = "file://.." + photourl;
    });
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1,
    photourl1: ""
  },
  methods: {
    leftClick() {
      umsApi.navigator.pop();
    },
    backTaking() {
      umsApi.camera.captureImage(ret => {
        if (ret != "" && ret != null) {
          var path = ret.path;
          umsApi.storage.setItem("photourl", path, event => {
            umsApi.navigator.push({ url: "photoEnsurePage.js" });
          });
        } else {
          umsApi.navigator.push({ url: "index.js" });
        }
      });
    },
    keepPhoto() {
      umsApi.storage.setItem("state","1",
      event => {
         umsApi.navigator.push({ url: "keepWayPage.js" });
    });
    },
    take() {
      this.jump("/food");
    },
    isActive: function(indexnow) {
      return this.index == indexnow ? "active" : "footer-item";
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
