// JavaScript source code

	smoothScroll.init();
	
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

function scrollWin(elementId) {
    window.scrollDowen(400,400);
}

function scroll_to(divelementId) {
    if (elementId.scrollTop < elementId.scrollHeight - elementId.clientHeight)
        elementId.scrollTop += 10; // move down
              }
var smoothScroll = function (elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function () {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}


