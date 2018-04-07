$(function(){

	var delay = 4000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

//função do sobre 
	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-Wrapper').css('width',sizeContainer+'%');

//função 
		for(var i = 0; i < amt; i++){
			if (i == 0)
				$('.slider-bullets').append('<span style="background-color: #835FA7;"></span>');
			else
				$('.slider-bullets').append('<span></span>');

		}
	}

//função do slider declarando velocidae  no delay
	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if (curIndex == amt)
				curIndex = 0;
			gotoSlider(curIndex);

		},delay)
	}

// animando a scroll-equipe
	function gotoSlider(curIndex){
		var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-Wrapper').offset().left;

		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','#835fa7'); 
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
	}

	$(window).resize(function(){
		$('scrollEquipe').stop().animate({'scrollLeft':0});
	})

})
