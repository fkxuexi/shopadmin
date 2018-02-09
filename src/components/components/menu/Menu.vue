<template>
  <div class="menu">
    <ul></ul>
  </div>
</template>

<script>
    export default {
        name: "menu",
        data(){
          return {
            menu:[]
          }
        },
      mounted:function(){
          this.ajax('/admin/menu/list',function(flag,res){
            if(flag){
              //this.menu = res.data;
              this.msg('成功',1,2000,6);
            }else{

            }
          })
      }

    }
</script>

<style scoped>

</style>
