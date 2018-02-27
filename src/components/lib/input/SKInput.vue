<template>
    <div class="sk-input" :style="">
      <span v-if="prefix" :class='["prefix fl","fa fa-"+prefix]'></span>
      <input type="text" class="fl">
      <span v-if="suffix" :class='["suffix fl","fa fa-"+suffix]'></span>
    </div>
</template>

<script>
    export default {
        name: "s-k-input",
        props:['prefix','suffix','size'],
        computed:{

        }

    }
</script>

<style scoped>
@import "SKInput.css";
</style>
