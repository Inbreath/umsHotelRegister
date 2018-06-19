<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="使用说明-存件" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>


 <div class="new-btn-group" >
 <div class="console" style="height:900;">
   <scroller>
        <div class="new-item-group">
          <text class="title-text" >存件流程:</text>
          <text class="title-text" >1.点击主界面的存件按钮，系统会进入到拍照页面，然后用POS机对要存物品进行拍照
          </text>
          <text class="title-text" >2.拍完照后会到浏览的页面，用于确认刚才拍的照片，如果不满意，则点击重新拍照，如果满意，点击保存
          </text>
          <text class="title-text" >3.保存后会到选择验证方式的页面，该方式用于之后取件的时候进行验证，验证方式目前有3种，分别是身份证，手机号，和银行卡。身份证只需要刷一下就好，手机号需要填入，银行卡需要进行余额查询，所以需要顾客输入密码，用于验证身份。
          </text>
          <text class="title-text" >4.填完验证方式后，会调到补充信息的部分，填入顾客的姓名，手机号，和备注。姓名和手机号可用于不能完成验证的情况下确认身份，备注则可以填入寄存物品的简单描述（如：5瓶葡萄酒）。
          </text>
          <text class="title-text" >5.全部完成后，点击确认，会跳到存件结果的页面，通知是否存件成功，并且打印出2张存件的小票，一张交给顾客，另一张可以和存件放到一起，方便取件
          </text>
        </div>
        </scroller>
</div>
</div>


   <div class="new-btn-group" >
          <div class="btn" @click="nextpage">
            <text class = "btn-text">下一页</text>
          </div>
 </div>
    
  </div>
</template>

<style>
  .console {

  width: 750px;
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
    width: 550px;
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
    nextpage(){
      umsApi.navigator.push({url: 'CourseTake.js'})
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
