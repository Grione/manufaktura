<?php

$recepient = "dev325@yandex.ru";
$sitename = "vam-potolki";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$calc = trim($_POST["calc"]);
$message = "Имя: $name \nТелефон: $phone \nВопрос: $message \nДанные калькулятора: $calc";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");