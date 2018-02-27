<template>
  <div>
     <router-link :to="{path:menuItem.menuUrl}">
       <li @click.stop="toggle($event,index)">
        <div class="menuItem" :style="identation">
          <i :class="[menuItem.menuIconClass,'fa fa-user fa-fw','preffix']"></i>
          {{menuItem.menuName}}-{{level}}
          <i v-if="menuItem.menuUrl==''" :class="[menuItem.menuIconClass,'fa fa-angle-down fa-fw','fr','suffix']"></i>
        </div>
       </li>
       <ul v-show="open" >
         <menu-items v-for="item in menuItem.children" :menuItem="item" :key="item.id"></menu-items>
       </ul>
     </router-link>
  </div>
</template>

<script>
    export default {
        name: "menu-items",
        props:['menuItem','index'],
        data(){
          return{
            open:false,
            currentIndex:0,
          }
        },
      computed:{
          level:function(){
            var menuLevel = this.menuItem.menuLevelPath.split('-').length - 1;
            return "menu-"+menuLevel;
          },
          identation:function () {
            var menuLevel = this.menuItem.menuLevelPath.split('-').length - 1;
              var style = {
                'margin-left': parseInt(menuLevel) * 12 + 'px'
              }
              return style;
          }
      },
      methods:{
          toggle:function (event,index) {
            this.open = !this.open;
            this.currentIndex = index;
            var liDom =  $(event.currentTarget);
            var subLi = $(liDom).siblings('ul').find('li');
            $(subLi).css({
              'border-top':'1px dotted #E4E4E4'
            })
            $(subLi[0]).css({
              /*'border-top':'none',
              'border-top':'1px solid #E4E4E4'*/
            })
          }
      }
    }
</script>

<style scoped>
  @import "menu.css";
</style>
