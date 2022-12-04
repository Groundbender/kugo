<?php 
$user_phone = htmlspecialchars($_POST['userphone']);
$user_mail = htmlspecialchars($_POST['usermail']);

$token ="5830048994:AAF00kNZzMDso1UfWjF9cKluDYDRp6_nj8c";
$chat_id =  "-855932895 ";


$formData = array(
  "Телефон: " => $user_phone, 
  "Почта: " => $user_mail,
);

foreach($formData as $key => $value) {
  $text .= $key . "<b>" . urlencode($value) . "</b>" ."%0A" ; 
}


 

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r" );
if ($sendToTelegram) {
  echo "";
 } else {
    echo "Error";
  }

