document.addEventListener('DOMContentLoaded', function () {
  const alertMessage = '页面已加载，可在微信浏览器中正常查看。';
  if (navigator.userAgent.toLowerCase().includes('micromessenger')) {
    console.log('微信内置浏览器访问');
  } else {
    console.log('非微信浏览器访问');
  }
  console.log(alertMessage);
});
