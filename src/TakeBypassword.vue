<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="验证界面" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="item">
        <text class="title-text" >手机号</text>
        
         <input class="input-text" type="text" placeholder="请输入手机号" v-model.trim="pwd" >
 
</div>      
       <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">确认</text>
          </div>
        </div>
  </div>
</template>

<style>
.title-text {
  color: #000;
}
.item {
  margin: 20px;
  padding: 10px;
  margin-left: 20px;
  border-bottom: 2px solid #ddd;
}
.input-text {
  align-items: center;
  margin: 20px 0 20px 0;
  padding: 20px 20px;
  color: #333333;
  width: 660px;
  height: 80px;
  border-width: 2px;
  border-color: #a327eb;
  border-style: solid;
  /*justify-content: space-between;*/
}
.console {
  height: 80px;
  width: 700ps;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #a327eb;
  border-width: 1px;
  padding-left: 50px;
}
.console-plus {
  height: 240px;
  width: 700ps;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #a327eb;
  border-width: 1px;
  padding-left: 50px;
}
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
  background-color: #a327eb;

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
  background-color: #a327eb;

  border-radius: 140px;
  border-width: 1px;
  border-color: #a327eb;
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
    index: 1,
    password: ""
  },
  methods: {
    start() {
      umsApi.storage.getItem("deposit_id", event => {
        var deposit_id = event.data;
        umsApi.storage.getItem("password", event => {
          var password = event.data;
          if (this.pwd == password) {
            console.log("xydi+验证成功");
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              console.log("xydi+打开数据库成功");
            });
            umsApi.executeSql(
              "update  t_deposit set isrefund = '1' where deposit_id = ?",
              [deposit_id],
              ret => {
                console.log("SQL batch result: " + ret);
                var data = JSON.parse(ret.substr(1, ret.length - 2));
                umsApi.closeDB(ret => {
                  if (ret === null || ret === undefined)
                    console.log("xydi+关闭数据库成功");
                  if (data.type == "success") {
                    umsApi.navigator.push({ url: "Tsuccess.js" });
                  } else {
                    console.log("xydi+系统异常");
                    umsApi.navigator.push({ url: "error.js" });
                  }
                });
              }
            );
          } else {
            console.log("xydi+验证失败");
            umsApi.navigator.push({ url: "fail.js" });
          }
        });
      });
    },

    backMethod() {
     umsApi.navigator.push({ url: "Tphoto.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'Tphoto.js'})
    }
  }
};
</script>
