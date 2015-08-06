<?php

$value=$_GET["value"];
$pattern='/^[a-zA-Z0-9._-]{8,24}+$/';

if (preg_match($pattern,$value));
else echo "Invalid input - letters, underscores, period, numbers and hyphens only, Username must be between 8 and 24 characters long";

$dbuser = "arholt";
$dbpass = "sit203"; 
$db = "SSID";
$connect = OCILogon($dbuser, $dbpass, $db);
if (!$connect) 
{
	echo "An error occurred connecting to the database";
	exit;
}
$UserName=$_POST['UserName'];
if($UserName!=NULL)
{
	$query= "SELECT * FROM TP_Accounts WHERE UserName='$UserName'" ;
	//WHERE UserName='$UserName'"
	$stsm = oci_parse($connect, $query);
	oci_execute($stsm);
	$usernameCorrect=false;
	while (oci_fetch($stsm))
	{
		$UserNameCheck=oci_result($stsm, 'USERNAME');
		if($UserName == $UserNameCheck)
		{
			echo "<script type='text/javascript'>alert(\"Username is already in use -  try adding a number or underscore \");</script>";
		}
			
	}
}
?> 