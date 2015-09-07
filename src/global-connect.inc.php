<?php
  /* Set oracle user login and password info */
  $dbuser = "arholt";  /* your deakin login */
  $dbpass = "sit203";  /* your deakin password */
  $dbname = "SSID"; 
  $db = OCILogon($dbuser, $dbpass, $dbname); 

  if (!$db)  {
    echo "An error occurred connecting to the database"; 
    exit; 
  }

?>