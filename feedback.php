<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

<title> Create Post </title>
<link rel="stylesheet" type="text/css" href="feedbackphp.css" />
</head>
<body>
  <h1> Customers Feedbacks <h1>
    <?php
    #connect to mysql database
    $db = mysqli_connect("studentdb-maria.gl.umbc.edu","sarge1","sarge1","sarge1");

    if (mysqli_connect_errno())
    exit("Error - could not connect to MySQL");

    #get the parameter from the HTML form that this PHP program is connected to
    #since data from the form is sent by the HTTP POST action, use the $_POST array here

   $feedbackname = $_POST['name'];
    $feedbackcomment = $_POST['comment'];
     ?>

    <?php

    $constructed_query = "INSERT INTO feedback (name, comment) values ('$feedbackname', '$feedbackcomment')";

    $result = mysqli_query($db, $constructed_query);

    ?>

    <?php
    #construct a query
    #query should look like this:



    $constructed_query = "SELECT * FROM feedback";

    #sanity check: print query to see if constructued query is correct

    #Execute query
    $result = mysqli_query($db, $constructed_query);



    #if result object is not returned, then print an error and exit the PHP program
    if(! $result){
    print("Error - query could not be executed");
    $error = mysqli_error();
    print "<p> . $error . </p>";
    exit;
    }
    ?>

      <?php
     $num_rows = mysqli_num_rows($result);


     $num_fields = mysqli_num_fields($result);


    ?>


    <?php
    for($row_num = 1; $row_num <= $num_rows; $row_num++){
    print("<div>");
    $row_array = mysqli_fetch_array($result);
    print("<br>Name: $row_array[name]</br>
    <p> Customer:$row_array[comment]</p>");
     print("</div>");
    }
    ?>

    <h1><a href = "feedback.html"> Enter another feedback </a></h1>

</body>
</html>
