<template>
  <div class="wrapper" append="tree">
    <check-list :options='roomlist' @checklistListener="checkListlisten" :max="1"></check-list>
    <div class="console">
      <text class="txt">点餐房间号：{{whichroom}}</text>
    </div>
  </div>
</template>
<style>
.wrapper {
  width: 750px;
}
.console {
  height: 80px;
  margin-top: 50px;
  margin-bottom: 70px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #aaa;
  border-width: 1px;
  padding-left: 50px;
  justify-content: center;
}
.txt {
  font-size: 48px;
  line-height: 122px;
  text-align: left;
}
</style>

<script>
import {UmsCheckList} from 'ums-comp'
export default {
  components:{
    checkList:UmsCheckList,
  },
  data() {
    return {
      whichroom: "",
      roomlist: this.$store.state.allRooms
    }
  },
  created() {},
  methods: {
    checkListlisten(val) {
      this.whichroom = val.join(',');
      this.$store.commit("changeRoom", val.join(','));
    }
  }
};
</script>
