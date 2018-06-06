<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="查询记录" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="item">
        <text class="title-text" >姓名</text>
        
         <input class="input-text" type="text" placeholder="请输入姓名(支持模糊查询)" v-model.trim="name">

         <text class="title-text" >寄存日期</text>
        
         <input class="input-text" type="text" placeholder="请输入寄存日期（例如20180101）" v-model.trim="starttime"/>

   
</div>      
       <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">查询</text>
          </div>
        </div>
        <!-- <div class="new-btn-group" >
        <div class="new-btn" @click="start">
            <text class = "new-btn-text">存放记录</text>
          </div>
       </div> -->
       <!-- <router-view class="view"></router-view> -->
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
  border-color: #979797;
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
  border-color: #aaa;
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
  border-color: #aaa;
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
import { UmsButton, UmsToast } from "ums-comp";
import { umsHeader } from "ums-comp";
import umsApi from "ums-api";

export default {
  data() {
    return {
      starttime: "",
      name: "",
       index: 1
    }
  },
  created() {
    var trdate = umsApi.getTime("yyyyMMdd");
    this.starttime = trdate;
    umsApi.openDB(ret => {
      if (ret === null || ret === undefined);
      console.log("xydi+打开数据库成功");
    });
    umsApi.executeSql(
      "CREATE TABLE IF NOT EXISTS t_deposit (deposit_id, customer_tel,customer_name," +
        "photo_url,auth_method,password,deposit_date,deposit_time,isrefund,remark)",
      [],
      ret => {
        console.log("xydi+SQL batch result: " + ret);
      }
    );
    umsApi.closeDB(ret => {
      if (ret === null || ret === undefined) console.log("xydi+关闭数据库成功");
    });
  },

  components: {
    UmsHeader: umsHeader
  },

  methods: {
    leftClick() {
      umsApi.navigator.pop();
    },

    start() {
      if(this.starttime==''){
        var mess="寄存时间不能为空";
           UmsToast({
                    message:mess,
                    duration: 3000
                  });
      }
        umsApi.storage.setItem("starttime",this.starttime,event => {
                umsApi.storage.setItem("name",this.name,event => {
                  umsApi.navigator.push({ url: "selectRecord.js"});
              });
          });

    },
    backMethod() {
      umsApi.navigator.push({ url: "depositRecord.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'depositRecord.js'})
    }
  }
};
</script>
