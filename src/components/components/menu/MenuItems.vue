<template>
  <div>
     <router-link :to="{path:menuItem.menuUrl}">
       <li :class="[level,'menuItem',index == currentIndex ? 'current':'']" :style="identation" @click.stop="toggle($event,index)">
         <i :class="[menuItem.menuIconClass,'fa fa-user fa-fw','preffix']"></i>
         {{menuItem.menuName}}-{{level}}
         <i v-if="menuItem.menuUrl==''" :class="[menuItem.menuIconClass,'fa fa-angle-down fa-fw','fr','suffix']"></i>
       </li>
       <ul v-show="open">
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
            if (menuLevel != 1){
              var style = {
                'margin-left' : parseInt(menuLevel) * 12 +'px'
              }
              return style;
            }
          }
      },
      methods:{
          toggle:function (event,index) {
            this.open = !this.open;
            this.currentIndex = index;
            var liDom =  $(event.currentTarget);
            var parent = $(liDom).parent();
            if (this.open ){
                $(parent).find('li .suffix').addClass("fa-rotate-180");
            }else{
                $(parent).find('li .suffix').removeClass("fa-rotate-180");
            }
            console.log('parent',parent);
            parent.css({'background':'#f5f5f5'})
            var divDom = $(parent).siblings().find('div li');
            console.log('div',divDom);
            divDom.css({
              'border-top':'1px dotted #E4E4E4',
              'border-left':'1px dotted #337ab7',
              'padding-left':'4px'
            })
          /* $(divDom[0]).css({
             'border-top':'1px solid #E4E4E4'
           })
            var aDom = $(divDom).find('a li');
            aDom.css({
              'border-left':'1px dotted #337ab7',
              'padding-left':'4px'
            })*/
          }
      }
    }
</script>

<style scoped>
  @import "menu.css";
</style>
