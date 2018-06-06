<template>
  <div class="wrapper" append="tree">
    <div class="title">
      <div><text>房间号{{ $store.state.activeRoom }}</text><text>总计：{{ sum }}元</text></div>
      <ums-button class="btn" type="warning" value="打印订单" size="middle" @click.native="print"></ums-button>
      <ums-button class="btn" type="success" value="发起支付" size="middle" @click.native="pay"></ums-button>
    </div>
    <div class="order-item-title">
      <text>菜品名</text>
      <text>价格</text>
    </div>
    <scroller>
    <div v-for="item in $store.state.activeFood" class="order-item">
      <text>{{ item.label }}</text>
      <text>{{ item.price }}元</text>
    </div>
    <div class="showresult">
      <text>{{ payresult }}</text>
    </div>
    <div class="blank"></div>
    </scroller>
  </div>
</template>

<style>
  .wrapper { width:750px;height:1300px;}
  .blank {
    width: 750px;
    height: 200px;
  }  
  .title {
    margin-top:50px;
    width:750px;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
  }
  .order-item-title{
    margin:50px 100px 20px 100px;
    width:550px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    border-bottom:1px solid black;
    border-bottom-color: black;
    border-bottom-width: 1px;
  }
  .order-item{
    margin:0px 100px 0 100px;
    width:550px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
  }
  .showresult{
    background-color: #C0C0C0;
    width:750px;
    min-height:100px;
  }
</style>

<script>
import {UmsButton,UmsToast} from 'ums-comp';
  export default {
    components: {
      UmsButton
    },
    data () {
      return {
        sum:0,
        payresult:''
      }
    },
    created () {
      for (let item of this.$store.state.activeFood){
        this.sum = this.sum + item.price;
      }
    },
    methods: {
      print(){
        let text = '!hz l\n!asc l\n*text c 包厢'+this.$store.state.activeRoom+'总计消费'+this.sum;
        this.umsApi.callPrinter(text,
        (ret)=>{
          console.log('打印结果' + JSON.stringify(ret))
        })
      },
      pay(){
        console.log('开始付款:'+this.sum*100);
        this.umsApi.callTrans({
            appName: '全民惠',
            bizName: '消费',
            transData:{amt: this.sum*100},
            },
            (ret)=>{
              console.log(ret);
              console.log(JSON.stringify(ret));
              this.payresult = ''+JSON.stringify(ret);
            })
      }
    }
  }
</script>
