<template>
  <transition  name="custom-classes-transition"
               enter-active-class="animated bounceInDown"
               leave-active-class="animated bounceOutUp">
    <div class="message" v-show="show" :style="{width:width}">
      <span :class="[icon,'icon',type]"></span>
      <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'msg',
    mounted() {
      this.StartTime();
    },
    data() {
      return {
        message: '123',
        show: false,
        duration: 0,
        icon:'',
        type:'',
        width:'300px',
      }
    },
    methods: {
      StartTime() {
        this.show = true;
        this.duration = setTimeout(() => {
          this.destory();
        }, this.duration);
      },
      destory() {
        this.show = false;
        var children = document.body.children;
        for (let index in children) {
          if (children[index].className == 'message') {
            document.body.removeChild(children[index]);
          }
        }
        clearTimeout(this.duration)

        this.duration = null;
      }
    }
  }
</script>


<style scoped>
@import "Message.css";
</style>
