<template>

    <div class="wrapper" append="tree">
        <ums-header
                title="存件记录"
                height= "150px"
                @onLeftPartClick="leftClick"
                @onRightPartClick="rightClick"
                class="header"
                backgroundColor="#a327eb">
        </ums-header>
        <div style="position:relative; left:0px; background-color:#fff; height:110px; width:800;" ></div> 
        <div style="position:absolute; left:0px; top:140px; background-color:#a327eb; height:60px; width:800px;"></div>
        <div style="position:absolute; left:45px; top:140px; border-width: 2px; border-radius: 20px; border-color: #ccc; background-color:#ffffff; width:660px; height:105px" >
        
        <div style="position:relative; left:0px; background-color:#ffffff; height:100px; width:660;" ></div> 
        <div style="position:absolute; left: 0px; top:25px; width:100px; height: 100px;">
                  <image style="left: 20px; width:50px; height: 50px;" src="./static/search.png"></image>
        </div>
        <div style="position:absolute; left:110px; top:0px; width:250px; height: 100px;">
                  <input style=" width:250px; height: 100px;" placeholder="请输入查询内容！" autofocus=false />
        </div>
        <div style="position:absolute; left:520px; top:25px; width:100px; height: 100px;"  >
                 <text style="width:100px; height: 100px; font-size:50px; color:#a327eb;" @click="keep" >查询</text>
        </div>      
        </div> 

         <div style="position:relative; left:0px; top:32px; background-color:#fff; border-width: 2px; border-radius: 20px; border-color: #ccc;height:950px; width:660;" >
              

              <div style="position:absolute; left:5px; top:8px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名一</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>

              <!-- top:158px;308px;458px;608px;758px; 需要在下面这行中进行设置 -->
              <div style="position:absolute; left:5px; top:158px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名三</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>
              <div style="position:absolute; left:5px; top:308px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名四</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>
              <div style="position:absolute; left:5px; top:458px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名五</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>
              <div style="position:absolute; left:5px; top:608px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名六</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>
              <div style="position:absolute; left:5px; top:758px; background-color:#fff; width:650px; height:150px" >
              <div style="position:relative; left:0px; background-color:#fff; height:150px; width:650px;" >
              <div style="position:absolute; left:40px; top:20px;  width:100px; height:100px" >
                   <image style='width:100; height:100; left:0px; top:0px;' src="./static/icon_record.png"></image>
              </div>
               <div style="position:absolute; left:150px; top:20px; background-color:#fff; width:400px; height:100px" >
                   <text style="font-size:40px; color:#ccc;"> 用户名七</text>
                   <text style="font-size:40px; color:#ccc;"> 123456789</text>
              </div>
              <div style="position:absolute; left:560px; top:20px;  width:100px; height:100px" >
                   <image style='width:20; height:30; left:20px; top:30px;' src="./static/ic_arr.png"></image>
              </div></div></div>

              
   
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
.bg{
    /* position: absolute; */
    top:  25px;
    bottom: 0;
    width:100px;
    height: 100px;
}
.bg-image{
    width:50px;
    height: 50px;
}
.new-btn-text{
    color: #a327eb;    
    justify-content: center;
  }
  .btn-group{
    height: 80px;
    width: 80px;
    
    align-items: center;
    justify-content: center;
  }
.title {
    flex-direction: row;
    align-items:center;
  }
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
                customer_name:'',
                righttext:'查询'
            }
        },
        created() {
            umsApi.openDB(ret => {
              if (ret === null || ret === undefined);
              this.whichAction = "打开数据库成功";
            
             umsApi.executeSql(
              "select * from t_deposit where isrefund = '0' ",[],
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
                      console.log("xydi----" + JSON.stringify(data.result.rows[0]));
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
        select(){
            umsApi.navigator.push({ url: "select.js" });
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
