<?php

$value=$_GET["value"];
$pattern='/^[a-zA-Z0-9._-]{8,24}+$/';

if (preg_match($pattern,$value));
else echo "Invalid input - letters, underscores, period, numbers and hyphens only, password must be between 8 and 24 characters long";


?> 