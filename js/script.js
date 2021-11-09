$(function (f) {
    let element = f(".my-up");
    f(window).scroll(function () {
        element["fade" + (f(this).scrollTop() > 550 ? "In" : "Out")](500);
    });
});


// $(document).ready(function(){
//     $('#contact-form').on('submit',function(e) { 
//       let name = $("#name").val();
//       let email = $("#email").val();
//       let tel = $("#tel").val();
//       let msg = $("#msg").val();
//       $.ajax({
//         type: "POST",
//         url: "/php/send.php",
//         data: {
//           name: name,
//           email: email,
//           tel: tel,
//           msg: msg,
//           captcha: grecaptcha.getResponse()
//         },
//         success:function(){
//           swal("Класс!", "Ваше письмо отправлено!", "success");
//           $('#exampleModal').modal('hide');
//         },
//         error:function(){
//           swal("Упс...", "Письмо не отправлено :(", "error");
//           $('#exampleModal').modal('hide');
//         }
//       });
//       e.preventDefault(); 
//     });
//   });


  