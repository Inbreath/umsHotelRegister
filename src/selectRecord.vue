<template>

    <div class="wrapper" append="tree">
        <ums-header
                title="存件记录"
                height="94px"
                @onLeftPartClick="leftClick"
                @onRightPartClick="rightClick"
                class="header"
                backgroundColor="#a327eb">
        </ums-header>
        <div class="color-title">
            <div class="order-item-title">
                <text class="title-text">编号</text>
                <text class="title-text">姓名</text>
                <text class="title-text">更多</text>
            </div>
            <scroller>
                <div v-for="item in this.textqurry" :key="item" class="order-item">
                    <text class="text-no2">{{ item.deposit_id}}</text>
                    <text class="text-no4">{{ item.customer_name }}</text>
                    <div  class="btn-ok" @click="detail(item)">
                        <text class="text-no3" >查看详情</text>
                    </div>

                 
                </div>


            </scroller>

        </div>
    </div>
</template>
<style>
    .wrapper {
        align-items: center;
        /*justify-content: center;*/
        width: 750px;
        height: 1300px;

    }
    .order-item-title {
        margin: 0px 0px 0px 0px;
        padding: 0px 50px 0px 50px;
        background-color: #a327eb;
        width: 750px;
        height: 80px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
         color: #FFFFFF;;
        /*border-bottom: 1px solid black;*/
        /*border-bottom-color: black;*/
        /*border-bottom-width: 1px;*/
    }
    .order-item {
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        width: 750px;
        height: 80px;
        flex-direction: row;
        border-bottom: 1px solid black;
        border-bottom-color: #a327eb;
        border-bottom-width: 1px;
        /*justify-content: space-between;*/
        align-items: center;
    }
    .color-title {
        height: 1210px;


        color: #a327eb;
    }
    title-text {
        width: 300px;
        color: #a327eb;
    }
    .text-no2 {

        width: 240px;
        height: 30px;
        margin-left: 30px;
        text-align: center;
        font-size: 26px;
    }
    .text-no4{

        font-size: 35px;
        margin-left: 70px;
        text-align: center;
        width: 160px;
        height: 50px;
        font-size: 32px;
    }
    .text-no3 {
        font-size: 30px;
        margin-top: 10px;
        border-width: 2px;
        border-color:#a327eb;
        border-style: solid;
        border-radius: 8px;
        width:150px;
        height: 50px;
        margin-left: 80px;
        text-align: center;
    }

</style>

<script>

    import {UmsButton, UmsToast, UmsHeader} from 'ums-comp';
    import umsApi from 'ums-api';
    Vue.prototype.umsApi = umsApi;
    export default {
        components: {
            UmsButton,
            UmsHeader,
            UmsToast
        },
        data() {
            return {
                textqurry:'',
                deposit_date: '',
                deposit_id:'',
                customer_name:''
            }
        },
        created() {
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              this.whichAction = "打开数据库成功";
                umsApi.storage.getItem("starttime", event => {
                    var starttime = event.data;
                        umsApi.storage.getItem("name", event => {
                            var name = event.data;
                            name = '%'+name+'%';
                            umsApi.openDB(ret => {
                            if (ret === null || ret === undefined);
                            this.whichAction = "打开数据库成功";
                            
                            if(name==""){
                                umsApi.executeSql(
                                    "select * from t_deposit where isrefund = '0' and  deposit_date = ? ",
                                    [starttime],
                                    ret => {
                                         console.log("xydi+SQL batch result: " + ret);
                                        var data = JSON.parse(ret.substr(1, ret.length - 2));
                                        umsApi.closeDB(ret => {
                                        if (ret === null || ret === undefined)
                                            console.log("xydi+关闭数据库成功");
                                            if (data.type == "success") {
                                            console.log("xydi+查询成功");
                                            this.textqurry = data.result.rows;
                                            }
                                        });
                                    });
                            }else{
                                umsApi.executeSql(
                                    "select * from t_deposit where isrefund = '0' and  deposit_date = ?  and customer_name like ?",
                                    [starttime,name],
                                    ret => {
                                        console.log("xydi+SQL batch result: " + ret);
                                        var data = JSON.parse(ret.substr(1, ret.length - 2));
                                        umsApi.closeDB(ret => {
                                        if (ret === null || ret === undefined)
                                            console.log("xydi+关闭数据库成功");
                                            if (data.type == "success") {
                                            console.log("xydi+查询成功");
                                            this.textqurry = data.result.rows;
                                            }
                                        });
                                    });
                            }  
                });
            });
            });    
        });
        },
        
        methods: {

            detail(item){   
            var deposit_id = item.deposit_id;
            if (deposit_id != undefined && deposit_id != null) {
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              console.log("xydi+打开数据库成功");
            
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
                      console.log("xydi+" + JSON.stringify(data.result.rows[0]));
                      var deposit = data.result.rows[0];
                                umsApi.storage.setItem("photourl",deposit.photo_url,
                                event => {umsApi.storage.setItem("deposit_id", deposit.deposit_id,
                                    event => {umsApi.storage.setItem("customer_tel",deposit.customer_tel,
                                        event => {umsApi.storage.setItem("customer_name",deposit.customer_name,
                                            event => {umsApi.storage.setItem("remark",deposit.remark,
                                                event => {umsApi.storage.setItem("Verificationtype",deposit.auth_method,
                                                    event => {umsApi.storage.setItem("password",deposit.password,
                                                        event => {umsApi.navigator.push({ url: "photoRecord.js"});
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                    }else{
                       umsApi.navigator.push({url: 'error.js'})
                    }
                  
                });
              });
         
            });
        } 
        },
         backMethod() {
         umsApi.navigator.push({ url: "select.js" });
         },
         leftClick(){
        umsApi.navigator.push({url: 'select.js'})
            }
        }
    };
</script>
