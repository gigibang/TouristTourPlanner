<script type="text/javascript" >
$valid =false; 
  $FNValid=false;
  $LNValid=false;
  $UNValid=false;
  $PassValid=false;
  $EmValid=false;
  
  
  $FirstName=$_POST['FirstName'];
  $LastName=$_POST['LastName'];
  $UserName=$_POST['UserName'];
  $Password=$_POST['Password'];
  $Email=$_POST['Email'];
  
  
  if($FirstName==NULL && $LastName==NULL && $UserName==NULL &&  $Password==NULL &&  $Email==NULL);
  else{
 // *******************Validate data entered*********************** 
 if($FirstName!=Null)
{
$pattern='/^[a-zA-Z \'-]+$/';

if (preg_match($pattern,$FirstName))
{
	$FNValid=true;
}
else echo"<script type='text/javascript'>alert(\"Invalid input - First name was not input correctly\");</script>";
}
else echo"<script type='text/javascript'>alert(\"Invalid input - First name cannot be left blank\");</script>";
// *******************Validate data entered***********************
if($LastName!=Null)
{
$pattern='/^[a-zA-Z \'-]+$/';

if (preg_match($pattern,$LastName))
{
	$LNValid=true;
}
else echo "<script type='text/javascript'>alert(\"Invalid input - Last name was not input correctly\");</script>";
}
else echo "<script type='text/javascript'>alert(\"Invalid input - Last name cannot be left blank\");</script>";
// *******************Validate data entered***********************
if($UserName!=Null)
{
$pattern='/^[a-zA-Z0-9._-]{8,24}+$/';

if (preg_match($pattern,$UserName))
{
	$UNValid=true;
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Username was not input correctly\");</script>";
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Username cannot be left blank\");</script>";
  
 // *******************Validate data entered***********************
if($Password!=Null)
{
$pattern='/^[a-zA-Z0-9 -\']{7,100}+$/';

if (preg_match($pattern,$Password))
{
	$PassValid=true;
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Password was not input correctly\");</script>";
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Password cannot be left blank\");</script>";

// *******************Validate data entered***********************
if($Email!=Null)
{
$pattern='/^[a-zA-Z0-9._-]+@+[a-zA-Z0-9-]+\.+[a-zA-Z.]{2,6}$/';
if (preg_match($pattern,$Email))
{
	$EmValid=true;
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Email was not input correctly\");</script>";
}
else echo"<script type='text/javascript'>alert(\"Invalid input - Email cannot be left blank\");</script>";


  
  if($FNValid==true && $LNValid==true && $UNValid==true && $PassValid==true && $EmValid==true )
  {
	  $valid=true;
  }

  if($valid)
  {
	$strSQL="INSERT INTO TP_Accounts VALUES
(RC_seq.nextval,:FirstName,:LastName,:UserName,:Password,:Email)";

            

$stmt = oci_parse($connect,$strSQL);

            

//   oci_bind_by_name($stmt, ":RC_id", $RC_id);
   oci_bind_by_name($stmt, ":FirstName", $FirstName);
   oci_bind_by_name($stmt, ":LastName", $LastName);
   oci_bind_by_name($stmt, ":UserName", $UserName);
   oci_bind_by_name($stmt, ":Password", $Password);              
   oci_bind_by_name($stmt, ":Email", $Email);    
   

   
   
   
 oci_execute($stmt);
 echo "<script type='text/javascript'>alert(\"Account registered.\");</script>";






   
              

            

            
     