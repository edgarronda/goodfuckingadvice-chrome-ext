(function($){
  $(function(){
  	$('select').val(localStorage.frequency);// The display frequency, in minutes.
    $('select').material_select();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space