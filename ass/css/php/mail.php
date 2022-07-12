<?php

$con_name      = $_POST['con_name'];
$con_phone      = $_POST['con_phone'];
$con_email       = $_POST['con_email'];
$con_company       = $_POST['con_company'];
$con_msg       = $_POST['con_msg'];


$to = 'expjoomworker@gmail.com';
$subject = 'Bespoke User Query';

$message = '<strong>Name : </strong>' . $con_name . '<br/><br/>';
$message .= '<strong>Phone : </strong>' . $con_phone . '<br/><br/>';
$message .= '<strong>Company : </strong>' . $con_company . '<br/><br/>';
$message .= '<strong>Eamil : </strong>' . $con_email . '<br/><br/>';
$message .= $con_msg . '<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <' . $con_email . '>' . "\r\n";

mail($to, $subject, $message, $headers);
echo 1;

print_r($message);
