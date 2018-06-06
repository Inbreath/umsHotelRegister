<template>
  <div class="wrapper" @back='backMethod' append="tree">
     <ums-header
      title="点餐小程序"
      leftPartText="返回"
      rightPartText="更多"
      @onLeftPartClick="leftClick"
      @onRightPartClick="rightClick"
      class="header"
    ></ums-header>
    <router-view class="view"></router-view>
    <div class="footer">
      <div class="footer-item" :class="[isActive(1)]" @click="nav('/',1)">
        <text>桌号</text>
      </div>
      <div class="footer-item" :class="[isActive(2)]" @click="nav('/food',2)">
        <text>点餐</text>
      </div>
      <div class="footer-item" :class="[isActive(3)]" @click="nav('/order',3)">
        <text>下单</text>
      </div>
    </div>
  </div>
</template>

<style>
  .wrapper { 
    width:750px;
  }
  .footer{
    position: absolute;
    bottom: 0;
    background-color: rgb(30,160,246);
    height: 100px;
    width: 750px; 
    flex-direction: row;
	  align-items:center;
  }
  .footer-item{
    flex:1;
    width: 250px;
    height: 100px;
    justify-content:center;
    align-items:center;
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
  import {umsHeader,UmsToast} from 'ums-comp';
  import umsApi from 'ums-api';
  Vue.prototype.umsApi = umsApi;
  import mixins from './mixins';
  Vue.mixin(mixins);

  export default {
    created(){
      this.jump('/');
    },
    components:{
      UmsHeader: umsHeader
    },
    data: {
      index:1,
    },
    methods:{
      isActive:function(indexnow){
        return this.index == indexnow ? 'active' : 'footer-item'
      },
      nav(npath,indexnow){
        console.log(this.$store.state.activeRoom);
        console.log(this.$store.state.activeFood);
        console.log(this.$store.state.activeFood.length);
        if (this.$store.state.activeRoom == '' || this.$store.state.activeRoom == 0){
          UmsToast({
              message:'请选择包厢',
              duration:1000
          })
        }
        else if (npath == '/order' && this.$store.state.activeFood.length == 0){
          UmsToast({
              message:'请点餐',
              duration:1000
          })
        }
        else{
          this.index = indexnow,
          this.jump(npath)
        }
      },
      backMethod() {
        console.log(this.$route.path);
        if (this.$route.path =='/' || this.$route.path =='/room'){
            umsApi.navigator.pop();
        }
        else {
            this.index = 1,
            this.jump('/')
        }
      }
    }
  }
</script>
