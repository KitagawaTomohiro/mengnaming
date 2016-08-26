$(function(){
	var p = 0;
	interval = window.setInterval(function (){
		if (p == 94) {
			window.clearInterval(interval);
		}else{
			$('.loadOver').css('left',p+'%');
			$('.loading .num').html(p + '%');
			p++;
		}
    }, 100);
	
	var isSp;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width()<770 ) {
		isSp = true;
		skrollr.init().destroy();
		$('#gHeader').addClass('phone');
		$('#videoBg').remove();
	}else{
		isSp = false;
		skrollr.init({
			forceHeight: false
		});
		$('#gHeader').removeClass('phone');
	}
	
	$(window).load(function(){
		window.clearInterval(interval);
		$('.loading .num').html('99%');
		$('.loadOver').animate({left: '100%'},200,function(){
			$('.loading .num').html('100%');
			setTimeout(function(){
				$('.loading').fadeOut();	
			},200);	
		});
		$('#gHeader .arrow a').click(function(){
			$('body,html').animate({
				scrollTop: $('#main').offset().top
			}, 800);
			return false;
		});
		$('#videoBg').trigger('play');
	});	
	
	
	

	$('.inview').bind('inview', function (event, visible, topOrBottomOrBoth) {
		if (visible == true) {
			$(this).stop().addClass('fadeIn');
		} else {
			$(this).stop().removeClass('fadeIn');
		}
	});	
	$(window).trigger('scroll');
	
	$('.faqBox dl').magicAccordion({
		headingTag 	: 'dt',
		bodyClass 	: 'body',
		headClass 	: 'head',
		activeClass : 'on',
		speed 		: 200,
		easing 		: 'swing'
	});
	
	$('#gHeader .hLink > a').click(function(){
		$(this).next('div').fadeToggle(200);
		return false;	
	});
	
	$('#MusicVideo').click(function(){
		$('#videoBg').trigger('pause');
		var MusicVideo = 'movie/edit_0823_19.4_60.mp4';
		if(isSp){
			MusicVideo = 'movie/edit_0823_s.mp4';	
		}
		$('.mask .videoBox video').attr('src',MusicVideo).trigger('play');
		$('.mask').fadeIn();
		return false;	
	});
	
	$('#MakingVideo').click(function(){
		$('#videoBg').trigger('pause');
		var MakingVideo = 'movie/makingvideo_5mb_15.mp4';
		if(isSp){
			MakingVideo = 'movie/makingvideo_5mb_15.mp4';	
		}
		$('.mask .videoBox video').attr('src',MakingVideo).trigger('play');
		$('.mask').fadeIn();
		return false;	
	});
	$('.mask .close').click(function(){
		$('.mask .videoBox video').trigger('pause');
		$('.mask').fadeOut(function(){
			$('.mask .videoBox video').attr('src','');
			$('#videoBg').trigger('play');	
		});	
	});
	
	$('.productBox .spLink a').click(function(){
		$(this).parents('.productBox').find('.spBox').fadeIn(200);
		return false;	
	});
	$('.productBox .spBox .close').click(function(){
		$(this).parents('.spBox').fadeOut(200);
		return false;	
	});
	$('#gHeader .music_botton .control').click(function(){
		$(this).toggleClass('play');
		$(this).toggleClass('pause');
		var myVid = document.getElementById("videoBg");
		var sta = myVid.muted;
		if (sta == true) {
			myVid.muted = false;
		} else {
			myVid.muted = true;
		}
		return false;	
	});
	
});

