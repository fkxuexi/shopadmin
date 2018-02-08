import TopProgressBar from '../components/lib/topProgress/ToProgress.min'
var base = "https://www.goldbangs.com/cms/";
var progressBar


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
        progressBar.finish();
        callback(true,res);
      },
      error:function (xhr,error,e) {
        progressBar.finish();
        callback(false);
      }
  })
}

/**
 * 发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
 * XMLHttpRequest 对象是唯一的参数。
 * @param xhr
 */
function before(xhr){
  progressBar.increase(20);
}

/**
 * 当请求完成之后调用这个函数，无论成功或失败。传入 XMLHttpRequest 对象，以及一个包含成功或错误代码的字符串。
 * @param xhr
 */
function complete(xhr){
  progressBar.increase(60);
}
export default {
  install(Vue){
    Vue.prototype.$ajax = ajax
  }
}
$(function(){
  var options = {
    id: 'top-progress-bar',
    color: '#409eff',
    height: '2px',
    duration: 0.4
  }
  progressBar = new ToProgress(options);
})
