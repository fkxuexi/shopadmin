<template>
  <div :class="['notification-box',size]" v-if="show">
    <div class="title">{{title}}</div>
    <div class="content">
      <span :class="icon"></span>
      <p>{{content}}</p>
    </div>
    <div class="actons">
      <button class="button is-small" v-if="showCancel" @click="cancel">取消</button>
      <button class="button is-small is-ok" v-if="showConfirm" @click="makeSure">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "msg-box",
    data(){
      return {
        title:'',
        content:'',
        icon:'',
        size:'small',
        show:false,
        showCancel:true,
        showConfirm:true,
        callback:new Object()
      }
   },
    mounted(){
      this.show = true;
    },
    methods:{
      cancel(){
        var child = document.body.children;
        for (let index in child){
          if (child[index].className=='notification-box'){
            document.body.removeChild(child[index]);
          }
        }
        this.show = false
      },
      makeSure(){
        this.callback();
        this.show = false;
      }
    },

  }
</script>

<style scoped>
@import "Notification.css";
</style>
