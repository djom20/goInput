(function($){
 
  $.fn.Focus = function(){
  
        $(this).focus();
        $(this).attr('autofocus','');   
 
    }
 
  $(function(){
  	$("*[autofocus]").focus();	
  	$("*[data-autofocus]").focus();	
  	$("*[autoFocus]").focus();	
  });

   
 
 
})(jQuery);
 
// uso
// $('element').Focus();

// <input data-autofocus>
// <input autofocus>
// <input autoFocus>