<?php

$value=$_GET["value"];
$pattern='/^[a-zA-Z \'-]+$/';

if (preg_match($pattern,$value));
else echo "Invalid input - letters, apostrophe, spaces and hyphens only";

?> 