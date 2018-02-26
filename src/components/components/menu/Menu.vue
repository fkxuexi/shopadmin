<template>
  <div>
     <ul v-for="(item ,index) in menuData"  class="menu-content">
       <menu-item :menuItem="item" :index="index"></menu-item>
     </ul>
  </div>
</template>

<script>
  import MenuItem from './MenuItems'
    export default {
    components:{MenuItem},
        name: "menus",
        data(){
          return {
            menuData:[
              {
                "menuId": "1",
                "menuPath": "0-",
                "menuUrl": "",
                "menuName": "系统管理",
                "menuPid": "0",
                "menuIconClass": "fa fa-user",
                "menuLevelPath": "0-1",
                "children": [
                  {
                    "menuId": "2",
                    "menuPath": "0-1-",
                    "menuUrl": "",
                    "menuName": "管理员管理",
                    "menuPid": "1",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-1-2",
                    "children": [
                      {
                        "menuId": "21",
                        "menuPath": "0-1-2-21-",
                        "menuUrl": "/admin/admin/manage",
                        "menuName": "第三级菜单",
                        "menuPid": "1",
                        "menuIconClass": "fa fa-user",
                        "menuLevelPath": "0-1-2-21-"
                      }]
                  },
                  {
                    "menuId": "3",
                    "menuPath": "0-1-",
                    "menuUrl": "/admin/menu/list",
                    "menuName": "菜单管理",
                    "menuPid": "1",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-1-3"
                  },
                  {
                    "menuId": "4",
                    "menuPath": "0-1-",
                    "menuUrl": "/admin/role/list",
                    "menuName": "角色管理",
                    "menuPid": "1",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-1-4"
                  }
                ]
              },
              {
                "menuId": "19",
                "menuPath": "0-",
                "menuUrl": "",
                "menuName": "账户数据管理",
                "menuPid": "0",
                "menuIconClass": "fa fa-user",
                "menuLevelPath": "0-19",
                "children": [
                  {
                    "menuId": "21",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/userinfo",
                    "menuName": "用户列表",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-21"
                  },
                  {
                    "menuId": "24",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/market/entrustlist",
                    "menuName": "今日委托单",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-use",
                    "menuLevelPath": "0-19-24"
                  },
                  {
                    "menuId": "25",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/market/marketlist",
                    "menuName": "今日成交单",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-25"
                  },
                  {
                    "menuId": "26",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/market/consumelist",
                    "menuName": "用户清算记录",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-26"
                  },
                  {
                    "menuId": "34",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/market/hisEntrust",
                    "menuName": "历史委托单",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-34"
                  },
                  {
                    "menuId": "35",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/market/hisDeal",
                    "menuName": "历史成交单",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-35"
                  },
                  {
                    "menuId": "36",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/bankreport",
                    "menuName": "统计报表",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-36"
                  },
                  {
                    "menuId": "38",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/feedback",
                    "menuName": "意见反馈",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-38"
                  },
                  {
                    "menuId": "39",
                    "menuPath": "0-19-",
                    "menuUrl": "/admin/user/account",
                    "menuName": "用户持仓查询",
                    "menuPid": "19",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-19-39"
                  }
                ]
              },
              {
                "menuId": "27",
                "menuPath": "0-",
                "menuUrl": "",
                "menuName": "系统设置",
                "menuPid": "0",
                "menuIconClass": "fa fa-setting",
                "menuLevelPath": "0-27",
                "children": [
                  {
                    "menuId": "20",
                    "menuPath": "0-27-",
                    "menuUrl": "/admin/usersetting",
                    "menuName": "交易设置",
                    "menuPid": "22",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-27-20"
                  },
                  {
                    "menuId": "23",
                    "menuPath": "0-27-",
                    "menuUrl": "/admin/dict/list",
                    "menuName": "字典设置",
                    "menuPid": "27",
                    "menuIconClass": "fa fa-book",
                    "menuLevelPath": "0-27-23"
                  },
                  {
                    "menuId": "28",
                    "menuPath": "0-27-",
                    "menuUrl": "/admin/setting/consumeconfig",
                    "menuName": "每日结算价",
                    "menuPid": "27",
                    "menuIconClass": "fa fa-setting",
                    "menuLevelPath": "0-27-28"
                  },
                  {
                    "menuId": "37",
                    "menuPath": "0-27-",
                    "menuUrl": "/admin/nomarketdate",
                    "menuName": "节假日设置",
                    "menuPid": "27",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-27-37"
                  },
                  {
                    "menuId": "40",
                    "menuPath": "0-27-",
                    "menuUrl": "/admin/announce/list",
                    "menuName": "公告管理",
                    "menuPid": "27",
                    "menuIconClass": "fa fa-user",
                    "menuLevelPath": "0-27-40"
                  }
                ]
              },
              {
                "menuId": "29",
                "menuPath": "0-",
                "menuUrl": "",
                "menuName": "测试组件",
                "menuPid": "0",
                "menuIconClass": "fa fa-setting",
                "menuLevelPath": "0-29",
                "children": [
                  {
                    "menuId": "30",
                    "menuPath": "0-29-",
                    "menuUrl": "/admin/table/test",
                    "menuName": "表格扩展组件",
                    "menuPid": "29",
                    "menuIconClass": "fa fa-setting",
                    "menuLevelPath": "0-29-30"
                  }
                ]
              }
            ]
          }
        },
      mounted:function(){
         /* this.$ajax('/admin/getMenu',(flag,res)=>{
            if (flag){
              console.log(res);
              this.menuData = res.obj;
            }
          })*/
      }

    }
</script>

<style scoped>
  @import "menu.css";
</style>
