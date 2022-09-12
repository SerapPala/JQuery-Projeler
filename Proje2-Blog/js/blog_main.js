/* search */

$(function () {
  var autoComplete = [
    "Asp",
    "Ajax",
    "Basic",
    "Bootstrap",
    "HTML5",
    "css3",
    "js",
    "Jquery",
  ];

  $("#tags").autoComplete({
    source: autoComplete,
  });
});

/* login */
$(function () {
  $("#btn_login").click(function () {
    $("#myMember").modal();
  });
});

/* login form validation jquery */
/* user_email */
/* user_phone */
/* user_password */

$(function () {
  $("btnSubmit").click(function () {
    var email, phone, password;
    email = $("#user_email").val();
    phone = $("#user_phone").val();
    password = $("#user_password").val();
    /* validation_email */
    /* validation_phone */
    /* validation_password */
    if (email == "") {
      $("#validation_email").html(
        "We'll never share your email with anyone else."
      );
    } else if (validateEmail(email) == false) {
      $("#validation_email").html("email");
    }
    if (phone == "") {
      $("#validation_phone").html(
        "We'll never share your phone with anyone else."
      );
    } else if (($.isNumeric == phone) == false) {
      $("#validation_phone").html("number");
    }

    if (password == "") {
      $("#validation_password").html(
        "We'll never share your password with anyone else."
      );
    }
   /* validation_email regex */
    function validateEmail(email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return regex.test(email);
    }
  });
});


/* tooltip */
$(function () {

      $("#html5").tooltip();
      $("#css3").tooltip();
  });
  