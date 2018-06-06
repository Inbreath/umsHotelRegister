<template>
  <div class="wrapper" @back='backMethod' append="tree">
    <ums-header
      title="取件" 
      background-color = #a327eb
      height= "150px"
      @onLeftPartClick="leftClick"
      class="header">
      </ums-header>

<div class="item">
        <text class="title-text" >编号</text>
        
         <input class="input-text" type="text" placeholder="请输入单据上的订单号" v-model.trim="deposit">
 
</div>      
       <div class="new-btn-group" >
          <div class="new-btn" @click="start">
            <text class = "new-btn-text">确认</text>
          </div>
        </div>
        <div class="new-btn-group" >
          <div class="new-btn" @click="code">
            <text class = "new-btn-text">扫码</text>
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
      deposit: ""
    };
  },
  created() {},

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

    start() {
      if (this.deposit != undefined && this.deposit != null) {
        umsApi.openDB(ret => {
          if (ret === null || ret === undefined);
          console.log("xydi+打开数据库成功");
        });
        umsApi.executeSql(
          "select * from t_deposit where isrefund = '0' and deposit_id = ?",
          [this.deposit],
          ret => {
            console.log("xydi+SQL batch result: " + ret);
            var data = JSON.parse(ret.substr(1, ret.length - 2));
            umsApi.closeDB(ret => {
              if (ret === null || ret === undefined)
                console.log("xydi+关闭数据库成功");
              if (data.type == "success") {
                console.log("xydi+查询成功");
                var content = JSON.stringify(data.result);
                console.log("xydi+" + content);
                if (content == "{}") {
                  umsApi.navigator.push({ url: "nothing.js" });
                } else {
                  console.log("xydi----" + JSON.stringify(data.result.rows[0]));
                  // var deposit = JSON.parse(data.result);

                  var deposit = data.result.rows[0];
                  console.log("xydi+验证方式:" + deposit.auth_method);
                  console.log("xydi+密码" + deposit.password);
                  console.log("xydi+图片路径" + deposit.photo_url);
                  // var deposit = JSON.parse(data.result.rows);

                  umsApi.storage.setItem(
                    "Verificationtype",
                    deposit.auth_method,
                    event => {
                      umsApi.storage.setItem(
                        "password",
                        deposit.password,
                        event => {
                          umsApi.storage.setItem(
                            "photourl",
                            deposit.photo_url,
                            event => {
                              umsApi.storage.setItem(
                                "deposit_id",
                                deposit.deposit_id,
                                event => {
                                  umsApi.storage.setItem(
                                    "customer_tel",
                                    deposit.customer_tel,
                                    event => {
                                      umsApi.storage.setItem(
                                        "customer_name",
                                        deposit.customer_name,
                                        event => {
                                          umsApi.storage.setItem(
                                            "remark",
                                            deposit.remark,
                                            event => {
                                              umsApi.navigator.push({
                                                url: "Tphoto.js"
                                              });
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              } else {
                onsole.log("xydi+查询失败");
                UmsToast({
                  message: "订单号输入错误",
                  duration: 3000
                });
              }
            });
          }
        );
      }
    },
    code() {
      umsApi.scanCode(
        {
          camera: "back",
          bizID: 99999000
        },
        ret => {
          console.log("xydi+扫码结果 = " + ret);
          var deposit_id = ret;

          if (deposit_id != undefined && deposit_id != null) {
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              console.log("xydi+打开数据库成功");
            });
            umsApi.executeSql(
              "select * from t_deposit where isrefund = '0' and deposit_id = ?",
              [deposit_id],
              ret => {
                console.log("xydi+SQL batch result: " + ret);
                var data = JSON.parse(ret.substr(1, ret.length - 2));
                umsApi.closeDB(ret => {
                  if (ret === null || ret === undefined)
                    console.log("xydi+关闭数据库成功");
                  if (data.type == "success") {
                    console.log("xydi+查询成功");
                    var content = JSON.stringify(data.result);
                    console.log("xydi+" + content);
                    if (content == "{}") {
                      umsApi.navigator.push({ url: "nothing.js" });
                    } else {
                      var deposit = data.result.rows[0];
                      console.log("xydi+验证方式:" + deposit.auth_method);
                      console.log("xydi+密码" + deposit.password);
                      console.log("xydi+图片路径" + deposit.photo_url);
                      // var deposit = JSON.parse(data.result.rows);

                      umsApi.storage.setItem("Verificationtype",deposit.auth_method,
                        event => {umsApi.storage.setItem("password",deposit.password,
                            event => {umsApi.storage.setItem("photourl",deposit.photo_url,
                                event => {umsApi.storage.setItem("deposit_id", deposit.deposit_id,
                                    event => {umsApi.storage.setItem("customer_tel",deposit.customer_tel,
                                        event => {umsApi.storage.setItem("customer_name",deposit.customer_name,
                                            event => {umsApi.storage.setItem("remark",deposit.remark,
                                                event => {umsApi.navigator.push({ url: "Tphoto.js"});
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    }
                  } else {
                    onsole.log("xydi+查询失败");
                    UmsToast({
                      message: "订单号输入错误",
                      duration: 3000
                    });
                  }
                });
              }
            );
          }
        }
      );
    },

    backMethod() {
      umsApi.navigator.push({ url: "index.js" });
    },
    leftClick(){
      umsApi.navigator.push({url: 'index.js'})
    }
  }
};
</script>
