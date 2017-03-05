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

function scrollWin(x, y) {
    window.scrollBy(x, y);
    }
  
