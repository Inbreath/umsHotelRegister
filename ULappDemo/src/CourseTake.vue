<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="使用说明-取件" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>


 <div class="new-btn-group" >
 <div class="console" style="height:800;">
        <div class="new-item-group">
          <text class="title-text" >取件流程:</text>
          <text class="title-text" >1.点击主界面的取件按钮，系统会进入到填入寄存单号的页面,可以手工填入寄存单号，也可以扫寄存小票上面的条码
          </text>
          <text class="title-text" >2.然后会跳到存件的信息，确认正确后，点击取件，然后会调用验证，用之前保存的验证方式重新验证即可。
          </text>
          <text class="title-text" >3.验证完成后，就会跳到结果页面，如果结果是验证成功，则表示是该顾客存的，可以叫存件交给顾客。
          </text>

        </div>
</div>
</div>

<div class="new-btn-group" >
         <div class="btn-group" >
          <div class="btn" @click="previouspage">
            <text class = "btn-text">上一页</text>
          </div>
          <div class="btn" @click="nextpage">
            <text class = "btn-text">下一页</text>
          </div>
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
 </div>
</template>

<style>
  .console {
  height: 300px;
  width: 600px;
  margin-top: 50px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #a327eb;
  border-width: 1px;
  padding-left: 50px;
  justify-content: center;
}
 .new-btn-group{
    justify-content: center;
    margin-top: 50px;
    flex-direction: row;
  }
 .btn-group{
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
.new-item{
     align-items: center;
     justify-content: center;
   }
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
    background-color: #a327eb;
    
    border-radius: 10px;
    border-width:1px;
    border-color: #ccc;
    border-style: solid ; 
  }
  .new-btn-group{
    justify-content: center;

    flex-direction: row;
  }
  .btn{
     width: 240px;
    height: 70px;
    align-items: center;
    justify-content: center;
    padding: 40px 40px;
    margin-top: 20px;
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

export default {
  created() {
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1,
    photourl1: "",
    name: "",
    tel: "",
    remark: "",
    savetime:""
  },
  methods: {
    previouspage(){
      umsApi.navigator.push({url: 'CourseSave.js'})
    },
    nextpage(){
      umsApi.navigator.push({url: 'CourseRecord.js'})
    },
    cancle() {
       umsApi.navigator.push({url: 'index.js'})
    },
    leftClick(){
      umsApi.navigator.push({url: 'index.js'})
    }
  }
};
</script>
