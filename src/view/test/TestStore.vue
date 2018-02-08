<template>
  <div>
      <h1>面包屑导航内容：</h1>
      <ul>
        <li v-for="item in crumbs">{{item}}</li>
      </ul>
    <button class="button" @click="testPutCrumbs">试试呀，试试就试试</button>
    <button class="button" @click="testSubCrumbs">试试呀，试试就试试</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
    export default {
        name: "test-store",
        computed:mapState([
          'crumbs'
        ]),
      methods:{
        ...mapActions([
            'sub_crumbs','put_crumbs'
        ]),
        testPutCrumbs(){
          var item = {name:'测试',url:'admin/test/store',}
          this.put_crumbs(item);
        },
        testSubCrumbs(){
          var item = {name:'测试',url:'admin/test/store',}
          this.sub_crumbs(item);
        }
      }
    }
</script>

<style scoped>

</style>
