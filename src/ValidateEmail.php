<?php

$value=$_GET["value"];
$pattern='/^[a-zA-Z0-9._-]+@+[a-zA-Z0-9-]+\.+[a-zA-Z.]{2,6}$/';

if (preg_match($pattern,$value));
else echo "Invalid email address";

?> 