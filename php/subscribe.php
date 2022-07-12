<?php
$sub_email 	= $_POST['sub_email'];


$to = 'expjoomworker@gmail.com';
$subject = 'Bespoke Subscription';

$message = 'Subscription Request Received From Bespoke:<br/><br/>';
$message .= '<strong>Email : </strong>'.$sub_email.'<br/><br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$sub_email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;