<?php 
$user_mail = htmlspecialchars($_POST['usermail']);

$token ="5830048994:AAF00kNZzMDso1UfWjF9cKluDYDRp6_nj8c";
$chat_id =  "-855932895 ";
$text = ""   ;



 

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$user_mail}&parse_mode=html", "r" );
if ($sendToTelegram) {
  echo "Success";
 } else {
    echo "Error";
  }

