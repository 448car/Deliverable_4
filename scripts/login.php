<!DOCTYPE html>
<html lang="EN"><head>
<title>Login</title>
 <link rel="stylesheet" href="styles/home.css" type="text/css">


 </head>
<body>



  <?php

  session_start();
  if (isset($_SESSION['errormsg'])){
    echo "Invalid username/Password. Please try again!";
  }


  $db = mysqli_connect("studentdb-maria.gl.umbc.edu","sarge1","sarge1","sarge1");
  if (mysqli_connect_errno())
  exit("Error - could not connect to MySQL");
  if (isset($_POST['username']) and isset($_POST['password'])){
  // Assigning POST values to variables.
  $username = $_POST['username'];
  $password = $_POST['password'];
  // CHECK FOR THE RECORD FROM TABLE
  $query = "SELECT * FROM `UserRegDB` WHERE username='$username' and password='$password'";
  $result = mysqli_query($db, $query) or die(mysqli_error($connection));
  $count = mysqli_num_rows($result);
  if ($count == 1){
    $_SESSION['username']=$username;
     header("location:home.php");
  }else{
    $_SESSION["errormsg"]='please try again';
   header("location:login.php");
   }
  }
  ?>



</body>
</html>
