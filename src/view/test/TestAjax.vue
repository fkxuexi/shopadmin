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
       /* this.$notify.ss('提示','此操作将删除该信息，是否继续',function(){
          alert();
        })*/


        //this.$message.warn('warn',1000,'100px');
        // this.$message.success('success');
        //this.$message.error('error');
        this.$ajax("/admin/menu/list", (flag,res)=> {
          console.log(flag);
          console.log(res);
          if (flag){
            this.$message.info('info');
          }else{
            this.$message.error('error');
          }
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
