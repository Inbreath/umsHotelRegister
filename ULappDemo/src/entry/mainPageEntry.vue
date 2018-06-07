<template>
  <div class="wrapper" @back='backMethod' append="tree">
  <div style="position:relative; left:0px; background-color:#ffffff; height:736px; width:800;" ></div> 
  
  <div style="position:absolute; left:0px; top:0px; background-color:#a327eb; width:800px; height:140px"></div> 
<!-- border-width: 5px; border-radius: 20px; -->
  <div style="position:absolute; left:50px; top:0px; border-width: 2px; border-radius: 20px; border-color: #ccc; background-color:#ffffff; width:658px; height:736px" >
     
     <div class="btn-group" >
              <div v-for="item in $store.state.keepImage" class="title" @click="keep">
                  <img style='width:250; height:250;' :src="item.url"/>
              </div>
             <text class = "title">存件</text>
                <div v-for="item in $store.state.takeImage" class="title" @click="take">
                  <img style='width:250; height:250;' :src="item.url"/>
              </div>

          <text class = "title">取件</text>
        </div>
    </div> 
        <!-- <div class="new-btn-group" style="top:30px">
              <div v-for="item in $store.state.recordImage" class="title" @click="start">
                  <img style='width:660px; height:98px;' :src="item.url"/>
              </div>
       </div>
       <div class="new-btn-group" >
              <div v-for="item in $store.state.usageImage"  @click="course">
                  <img style='width:660px; height:98px;' :src="item.url"/>
              </div>
       </div>    -->
        <div class="new-btn-group"  style="margin-top: 80px;" >
        <div class="new-btn" @click="start" style="background-color:#a327eb;">
            <text class = "new-btn-text" style="color:#ffffff">查看寄存记录</text>
          </div>
       </div>
       <div class="new-btn-group" style="margin-top: 20px;">
        <div class="new-btn" @click="course" style="background-color:#ffffff;">
            <text class = "new-btn-text" style="color:#a327eb">使用说明</text>
          </div>
       </div>
  </div>
</template>

<style>
  .food-item{
    border-color: black;
    border-width: 1px;
    border-radius: 50px;
    margin: 20px 20px 0 20px;
    padding:0 15px 0 15px;
  }
    .title {
    flex-direction: row;
    align-items:center;
  }

.bg-image{
  width: 240px;
  height: 240px;
}
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
    width: 660px;
    height: 98px;
    justify-content: center;
    align-items: center;
    /* padding: 20px 40px;
    margin-top: 50px; */
    
    border-radius: 50px;
    border-width:3px;
    border-color: #a327eb;
    border-style: solid ; 
  }
  .new-btn-group{
    justify-content: center;
    flex-direction: row;
  }
  .btn-group{
    height: 736px;
    width: 658px;
    
    align-items: center;
    justify-content: center;
  }
  .btn{
    width: 240px;
    height: 240px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: white;
    
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
      imgUrl:'./static/keep.png'
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
