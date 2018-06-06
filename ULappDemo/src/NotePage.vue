<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="设置信息" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="item">
        <text class="title-text" >姓名</text>
        
         <input class="input-text" type="text" placeholder="请输入姓名" v-model.trim="name">

         <text class="title-text" >手机号</text>
        
         <input class="input-text" type="text" placeholder="请输入手机号" value="" v-model="telphone"/>

         <text class="title-text" >备注</text>
 
         <input class="input-text" type="text" placeholder="请输入备注" v-model.trim="remark" style="height:200px">

   
</div>      
       <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">确认打单</text>
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
      telphone: "",
      remark: "",
      name: "",
       index: 1
    }
  },
  created() {
    

    umsApi.openDB(ret => {
      if (ret === null || ret === undefined);
      console.log("xydi+打开数据库成功");
      umsApi.executeSql(
      "CREATE TABLE IF NOT EXISTS t_deposit (deposit_id, customer_tel,customer_name," +
        "photo_url,auth_method,password,deposit_date,deposit_time,isrefund,remark)",
      [],
      ret => {
        console.log("SQL batch result: " + ret);
        umsApi.closeDB(ret => {
      if (ret === null || re === undefined) console.log("xydi+关闭数据库成功");
          umsApi.storage.getItem("Verificationtype", event => {
        var type = event.data;
        if(type=="1"){
           umsApi.storage.getItem("name", event => {
            var name1 = event.data;
            this.name = name1;
          });
        }else if(type=="3"){
           umsApi.storage.getItem("password", event => {
             var password11 = event.data;
             console.log("xydi+获取到的手机号"+password11);
            this.telphone = password11;
            
           });
        }
     });

    });
      }
    );
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
      umsApi.storage.getItem("state", event => {
        var state = event.data;
        console.log("xydi+标志位"+state);
        if(state =="1"){
          umsApi.storage.setItem("state","0",
      event => {
    
      if (this.name == null && this.name == undefined) {
        var name = "";
      } else {
        var name = this.name;
      }
      if (this.telphone == null && this.telphone == undefined) {
        var telphone = "";
      } else {
        var telphone = this.telphone;
        telphone = telphone.substr(0,3)+"****"+telphone.substr(7,4);
      }
      if (this.remark == null && this.remark == undefined) {
        var remark = "";
      } else {
        var remark = this.remark;
      }
      var time = umsApi.getTime("yyyyMMddHHmmss");
      var saveTime=time.substr(0,4)+"-"+time.substr(4,2)+"-"+time.substr(6,2)+" "+time.substr(8,2)+":"+time.substr(10,2)+":"+time.substr(12,2);
      var num = Math.floor(Math.random() * 100);
      num = ("0" + num).substr(-2);
      var deposit_id = time + num;
      var trdate = umsApi.getTime("yyyyMMdd");
      var trtime = umsApi.getTime("HHmmss");
      umsApi.storage.getItem("photourl", event => {
        var photourl = event.data;
        umsApi.storage.getItem("Verificationtype", event => {
          var auth_method = event.data;
          umsApi.storage.getItem("password", event => {
            var password = event.data;
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              console.log("xydi+打开数据库成功1");
           
            console.log("xydi: " + deposit_id+"--"+telphone+"--"+name+"--"+photourl+"--"+auth_method+"--"+password);
            umsApi.executeSql(
              "INSERT INTO t_deposit VALUES (?,?,?,?,?,?,?,?,?,?)",
              [
                deposit_id,
                telphone,
                name,
                photourl,
                auth_method,
                password,
                trdate,
                trtime,
                "0",
                remark
              ],
              ret => {
                console.log("xydiSQL batch result: " + ret);
                var data = JSON.parse(ret.substr(1, ret.length - 2));
                umsApi.closeDB(ret => {
                  if (ret === null || ret === undefined)
                    console.log("xydi+关闭数据库成功1");
                  console.log("xydi+数据库返回的结果1: " + data.type);
                  umsApi.storage.removeItem("photourl", event => {
                    umsApi.storage.removeItem("Verificationtype", event => {
                      umsApi.storage.removeItem("password", event => {
                        if (data.type == "success") {
                          console.log("xydi+插入成功1");
                          let text =
                            "!hz l\n!asc n\n!gray 5\n!barcode 2 64" +
                            "\n*text c 欢迎使用酒店寄存" +
                            "\n*text l 寄存单号:" +
                            deposit_id +
                            "\n*barcode c " +
                            deposit_id +
                            "\n*text l 姓名:" +
                            name +
                            "\n*text l 电话:" +
                            telphone +
                            "\n*text l 备注:" +
                            remark+
                            "\n*text l 寄存时间:" +
                            saveTime+
                            "\n*text c";
                          umsApi.callPrinter(
                            {
                              type: "script",
                              data: text
                            },
                            ret => {
                              console.log("xydi+打印结果" + JSON.stringify(ret));


                              umsApi.callPrinter(
                            {
                              type: "script",
                              data: text
                            },
                            ret => {
                              umsApi.navigator.push({ url: "success.js" });
                            });
                            }
                          );
                        } else {
                          console.log("xydi+插入失败");
                          umsApi.navigator.push({ url: "error.js" });
                        }
                      });
                    });
                  });
                });
              }
            );
          });
        });
      });
      });
       });
      }
      });
    },
    isActive: function(indexnow) {
      return this.index == indexnow ? "active" : "footer-item";
    },

    backMethod() {
      umsApi.navigator.push({ url: "keepWayPage.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'keepWayPage.js'})
    }
  }
};
</script>
