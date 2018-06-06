<template>
<div class="wrapper"  append="tree">
<ums-header
      title="存取行李" 
      background-color = #a327eb
      height= "150px"
      class="header">
      <text slot="left"></text> 
      </ums-header>
       <router-view class="view"></router-view>
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
    border-color: #a327eb;
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
    width: 280px;
    height: 280px;
    align-items: center;
    justify-content: center;
    padding: 40px 40px;
    margin-top: 100px;
    background-color: #8774E8;
    
    border-radius: 140px;
    border-width:3px;
    border-color: #a327eb;
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
import { umsHeader } from "ums-comp";
import umsApi from "ums-api";
Vue.prototype.umsApi = umsApi;
import mixins from "./mixins";
Vue.mixin(mixins);


export default {
  created() {
    this.jump("/mainPageEntry");
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1
  },
  methods: {
    
  }
};
</script>
