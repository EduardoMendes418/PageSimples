//======= CRIAÇAO DO DIRECIONAMONETO MENU======
	$(function(){
		/*$('nav a').click(function(){
			var href = $(this).atrr('href'); //destino
			var offSetTop = $(href).offset().top; //posiça do destino

			$('html,body').animate({'scrollTop':offSetTop}); //funçao para descer animaçao

			return false;
		})//funçao da variavel	
		
		*/

		var $doc = $('html,body');
	$('.scrollSuave').click(function(){
		$doc.animate({scrollTop:$($.attr(this,'href')).offset().top }, 4000);
		
		return false;
	});

});//abrindo funçao
