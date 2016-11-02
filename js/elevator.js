var elevator={
  FHEIGHT:0,//保存楼层的高度
  //保存亮灯区域上下边界距文档显示区顶部距离
  UPLEVEL:0, DOWNLEVEL:0,
  DURATION:1000,//动画持续时间
  init:function(){
    this.FHEIGHT=//#f1的高+#f1的marginBottom
      parseFloat($(".navigation-1").css("height"));
//为document绑定scroll事件为scroll方法
    $(document).scroll(this.scroll);
    //为#elevator下的ul添加mouseover事件代理,只有li才能响应事件
    //为#elevator下的ul添加click事件代理,只有li下class为etitle的a才能响应事件
    $(".bgphoto a.lets-begin").click(
      function(e){
        e.preventDefault();
      //停止body上的动画，清空队列
        $("body").stop(true);
      //获得目标元素的父元素$li
        var $li=$(e.target).parent();
      //查找.floor下的header下的span中第i个$span
        var $span=$("#main .start-profile");
      //启动动画，让body在DURATION时间内，滚动到$span距页面顶部的总距离-UPLEVEL
        $("body").animate(
          {scrollTop:
            $span.offset().top-this.UPLEVEL},
          this.DURATION
        );
      }.bind(this)
    );
  }
}
elevator.init();