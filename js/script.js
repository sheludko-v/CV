$(function (f) {
  let element = f(".my-up");
  f(window).scroll(function () {
    element["fade" + (f(this).scrollTop() > 550 ? "In" : "Out")](500);
  });
});

$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    $.ajax({
      type: "POST",
      url: "/php/send.php",
      data: $(this).serialize(),
      success: function () {
        swal("Класс!", "Ваше письмо отправлено!", "success");
        $("#exampleModal").modal("hide");
      },
      error: function () {
        swal("Упс...", "Письмо не отправлено :(", "error");
        $("#exampleModal").modal("hide");
      },
    });
    e.preventDefault();
  });
});

function get_action(form) 
{
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
        return false;
    }
    else
    {
        document.getElementById('captcha').innerHTML="Captcha completed";
        return true; 
    }
}