<?php 
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
$Password=$_POST['Password'];
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
			$usernameCorrect=true;
		}
			
	}
	if($usernameCorrect==false)
	{
		echo "<script type='text/javascript'>alert(\"Incorrect Username\");</script>";
	}
}
if($Password!=NULL &&$usernameCorrect==true)
{
	$query= "SELECT Password FROM TP_Accounts WHERE UserName='$UserName'" ;
	//WHERE UserName='$UserName'"
	$stsm = oci_parse($connect, $query);
	oci_execute($stsm);
	while (oci_fetch($stsm))
	{
		$PasswordCheck=oci_result($stsm, 'PASSWORD');
		if($Password != $PasswordCheck)
		{
			echo "<script type='text/javascript'>alert(\"Incorrect Password\");</script>";
		}
			
		else
		{
			//login 
			$_SESSION['Login'] = $UserName;
			echo "<script type='text/javascript'>alert(\"You are logged in\");</script>";
		}
	}
}


 ?>