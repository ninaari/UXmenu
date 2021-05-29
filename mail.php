
<?php
$to = "gavin.fiorina@libertyits.com";
$subject = "Liberty HCD UX Toolkit Results";
$txt = "all the stuffs";
$headers = "From: HCD@libertyits.com" . "\r\n" .
"CC: gavinfiorina@gmail.com";

mail($to,$subject,$txt,$headers);
?> 