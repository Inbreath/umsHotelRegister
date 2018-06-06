<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="选择验证方式" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>


     
        <div class="new-btn-group" >
          <div class="new-btn" @click="IDcardRec">
            <text class = "new-btn-text">身份证识别</text>
          </div>
        </div>
       
       <div class="new-btn-group" >
          <div class="new-btn" @click="pwdRec">
            <text class = "new-btn-text">手机号</text>
          </div>
        </div>
        <div class="new-btn-group" >
        <div class="new-btn" @click="bankCardRec">
            <text class = "new-btn-text">银行卡验证</text>
          </div>
       </div>
       <!-- <router-view class="view"></router-view> -->
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
    margin-top: 80px;
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
    margin-top: 50px;
    background-color: #8774E8;
    
    border-radius: 140px;
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
    IDcardRec() {
      //身份证
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
            var name = idCard.name.trim();
            // UmsToast({
            //         message:idCard.number,
            //         duration: 3000
            //       });
            umsApi.storage.setItem("Verificationtype", "1", event => {
              //身份type为1
              umsApi.storage.setItem("password", idCardnumber, event => {
                umsApi.storage.setItem("name", name, event => {
                  umsApi.navigator.push({ url: "NotePage.js" });
                });
              });
            });
          }
        }
      );
    },
    pwdRec() {
      umsApi.navigator.push({ url: "keepPwdPage.js" });
    },
    bankCardRec() {
      umsApi.callTrans(
        {
          appName: "公共资源",
          bizName: "余额查询",
          transData: {}
        },
        ret => {
          console.log("xydi+返回信息:" + ret);
          var result = JSON.parse(ret);
          var transData = result.transData;
          var cardNo = transData.cardNo;
          if (cardNo != null && cardNo != undefined) {
            umsApi.storage.setItem("Verificationtype", "2", event => {
              //余额查询type为2
              umsApi.storage.setItem("password", cardNo, event => {
                umsApi.navigator.push({ url: "NotePage.js" });
              });
            });
          }
        }
      );
    },

    backMethod() {
      umsApi.navigator.push({url: 'photoEnsurePage.js'})
    },
    leftClick(){
      umsApi.navigator.push({url: 'photoEnsurePage.js'})
    }
  }
};
</script>
