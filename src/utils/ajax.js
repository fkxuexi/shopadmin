// var base = "https://www.goldbangs.com/cms/";
var base = "http://localhost/cms/";
import TopProgressBar from '../components/lib/topProgress/ToProgress.min'
var process ;
function ajax(url,param,callback){
  url = base + url;
  if (typeof(param) == 'function'){
    callback = param;
    param = null;
  }
  $.ajax({
      url:url,
      data:param,
      type:'POST',
      beforeSend:function (xhr) {
        before(xhr);
      },
      complete:function (xhr) {
        before(xhr);
      },
      success:function (res) {
        callback(true,res);
        process.increase(80)
        setTimeout(function(){
          process.finish();
          callback(false);
        },500)
      },
      error:function (xhr,error,e) {
        process.increase(80)
        setTimeout(function(){
          process.finish();
          callback(false);
        },500)
      }
  })
}

/**
 * 发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
 * XMLHttpRequest 对象是唯一的参数。
 * @param xhr
 */
function before(xhr){
 if (!process){
   getProcess();
 }
  process.increase(20);
}

/**
 * 当请求完成之后调用这个函数，无论成功或失败。传入 XMLHttpRequest 对象，以及一个包含成功或错误代码的字符串。
 * @param xhr
 */
function complete(xhr){
  process.increase(60);
}
function getProcess(){
  var options =  {
    id: 'top-progress-bar',
    color: '#409eff',
    height: '2px',
    duration: 0.4
  };
  process = new ToProgress(options);
  return process;
}

export default {
  install(Vue){
    Vue.prototype.$ajax = ajax
  }
}
