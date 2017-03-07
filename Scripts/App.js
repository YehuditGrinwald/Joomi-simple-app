// JavaScript source code


//validation inputs
$(document).ready(function() {
		$('#detailes').on('submit', function() {
			
		alert()
  var $inputs = $(this).find(':input'),
      isValid = true;

  $inputs.each(function() {
    if ($(this).val() == '') {
      isValid = false;
      $(this).addClass('error-control');
    } else {
      $(this).removeClass('error-control');
    }
  });

  return isValid  
});
});

//scroll Windows
smoothScroll.init();

