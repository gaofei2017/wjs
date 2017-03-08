window.onload=function(){

  //触屏轮播图
  banner();

  //设置产品模块tab导航宽度
  setWidth();

  //初始化提示工具
  $('.bao').tooltip();
  $('.bei').tooltip();

}

//触屏轮播图
  function banner(){
  //获取wjs-banner盒子  绑定触屏事件
  var banner=document.querySelector('.wjs-banner');

  //存储触屏的数据
  var startX=0;
  var moveX=0;
  var distanceX=0;

  banner.addEventListener('touchstart',function(e){
    console.log('start...');
    //起始坐标值
    startX= e.targetTouches[0].clientX;
  })

  banner.addEventListener('touchmove',function(e){
    console.log('move...');
    //获取移动的坐标值
    moveX= e.targetTouches[0].clientX;
    //算出距离差
    distanceX=moveX-startX;
  })

  banner.addEventListener('touchend',function(){
    console.log('end...');
    //确定用户操作，让轮播图实现上一张或者下一张
    if(distanceX<0){
      //向左滑动  下一张
      console.log('下一张');
      $('.carousel').carousel('next');
      //document.querySelector('.carousel').get(0).carousel('next')
    }

    if(distanceX>0){
      //向右滑动 上一张
      console.log('上一张');
      $('.carousel').carousel('prev');
    }

    //数据重置
      startX=0;
      moveX=0;
      distanceX=0;
  })



}

//设置产品模块tab导航宽度
  function setWidth(){
     //获取product-tabs里面所有的li的宽度 累加   把总和赋值给product-tabs
     var w=0; //累加li的宽度
     $('.product-tabs li').each(function(index,e){
       w+=$(e).outerWidth(true);
     });
    //把总和赋值给product-tabs
    $('.product-tabs').width(w);
  }
