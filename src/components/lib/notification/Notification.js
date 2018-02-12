import Vue from 'vue'
import Notification from './Notification.vue'

let NotificationBox = Vue.extend(Notification);
let instance;

var notification = function (option) {
  var children = document.body.children;
  console.log(children);
  for (let index in children) {
    console.log(children[index].className);
    if (children[index].className == 'notification-box small') {
      console.log('hahahh');
      document.body.removeChild(children[index]);
    }
  }
  instance = new NotificationBox({
    data:option
  })

  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
}

function notificationBox(type,icon,title,content,showCancel,showConfirm,callback) {
  var option = {
    show:true,
    title:title,
    type:type,
    content:content,
    icon:icon,
  }
  if(typeof(showCancel) =='function'){
    option['showConfirm'] = true;
    option['callback'] = showCancel;
  }
  if(typeof(showConfirm) =='function'){
    option['showConfirm'] = true;
    option['callback'] = showConfirm;
  }

  if (showConfirm){
    option['showConfirm'] = showConfirm;
  }else {
    option['showConfirm'] = true;
  }
  if (showCancel){
    option['showCancel'] = showCancel;
  }else {
    option['showCancel'] = true;
  }

  if (typeof(callback) == 'function'){
    option['callback'] = callback;
  }

  notification(option);
}

export default {
  ss(title,content,showCancel,showConfirm,callback){
    return notificationBox('info','fa fa-exclamation',title,content,showCancel,showConfirm,callback);
  }
}
