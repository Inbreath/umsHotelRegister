<template>
  <div class="wrapper" @back='backMethod' append="tree" background-color = #ccc>
    <ums-header
      title="设置" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>


 <div class="new-item"  style='height:200' >
   <image style='width:500; height:117' src="./logo.png"></image>
</div>
 <div class="new-item"  style='height:100' >
   <text>版本号 1.0.0</text>
   </div>
   <div style="position:relative; background-color:#e0e0e0; height:100px; top:50px; border-width: 2px;  border-color: #ccc; " >
         <div style="position:absolute; left:20; width:400px; height:100px; justify-content: center; " > 版本说明</div>
          <div style="position:absolute; left:650px; width:100px; height:100px; justify-content: center;" >
                   <image style='width:20px; height:30px; left:40px; justify-content: center; ' src="./static/ic_arr.png"></image>
         </div>
    </div>    

     <div style="position:relative; background-color:#e0e0e0; height:100px; top:50px" >
         <div style="position:absolute; left:20; width:400px; height:100px; justify-content: center; " > 版本更新</div>
          <div style="position:absolute; left:650px; width:100px; height:100px; justify-content: center;" >
                   <image style='width:20px; height:30px; left:40px; justify-content: center; ' src="./static/ic_arr.png"></image>
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
     margin-top: 20px;
     align-items: center;
     justify-content: center;
   }
.new-btn-text{
    color: #ccc;    
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
