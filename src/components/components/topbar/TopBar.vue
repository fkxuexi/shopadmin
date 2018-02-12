<template>
  <div class="top-bar">
    <router-link class="brand link" to="#">
      <i class="fa fa-fire fa-lg"></i>
      Java 后台管理系统
    </router-link>
    <ul class="top-menu">
      <li>
        <router-link class="link" to="">
          <i class="fa fa-reorder fa-fw"></i>
          <span>未发货单</span>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="">
          <i class="fa fa-bell fa-fw"></i>
          <span>公告</span>
        </router-link>
      </li>
      <li class="user-item" @click="fadein()">
        <router-link class="link" to="">
          <img class="user"
               src="http://thirdwx.qlogo.cn/mmopen/vi_32/ibn9BNqKrfOIRwWqubwhyoibAT3DbK8JIICQhzaCuVS9cjh2lNe7V2vlTkUGa7se2GcIAywkR44q5uoI7veJQulA/132"
               alt="">
          <span>{{user}}</span>
          <i class="fa fa-sort-desc"></i>
          <transition name="slide-fade">
            <dl class="user-dialog" v-show="show">
              <dd>
                <router-link class="link item" to="/store">
                  <i class="fa fa-vcard fa-fw"></i>
                  <span>个人资料</span>
                </router-link>
              </dd>
              <dd>
                <router-link class="link item"  @click="logout" to="/">
                  <i class="fa fa-power-off fa-fw"></i>
                  <span>退出登录</span>
                </router-link>
              </dd>
            </dl>
          </transition>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "top-bar",
    props:['user'],
    data() {
     return{
       show:false
     }
    },
    mounted: function () {
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
            this.show = false;
        }
      })
    },
    methods:{
      logout(){

      },
      fadein(){
        this.show = !this.show;
      }
    }

  }
</script>

<style scoped>
  @import "TopBar.css";
</style>
