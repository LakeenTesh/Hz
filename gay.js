$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$('body').keydown(function(e) {
		if (e.keyCode === 1) {
			$(this).remove();
		}
	});
	
	// Клик по фону, но не по окну.
	$('').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});
	
$(document).keydown(function(e) {
		if (e.keyCode === ) {
			$('.video').append('<img src="images/977.jpg">');
		}
	});
$(document).ready(function() {



      function doAnimation()
{
         $(".zagolovok").effect( "h2", {times:3}, 300, doAnimation);
}

doAnimation();

   });
 butt.onclick = function() {
     
      alert('Ура!');
    
  };   
