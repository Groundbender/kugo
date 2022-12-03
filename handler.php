<?php 
$user_phone = htmlspecialchars($_POST['userphone']);

$token ="5830048994:AAF00kNZzMDso1UfWjF9cKluDYDRp6_nj8c";
$chat_id =  "-855932895 ";



 

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$user_phone}&parse_mode=html", "r" );
if ($sendToTelegram) {
  echo "Success";
 } else {
    echo "Error";
  }

// if ($sendToTelegram) {
//   echo "Success";
//  } else {
//     echo "Error";
//   }
