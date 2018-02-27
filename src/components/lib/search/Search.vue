<template>
  <div class="search-area">
    <fieldset>
      <legend class="title">搜索</legend>
      <div class="search">
        <sk-input prefix="user" suffix="search" />
      </div>
    </fieldset>
  </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
@import "Search.css";
</style>
