import Vue from 'vue';
import Message from './Message'

let MessageBox = Vue.extend(Message);
let instance;
var message = function (options) {
  var children = document.body.children;
  for (let index in children) {
    if (children[index].className == 'message') {
      document.body.removeChild(children[index]);
    }
  }
  //生成组件
  instance = new MessageBox({
    data: options
  })
  //组件需要挂载在dom元素上
  instance.vm = instance.$mount();
  //根据不同的类型，设置不同消息的背景颜色
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
}

function msg(msg,icon,type,duration,width) {
  var option = {
    message: msg,
    icon: icon,
    type: type,
  }
  if (!duration){
    option['duration'] = 2000;
  }else if(typeof(duration) == 'string'){
    option['duration'] = 2000;
    option['width'] = duration;
  }else{
    option['duration'] = duration;
  }

  if (!width && !option['width']){
    option['width'] = '300px';
  }
  console.log('option',option);
  message(option);
}

export default {
  info(text,duration,width) {
    return msg(text,'fa fa-info','info', duration,width);
  },
  warn(text,duration,width){
    return msg(text,'fa fa-exclamation','warn', duration,width);
  },
  success(text,duration,width){
    return msg(text,'fa fa-check','success', duration,width);
  } ,
  error(text,duration,width){
    return msg(text,'fa fa-close','error', duration,width);
  }

};

//export default message;
/*export default {
  install(Vue){
    Vue.prototype.tips = message;
  }
}*/
