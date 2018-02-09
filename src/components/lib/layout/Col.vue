<template>
    <div :class="['column','is-'+span]">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        props:['span'],
        name: "column"
    }
</script>

<style scoped>
 @import "Col.css";
</style>
