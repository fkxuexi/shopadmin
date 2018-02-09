<template>
  <div class="dd">
    <button class="button" @click="test">你试试呀</button>
  </div>
</template>

<script>
  export default {
    name: "test",
    methods: {
      test() {
        this.$message({message:'fk',type:'success'});
        this.$ajax("/admin/menu/list",function (flag,res) {
          console.log(flag);
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
.dd{
  width: 100%;
  height: 40px;
}
</style>
