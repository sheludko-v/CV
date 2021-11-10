$(function (f) {
  let element = f(".my-up");
  f(window).scroll(function () {
    element["fade" + (f(this).scrollTop() > 550 ? "In" : "Out")](500);
  });
});

$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    let response = grecaptcha.getResponse();

    if (response.length == 0) {
      swal("Упс...", "Вы не прошли проверку на робота...", "error");
      return false;
    } else {
      $.ajax({
        type: "POST",
        url: "/php/send.php",
        data: $(this).serialize(),
        success: function () {
          swal("Класс!", "Ваше письмо отправлено!", "success");
          $("form").trigger("reset");
          grecaptcha.reset();
        },
        error: function () {
          swal("Упс...", "Письмо не отправлено :(", "error").then(function () {
            location.reload();
          });
          $("form").trigger("reset");
          grecaptcha.reset();
        },
      });
    }
    e.preventDefault();
    $("#exampleModal").modal("hide");
  });
});

let pauseFactor = 15;
class jiggleit {
  constructor(num) {
    this.el = jiggleit.el("jiggle" + num);
    this.to = 80;
    this.jig = function () {
      let c = this;
      if (pauseFactor) {
        c.t = c.t ? ++c.t : 1;
        if (c.t % pauseFactor == 0) {
          c.to = pauseFactor * 400;
          c.t = 0;
        } else
          c.to = 80;
      }

      c.el.style.top = parseInt(c.el.style.top) == 1 ? "-1px" : "1px";
      setTimeout(function () {
        c.jig();
      }, c.to);
    };
    this.jig();
  }

  static el(id) {
    return document.all ? document.all[id] : document.getElementById(id);
  }
  static init() {
    let i = 0;
    while (jiggleit.el("jiggle" + i))
      i++;
    if (i--)
      for (i; i > -1; --i)
        new jiggleit(i);
  }
}

if (document || document.getElementById) window.onload = jiggleit.init;