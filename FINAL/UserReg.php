<!DOCTYPE html>
<html>

<head>
  <title>User Registration</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/common-style.css" type="text/css" />
  <link rel="stylesheet" href="styles/login.css" type="text/css" />
  
</head>

<body>
    <header>
    <h1><img alt="" class="logo" src="images/logo.png">CarKeys</h1>
    <nav>
        <ul class="horizontal-nav-list">
        <li><a href="index.html">HOME</a></li>
        <li><a href="aboutpage.html">ABOUT US</a></li>
        <li><a href="car-selection.html">VIEW CARS</a></li>
        <li><a href="login.html">LOGIN</a></li>
        <li><a href="UserReg.html">CREATE AN ACCOUNT</a></li>
        <li><a href="contactus.html">CONTACT US </a></li>
        </ul>
    </nav>
    </header>

<?php
    $db = mysqli_connect("studentdb-maria.gl.umbc.edu","sarge1","sarge1","sarge1");
    
    if (mysqli_connect_errno())
        exit("Error - could not connect to MySQL");
        
    $Username = htmlspecialchars($_POST['Username']);
    $Password = htmlspecialchars($_POST['Password']);
    $Email = htmlspecialchars($_POST['Email']);
    $FirstName = htmlspecialchars($_POST['FirstName']);
    $LastName = htmlspecialchars($_POST['LastName']);
    $CreditCard = htmlspecialchars($_POST['CreditCardNumber']);
    $CVC = htmlspecialchars($_POST['CVC']);
    $Address = htmlspecialchars($_POST['Address']);
    $Zipcode = htmlspecialchars($_POST['ZipCode']);
    $PhoneNum = htmlspecialchars($_POST['PhoneNumber']);
    $CardName = htmlspecialchars($_POST['Name']);

    $Username = mysqli_real_escape_string($db, $Username);
    $Password = mysqli_real_escape_string($db, $Password);
    $Email = mysqli_real_escape_string($db, $Email);
    $FirstName = mysqli_real_escape_string($db, $FirstName);
    $LastName = mysqli_real_escape_string($db, $LastName);
    $CreditCard = mysqli_real_escape_string($db, $CreditCard);
    $CVC = mysqli_real_escape_string($db, $CVC);
    $Address = mysqli_real_escape_string($db, $Address);
    $Zipcode = mysqli_real_escape_string($db, $Zipcode);
    $PhoneNum = mysqli_real_escape_string($db, $PhoneNum);
    $CardName = mysqli_real_escape_string($db, $CardName);

    $constructed_query = "INSERT INTO UserRegDB (Username, Password, Email, FirstName, LastName, CreditCardNum, ZipCode, PhoneNumber, BillingAddress, CVC, NameOnCard)"
    . "  values ('$Username', '$Password', '$Email', '$FirstName', '$LastName', '$CreditCard', '$Zipcode', '$PhoneNum', '$Address', '$CVC', '$CardName')";
    $result = mysqli_query($db, $constructed_query);
?>  
    <p style="font-size: 20px">
        Congratulations! You have successfully created your account! You may now <a href="login.html">login.</a>
    </p>


</body>
</html>