<template>
  <div class="bgm">
    <div :class="['dialog',type,model]" v-if="show">
      <span class="fa fa-close"></span>
      <div class="title">{{title}}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sk-dialog",
        props:{
          show:false,
          title:null,
          type:{default:'small'},
          model:{default:true},
          scroo:{default:true}
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
@import "Dialog.css";
</style>
