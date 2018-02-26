<template>
  <div class="body-warp">
    <top-bar :user="user"></top-bar>
    <div class="body-content">
      <menus class="menu" :style="{height:height+'px'}"></menus>
      <sk-row>
        <sk-col :span="12">
          <nav-bar></nav-bar>
          <div class="main-content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </sk-col>
      </sk-row>
    </div>
  </div>
</template>

<script>
  import TopBar from '../topbar/TopBar'
  import NavBar from '../navbar/NavBar'
  import SkRow from '../../lib/layout/Row'
  import SkCol from '../../lib/layout/Col'
  import Menus from '../menu/Menu'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "main-body",
    components: {
      TopBar, NavBar, SkRow, SkCol,Menus
    },
    computed: mapState([
      'user'
    ]),
    data() {
      return {
        height: 400,
      }
    },
    mounted() {
      this.height = (window.innerHeight) - 60;
      window.onresize = () => {
        this.height = (window.innerHeight) - 60;
      }
    }

  }
</script>

<style scoped>
  @import "MainBody.css";
</style>
