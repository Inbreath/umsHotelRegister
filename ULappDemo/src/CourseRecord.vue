<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="使用说明-查看" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>


 <div class="new-btn-group" >
 <div class="console" style="height:900;">
        <div class="new-item-group">
          <text class="title-text" >查看流程:</text>
          <text class="title-text" >1.点击主界面的查看未取记录按钮，系统会进入到填入存件记录的页面，该页面保存了所有未取的记录，可以通过点击查看详情进行查看物品信息。
          </text>
          <text class="title-text" >2.在存件记录页面，也可以通过点击右上角的查询按钮，进行记录查询。在查询页面，输入姓名，寄存日期，可以查看满足条件的记录。
            其中姓名支持模糊查询，也可以不填，寄存日期必须填。
          </text>
          <text class="title-text" >3.若顾客丢失小票，也可以通过该页面进行取件，在查看详情里，确认信息后，点击取件，完成验证后也可以取件
          </text>
          <text class="title-text" >4.如果顾客无法完整验证，则可以通过其他途径证明身份(如说出存件的具体内容)，在验证后，可以通过查看详情的右上角的删除按钮，将该条记录删除
          </text>
        </div>
</div>
</div>


   <div class="new-btn-group" >
          <div class="btn" @click="previouspage">
            <text class = "btn-text">上一页</text>
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
    previouspage(){
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
