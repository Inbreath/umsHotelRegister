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
            <text class = "new-btn-text">人员管理</text>
          </div>
        </div>
        <div class="new-btn-group" >
        <div class="new-btn" @click="start">
            <text class = "new-btn-text">存放记录</text>
          </div>
       </div>
       <!-- <router-view class="view"></router-view> -->
  </div>
</template>

<style>
.new-btn-text {
  color: #ffffff;
  justify-content: center;
}
.new-btn {
  width: 600px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin-top: 100px;
  background-color: #8774e8;

  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;
}
.new-btn-group {
  justify-content: center;

  flex-direction: row;
}
.btn-group {
  flex-direction: row;
  justify-content: center;
}
.btn {
  width: 280px;
  height: 280px;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  margin-top: 100px;
  background-color: #8774e8;

  border-radius: 140px;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;
}
.btn-text {
  color: #ffffff;

  justify-content: center;
}
.wrapper {
  width: 750px;
}
.active {
  flex: 1;
  width: 250px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: green;
}
.test {
  background: #fff;
}
</style>

<script>
import { umsHeader } from "ums-comp";
import umsApi from "ums-api";
Vue.prototype.umsApi = umsApi;

export default {
  created() {
    // this.jump('/food');
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1
  },
  methods: {
    leftClick() {
      umsApi.navigator.pop();
    },
    take() {
      this.jump("/food");
    },
    isActive: function(indexnow) {
      return this.index == indexnow ? "active" : "footer-item";
    },
    nav(npath, indexnow) {
      console.log(this.$store.state.activeRoom);
      console.log(this.$store.state.activeFood);
      console.log(this.$store.state.activeFood.length);
      if (
        this.$store.state.activeRoom == "" ||
        this.$store.state.activeRoom == 0
      ) {
        UmsToast({
          message: "请选择包厢",
          duration: 1000
        });
      } else if (
        npath == "/order" &&
        this.$store.state.activeFood.length == 0
      ) {
        UmsToast({
          message: "请点餐",
          duration: 1000
        });
      } else {
        (this.index = indexnow), this.jump(npath);
      }
    },
    backMethod() {
      console.log(this.$route.path);
      if (this.$route.path == "/" || this.$route.path == "/room") {
        umsApi.navigator.pop();
      } else {
        (this.index = 1), this.jump("/");
      }
    }
  }
};
</script>
