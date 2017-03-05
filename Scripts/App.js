// JavaScript source code

    //function validForm() {
    //    validPhone();
    //    ValidateEmail();
    //}

        function validPhone() //Function for validating phone
        {
            var PhoneNumber = document.getElementById('phone').value;
            var Phoneno = /^\d{10}$/;
            if ((Phoneno.test(PhoneNumber)))
            { return true; }
            else
            {
                alert("Not a valid Phone Number");
                return false;
            }
        }

function ValidateEmail()//Function for validating email
{
    var ImailAddress = document.getElementById('email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(ImailAddress))
    {
        alert("You have valid email address!");

        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}


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



//$(document).ready(function(){

//    /** 
//     * This part does the "fixed navigation after scroll" functionality
//     * We use the jQuery function scroll() to recalculate our variables as the 
//     * page is scrolled/
//     */
//    $(window).scroll(function(){
//        var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
//        var div_top = $('#nav-anchor').offset().top;
//        if (window_top > div_top) {
//            $('nav').addClass('stick');
//        } else {
//            $('nav').removeClass('stick');
//        }
//    });

