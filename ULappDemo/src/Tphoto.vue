<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="取件" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="new-btn-group" >
        <image class = "new-item" style="width:500; height:400;" :src = "photourl1"/> </image>
</div>
 <div class="new-btn-group" >
 <div class="console" style="height:400;">
        <div class="new-item-group">
          <text class="title-text" >姓名:{{name}}</text>
         
          <text class="title-text"  >电话:{{tel}}</text>
  
          <text class="title-text" >备注:{{remark}}</text>

          <text class="title-text" >存件时间:{{savetime}}</text>
   
        </div>
</div>
</div>


   <div class="new-btn-group" >
          <div class="btn" @click="lookPhoto">
            <text class = "btn-text">确认取件</text>
          </div>
 </div>
       
       <!-- <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">人员管理</text>
          </div>
        </div>
        <div class="new-btn-group" >
        <div class="new-btn" @click="start">
            <text class = "new-btn-text">存放记录</text>
          </div>
       </div> -->
       <!-- <router-view class="view"></router-view> -->
       
  </div>
</template>

<style>
  .console {
  height: 300px;
  width: 600px;
  margin-top: 50px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: #a327eb;
  border-width: 1px;
  padding-left: 50px;
  justify-content: center;
}
 .new-btn-group{
    justify-content: center;
    margin-top: 50px;
    flex-direction: row;
  }
 .btn-group{
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
.new-item{
     align-items: center;
     justify-content: center;
   }
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
    background-color: #a327eb;
    
    border-radius: 10px;
    border-width:1px;
    border-color: #ccc;
    border-style: solid ; 
  }
  .new-btn-group{
    justify-content: center;

    flex-direction: row;
  }
  .btn{
    width: 550px;
    height: 70px;
    align-items: center;
    justify-content: center;
    padding: 40px 40px;
    margin-top: 20px;
    background-color: #a327eb;
    
    border-radius: 10px;
    border-width:1px;
    border-color: #ccc;
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
import { UmsButton, UmsToast } from "ums-comp";
import { umsHeader } from "ums-comp";
import umsApi from "ums-api";

export default {
  created() {
    umsApi.storage.getItem("photourl", event => {
      var photourl = event.data;
      console.log("xydi+图片路径: " + photourl);
      this.photourl1 = "file://.." + photourl;
      umsApi.storage.getItem("customer_name", event => {
        var customer_name = event.data;
        this.name = customer_name;
        console.log("xydi+顾客姓名: " + customer_name);
        umsApi.storage.getItem("customer_tel", event => {
          var customer_tel = event.data;
          this.tel = customer_tel;
          console.log("xydi+顾客电话: " + customer_tel);
          umsApi.storage.getItem("remark", event => {
            var remark = event.data;
            this.remark = remark;
            console.log("xydi+备注: " + remark);
            umsApi.storage.getItem("deposit_id", event => {
              var time = event.data;
              this.savetime = time.substr(0,4)+"-"+time.substr(4,2)+"-"+time.substr(6,2)+" "+time.substr(8,2)+":"+time.substr(10,2)+":"+time.substr(12,2);
            });
          });
        });
      });
    });
  },

  components: {
    UmsHeader: umsHeader
  },
  data: {
    index: 1,
    photourl1: "",
    name: "",
    tel: "",
    remark: "",
    savetime:""
  },
  methods: {
    lookPhoto() {
      umsApi.storage.getItem("deposit_id", event => {
        var deposit_id = event.data;
        console.log("xydi+订单号" + deposit_id);
        umsApi.storage.getItem("Verificationtype", event => {
          var Verificationtype = event.data;
          console.log("xydi+验证方式" + Verificationtype);
          umsApi.storage.getItem("password", event => {
            var password = event.data;
            console.log("xydi+密码" + password);
            if (Verificationtype == "1") {
              umsApi.callApps(
                {
                  pkgName: "com.umszjpay.verification",
                  activity: "com.umszjpay.verification.MainActivity",
                  transData: {
                    transType: 1002,
                    transData: {
                      isNeedVerify: false
                    }
                  }
                },
                ret => {
                  var result = JSON.parse(ret);
                  var data = JSON.parse(result.data);
                  var idCard = JSON.parse(data.idCardString);
                  if (idCard != null && idCard != undefined) {
                    var idCardnumber = idCard.number.trim();
                    if (idCardnumber == password) {
                      console.log("xydi+验证成功");
                      umsApi.openDB(ret => {
                        if (ret === null || ret === undefined);
                        console.log("xydi+打开数据库成功");
                      });
                      umsApi.executeSql(
                        "update  t_deposit set isrefund = '1' where deposit_id = ?",
                        [deposit_id],
                        ret => {
                          console.log("xydi+SQL batch result: " + ret);
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
                  }
                }
              );
            } else if (Verificationtype == "2") {
              umsApi.callTrans(
                {
                  appName: "公共资源",
                  bizName: "余额查询",
                  transData: {}
                },
                ret => {
                  var result = JSON.parse(ret);
                  var transData = result.transData;
                  if (transData != null && transData != undefined) {
                    var cardNo = transData.cardNo;
                    if (cardNo == password) {
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
                  }
                }
              );
            } else {
              umsApi.storage.setItem("deposit_id", deposit_id, event => {
                umsApi.storage.setItem("password", password, event => {
                  umsApi.navigator.push({ url: "TakeBypassword.js" });
                });
              });
            }
          });
        });
      });
    },
    cancle() {
       umsApi.navigator.push({url: 'Tdepositid.js'})
    },
    leftClick(){
      umsApi.navigator.push({url: 'Tdepositid.js'})
    }
  }
};
</script>
