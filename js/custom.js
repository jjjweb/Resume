//Header:顶部效果
		$(".navigation-1").animate({
			top:"0px",
			opacity:"1"
		},1000);

//PORTFOLIO：作品轮滑
	var page = 1;
	// 右移按钮
	$(".production-right").click(function(){
			if( page == 3){
				//注意为什么是50而不是0，原因左按钮占据位置
				$(".show").animate({ left: 50 },700);
				page = 1;
			}else{
				$(".show").animate({ left: '-=' + 962 },700);
				page++;
			}
	});
	// 左移按钮
	$(".production-left").click(function(){
			if( page == 1){
				$(".show").animate({ left: '-=' + 962 * 2 },700);
				page = 3;
			}else{
				$(".show").animate({ left: '+=' + 962 },700);
				page--;
			}
	});
	// PORTFOLIO：显示左右按钮
	$(".production-first").mouseenter(function(){
			$(".production-left").animate({
				opacity:"1"
			},1000);
			$(".production-right").animate({
				opacity:"1"
			},1000);
	}).mouseleave(function(){
			$(".production-left").animate({
				opacity:"0"
			},1000);
			$(".production-right").animate({
				opacity:"0"
			},1000);
	});



