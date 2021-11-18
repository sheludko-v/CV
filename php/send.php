<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$msg = $_POST['msg'];


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$msg = htmlspecialchars($msg);

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$msg = urldecode($msg);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$msg = trim($msg);

$to = "sheludko.vo@gmail.com";
$subject = "Вам письмо с вашего сайта:";
$headers = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: STIGMAT.ONLINE@stigmat.online \r\n";

$message = 
'<!DOCTYPE html>
<html lang="ru">
<head></head>
<body style="background-color: #009933; width: 100%; height: 100%;">

<div style="text-align: center;">
    <h3 style="padding-top: 20px; color: yellow;">Вам письмо с сайта</h3>
    <h2 style="color: yellow;">STIGMAT.ONLINE » CV</h2>
</div>

<table style="margin: 0 auto; padding-top: 10px; padding-bottom: 50px;">
    <tr>
        <th style="background-color: #003300; color: white; padding: 10px; text-align: center;">Имя</th>
        <td style="width: 400px; padding: 10px; background-color: #FFFFFF; text-align: center;">'. $name .'</td>
    </tr>
    <tr>
        <th style="background-color: #003300; color: white; padding: 10px; text-align: center;">Email</th>
        <td style="width: 400px; padding: 10px; background-color: #FFFFFF; text-align: center;">'. $email .'</td>
    </tr>
    <tr>
        <th style="background-color: #003300; color: white; padding: 10px; text-align: center;">Телефон</th>
        <td style="width: 400px; padding: 10px; background-color: #FFFFFF; text-align: center;">'. $tel .'</td>
    </tr>
    <tr>
        <th style="background-color: #003300; color: white; padding: 10px; text-align: center;">Сообщение</th>
        <td style="width: 400px; padding: 20px; background-color: #FFFFFF;">'. $msg .'</td>
    </tr>
</table>
</body>
</html>';

if (mail($to, $subject, $message, $headers)) {
    echo "<script>alert('Ваше письмо отправлено!'); window.location.href = '/'</script>";
} else {
    echo "<script>alert('Ваше письмо не отправлено!'); window.location.href = '/'</script>";
} 



	
// function SiteVerify($url)
// {
//     $curl = curl_init();
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($curl, CURLOPT_TIMEOUT, 15);
//     curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36");
//     $curlData = curl_exec($curl);
//     curl_close($curl);
//     return $curlData;
// }
 
 
// if($_SERVER["REQUEST_METHOD"] == "POST")
// {
//   $recaptcha=$_POST['g-recaptcha-response'];
//     if(!empty($recaptcha))
//     {
 
//         $google_url="https://www.google.com/recaptcha/api/siteverify";
//         $secret='6Lex6gwdAAAAAA2-RY4YwfZjJSrIn2FZLsr5tmqX';
//         $ip=$_SERVER['REMOTE_ADDR'];
//         $url=$google_url."?secret=".$secret."&response=".$recaptcha."&remoteip=".$ip;
//         $res=SiteVerify($url);
//         $res= json_decode($res, true);
 
//         if($res['success'])
//         {
//             if (mail($to, $subject, $message, $headers)) {
//                 echo "<script>alert('Ваше письмо отправлено!'); window.location.href = '/'</script>";
//             } else {
//                 echo "<script>alert('Ваше письмо не отправлено!'); window.location.href = '/'</script>";
//             } 
//         }
//         else
//         {
//             echo "<script>alert('Проверка не пройдена!'); window.location.href = '/'</script>";
//         }
 
//     }
//     else
//     {
//         echo "<script>alert('Вы не нажали reCAPTCHA!'); window.location.href = '/'</script>";
//     }
 
// }

 


