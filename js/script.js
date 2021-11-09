$(function (f) {
  let element = f(".my-up");
  f(window).scroll(function () {
    element["fade" + (f(this).scrollTop() > 550 ? "In" : "Out")](500);
  });
});

$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    let response = grecaptcha.getResponse();

    if(response.length == 0) {
      swal("Упс...", "Вы не прошли проверку на робота...", "error");
      return false;
    } else {
       $.ajax({
      type: "POST",
      url: "/php/send.php",
      data: $(this).serialize(),
      success: function () {
        swal("Класс!", "Ваше письмо отправлено!", "success").then( function() { location.reload(); });
        $("#exampleModal").modal("hide");
      },
      error: function () {
        swal("Упс...", "Письмо не отправлено :(", "error").then( function() { location.reload(); });
        $("#exampleModal").modal("hide");
      },
    });
    }
    e.preventDefault();
  });
});


    