<template>
  <nav>
    <ul class="nav-list">
      <li class="nav-item ">
        <router-link class="link" to="/auth/store">
          <i class="fa fa-home"></i>
          后台首页
        </router-link>
      </li>
      <li class="nav-item current">
        <router-link class="link" to="/auth/ajax">
          <i class="fa fa-book"></i>
          文章列表
          <i class="fa fa-close"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="link" to="/">
          <i class="fa fa-book"></i>
          会员列表
          <i class="fa fa-close"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>
@import "NavBar.css";
</style>
