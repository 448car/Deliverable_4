<!--
     IS 448 Group project: Car reservation system
			Author: Dakota Sargent
-->
<!DOCTYPE html>
<html>

<head>
	<title>User Registration</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles/common-style.css" type="text/css" />
	<link rel="stylesheet" href="styles/login.css" type="text/css" />		
	<script src="UserReg.js" type="text/javascript">

</script>


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
  <main>
    <!--Form for the inputs to create an account.
        If any of these, other than newsletter, are not completed it should not accept the confirm.-->
		
    ​<form name="UserRegForm" action="UserReg.php" onsubmit="return validate()" method="post" id="submit">
      Username: <br />
      <input type="text" name="Username" value="" >
      <br /> <br />
      New Password: <br />
      <input type="text" name="Password" value="" >
      <br /> <br />  
      Confirm Password: <br />
      <input type="text" name="confirmPassword" value="" >
      <br /> <br />
      Email:<br />
      <input type="text" name="Email" value="" >
      <br /> <br />
      First Name:<br />
      <input type="text" name="FirstName" value="" >
      <br /> <br />
      Last Name: <br />
      <input type="text" name="LastName" value="" >
      <br /> <br />
      <br />
      <span class="bold">Billing Information</span>
      <br /> <br />
      Name as it Appears on the Card:<br />
      <input type="text" name="Name" value="" >
      <br /><br />
      Credit Card Number: <br />
      <input type="text" name="CreditCardNumber" value="" >
      <br /> <br />
      Card Expiration: <br />
      <select name='expireMM'>
        <option value=''>Month</option>
        <option value='01'>January</option>
        <option value='02'>February</option>
        <option value='03'>March</option>
        <option value='04'>April</option>
        <option value='05'>May</option>
        <option value='06'>June</option>
        <option value='07'>July</option>
        <option value='08'>August</option>
        <option value='09'>September</option>
        <option value='10'>October</option>
        <option value='11'>November</option>
        <option value='12'>December</option>
      </select>

      <select name='expireYY'>
        <option value=''>Year</option>
        <option value='19'>2019</option>
        <option value='20'>2020</option>
        <option value='21'>2021</option>
        <option value='22'>2022</option>
        <option value='23'>2023</option>
        <option value='24'>2024</option>
        <option value='25'>2025</option>
        <option value='26'>2026</option>
        <option value='27'>2027</option>
        <option value='28'>2028</option>
        <option value='29'>2029</option>
        <option value='30'>2030</option>
      </select>
      <input type="hidden" name="expire">
      <br /><br />
      CVC: <br />
      <input type="text" name="CVC" value="" >
      <br /><br />
	  Zip Code: <br />
      <input type="text" name="ZipCode" value="" >
      <br /><br />
	  City: <br />
      <input type="text" name="City" value="" >
      <br /><br /> 
	  State: <br />
      <input type="text" name="State" value="" >
      <br /><br />
      Billing Address: <br />
      <input type="text" name="Address" value="" >
      <br /> <br />
      Phone Number: <br />
      <input type="text" name="PhoneNumber" value="" >
      <br /> <br />
      <input type="checkbox" name="Newsletter" value="Newsletter" checked>
      I would like to subscribe to the CarKeys newsletter!
      <br /> <br />
      <input type="checkbox" name="UserAgree" value="UserAgree" required>
      I have read and agree to the <a href="useragreement.html">user agreement. </a>
      <br /> <br />
      <input type="submit" value="Submit">
      <br />    
    </form>
	
  </main>

</body>

</html>
