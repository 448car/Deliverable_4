<!DOCTYPE html>
<head>
	<title>Registered User</title>
      <?php echo  '<link rel="stylesheet" href="styles/home.css" type="text/css"/>' ?>

</head>

<body>
    <div class="titleBorder">
             <img class ="logo" src="images/logo.png" alt="">
                 <h1>CarKeys</h1>
        </div>
        <div>
     	<table>
    	   <tr>
                <td><a href="index.html">HOME</a></td>
                <td><a href="aboutpage.html">ABOUT US</a></td>
                <td><a href="car-selection.html">VIEW CARS</a></td>
                <td><a href="login.html">LOGIN</a></td>
                <td><a href="UserReg.html">CREATE AN ACCOUNT</a></td>
                <td><a href="contactus.html">CONTACT US</a></td>
            </tr>
    	</table>
    </div>
<?php
    $db = mysqli_connect("studentdb-maria.gl.umbc.edu","sarge1","sarge1","sarge1");

        if (mysqli_connect_errno()){
            exit("Error - could not connect to MySQL");}
            
            
        $commentUsername =$_POST['Username'];
        $commentPassword = $_POST['Password'];
        $commentEmail = $_POST['Email'];
        $commentFirstName = $_POST['FirstName'];
        $commentLastName = $_POST['LastName'];
        $commentCreditCard = $_POST['CreditCardNumber'];
        $commentCVC = $_POST['CVC'];
        $commentAddress = $_POST['Address'];
        $commentZipcode = $_POST['ZipCode'];
        $commentPhoneNum = $_POST['PhoneNumber'];
        $commentCardName = $_POST['Name'];
        
?>
    
<?php 
$constructed_query = "INSERT INTO UserRegDB (Username, Password, Email, FirstName, LastName, CreditCardNum, ZipCode, PhoneNumber, BillingAddress, CVC, NameOnCard)"
        . "  values ('$commentUsername', '$commentPassword', '$commentEmail', '$commentFirstName', '$commentLastName', '$commentCreditCard', '$commentZipcode', '$commentPhoneNum', '$commentAddress', '$commentCVC', '$commentCardName')";
$result = mysqli_query($db, $constructed_query);
?>
    <div class="center">
    <p>
        Congratulations! You have successfully created your account! You may now <a href="login.html">login.</a>
    </p>
    </div>
    
</body>


