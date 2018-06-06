<template>
  <div class="wrapper" append="tree">
  <scroller>
    <div v-for="item in $store.state.allFoods"  class="food-item">
      <text>菜品名称：{{ item.label }}</text>
      <text>价格：{{ item.price }}元</text>

      <div class="title">
      <image style='width:150; height:150;' :src="item.url"/></image>
       <div class="btn-group">
          <div class="btn" @click="setfood(item.label,item.price)">
            <text>-</text>
          </div>
          <text>{{ item.price }}份</text>
          <div class="btn" @click="setfood(item.label,item.price)">
            <text>+</text>
          </div>
        </div>
      </div>

    </div>
    <div class="blank"></div>
  </scroller>
  </div>
</template>

<style>
  .wrapper { width:750px;height:1200px;}
  .food-item{
    border-color: black;
    border-width: 1px;
    border-radius: 50px;
    margin: 20px 20px 0 20px;
    padding:0 15px 0 15px;
  }
  .blank {
    width: 750px;
    height: 200px;
  }
  .btn-group{
    flex-direction: row;
  }
  .btn{
    padding: 20px 40px;
    margin: 20px;
    background-color: orange;
    border-width:1px;
    border-color: #ccc;
    border-style: solid ;
  }
  .btn-text{
    color: #333;
  }
    .title {
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      setfood (label,price) {
        console.log(this.$store.state.allFoods[0].url);
        let fo = {'label':label,'price':price};
        this.$store.commit('setFood', fo)
      }
    }
  }
</script>
