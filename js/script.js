// Плавный подъём наверх
$(function (f) {
  let element = f(".my-up");
  f(window).scroll(function () {
    element["fade" + (f(this).scrollTop() > 550 ? "In" : "Out")](500);
  });
});

// Проверка рекапчи и отправка формы через ajax
$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    // let response = grecaptcha.getResponse();

    // if (response.length == 0) {
    //   swal("Упс...", "Вы не прошли проверку на робота...", "error");
    //   return false;
    // } else {
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
    // }
    e.preventDefault();
    $("#exampleModal").modal("hide");
  });
});


// Дрожащая ссылка
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
          c.to = pauseFactor * 500;
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


// Переключатель светлая/тёмная тема
let toggle = document.querySelector('.theme-toggle');
  toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme'); 
  document.querySelector('.main').classList.toggle('bg-dark'); 
  document.querySelector('.modal-content').classList.toggle('bg-dark');

  let infos = document.querySelectorAll('.info');
  infos.forEach(function(element) {
    element.classList.toggle('bg-dark'); 
  });
  let cards = document.querySelectorAll('.card');
  cards.forEach(function(element) {
    element.classList.toggle('bg-dark'); 
  });
  let gits = document.querySelectorAll('.git-dark');
  gits.forEach(function(element) {
    element.classList.toggle('git-dark-theme'); 
  });
})


// Проверка на робота
let num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 11);
let num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 21);
let result = num1 + num2;
let sum = document.querySelector('.sum');
let sub = document.querySelector('#submit');
sub.disabled = true;

sum.addEventListener('input', function() {
  if (sum.value == result) {
    sub.disabled = false;
    document.querySelector('.answer').textContent = 'Верно! Вы не робот!'
  } else {
    if (sum.value == '') {
      document.querySelector('.answer').textContent = ''
    } else {
      document.querySelector('.answer').textContent = 'Не верно! Вы часом не робот?'
    }
  }
  
})
    



