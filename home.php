<!--
     IS 448 Group project: Car reservation system

      php File for the home page
			Author: Deviga Valiyil
-->


<!DOCTYPE html>
<html lang="en">
<head>
<title> Home </title>
<meta charset="UTF-8">
<link rel="stylesheet" href="home.css" type="text/css"/>
</head>

<body>

  	<div class="titleBorder">
      <img class ="logo" src="logo.png"
  		<h1>CarKeys <br>
  		<span class="tagline">Reserve your car today!</span></h1>
  	</div>

<!--   -->

    <div>
     			<table>
    		    <tr>
    		      <td>HOME</td>
    		      <td>ABOUT US</td>
    		      <td>VIEW CARS</td>
    		      <td>LOGIN</td>
    		      <td>CONTACT US</td>
     		    </tr>
    		  </table>
    </div>


<div class="loginwelcome">

<?php
session_start();
    echo "Welcome {$_SESSION['username']}";
?>

</div>

    <div class="blueborder">
      <div>
    		<img class ="imgfloat" src="car2.jpg"  />
        <h2><span class="subtitles">MG 1967
        </span></h2>

    	<p span class="secondtag">
        ~~Get the CarKeys to this beauty~~
    	</p>

 </div>




</body>
</html>
