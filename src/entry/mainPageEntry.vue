<template>
  <div class="wrapper" @back='backMethod' append="tree">
        <div class="btn-group" >
          <div class="btn" @click="keep">
            <text class = "btn-text">存件</text>
          </div>
          <div class="btn" @click="take">
            <text class = "btn-text">取件</text>
          </div>
        </div>
       
    
        <div class="new-btn-group" >
        <div class="new-btn" @click="start">
            <text class = "new-btn-text">查看未取记录</text>
          </div>
       </div>
       <div class="new-btn-group" >
        <div class="new-btn" @click="course">
            <text class = "new-btn-text">使用说明</text>
          </div>
       </div>
       <!-- <router-view class="view"></router-view> -->
  </div>
</template>

<style>
.new-item{
     padding-left: 20px;
     align-items: center;
     justify-content: center;
   }
.new-btn-text{
    color: #a327eb;    
    justify-content: center;
  }
  .new-btn{
    width: 600px;
    height: 150px;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    margin-top: 100px;
    
    border-radius: 10px;
    border-width:4px;
    border-color: #ccc;
    border-style: solid ; 
  }
  .new-btn-group{
    justify-content: center;

    flex-direction: row;
  }
  .btn-group{
    flex-direction: row;
    justify-content: center;
  }
  .btn{
    width: 240px;
    height: 240px;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    
    border-radius: 120px;
    border-width:4px;
    border-color: #ccc;
    border-style: solid ; 
  }
   .btn-text{
    color: #a327eb;
    
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
  import {UmsButton, UmsToast} from 'ums-comp';
  import {umsHeader} from 'ums-comp';
  import umsApi from 'ums-api';
  Vue.prototype.umsApi = umsApi;

  export default {
    created(){
      // this.jump('/food');
    },
 
    components:{
      UmsHeader: umsHeader
    },
    data: {
      index:1,
    },
    methods:{
      leftClick() {
        umsApi.navigator.pop();
      },
      keep() {
        umsApi.camera.captureImage(
          ret=>{ 
          console.log(  'xydi+result: ' +JSON.stringify(  ret )) 

          //this.whichAction ="1:"+"-2:"+JSON.stringify(ret)+"-3:"+ret;
          //var result = JSON.stringify(ret);
          if(ret!=""&&ret!=null){
             var path = ret.path;
             umsApi.storage.setItem('photourl', path, event => {
               console.log(  'xydi+图片: ' +path) 
               umsApi.navigator.push({url: 'photoEnsurePage.js'})
             })
          }else{
            umsApi.navigator.push({url: 'index.js'})
          }
          } 

        ) 

         //umsApi.navigator.push({url: 'photoTakePage.js'})
      },
      start(){
        umsApi.navigator.push({url: 'depositRecord.js'})
      },
      take() {
         umsApi.navigator.push({url: 'Tdepositid.js'})
      },
      course(){
          umsApi.navigator.push({url: 'CourseSave.js'})
    }
  }
}
</script>
