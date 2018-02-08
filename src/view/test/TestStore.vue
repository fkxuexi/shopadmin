<template>
  <div>
      <h1>面包屑导航内容：</h1>
      <ul>
        <li v-for="item in crumbs">{{item}}</li>
      </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
    export default {
        name: "test-store",
        mounted:{
          
        },
        computed:mapState([
          'crumbs'
        ])
    }
</script>

<style scoped>

</style>
