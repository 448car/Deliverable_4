
	function validate() {
		/*check if empty*/
	var x = document.forms["UserRegForm"]["Username"].value;
	if (x === "") {
		alert("Please fill out username field.");
		return false;
	}
	/*check if empty*/
	var y = document.forms["UserRegForm"]["Password"].value;
	if (y === "") {
		alert("Please fill out a new Password field.");
		return false;
	}
	/*check if empty*/
	var z = document.forms["UserRegForm"]["confirmPassword"].value;
	if (z === "") {
		alert("Please confirm your new Password field.");
		return false;
	}
	/* Passwords need to match*/
	if (z !== y) {
		alert("Passwords don't match!")
		return false;
	}
	/*check if empty*/
	var a = document.forms["UserRegForm"]["Email"].value;
	if (a === "") {
		alert("Please provide us with your email..");
		return false;
	}
	/*check if empty*/
	var qq = document.forms["UserRegForm"]["FirstName"].value;
	if (qq === "") {
		alert("Please tell us your first name.");
		return false;
	}
	/*check if empty*/
	var q = document.forms["UserRegForm"]["LastName"].value;
	if (q === "") {
		alert("Please tell us your last name.");
		return false;
	}
	/*check if empty*/
	var w = document.forms["UserRegForm"]["Name"].value;
	if (w === "") {
		alert("Please fill out your name as it appears on the card.");
		return false;
	}
	/*check if empty*/
	var t = document.forms["UserRegForm"]["CreditCardNumber"].value;
	if (t === "") {
		alert("Please enter a credit card number.");
		return false;
	}
	/*check if empty*/
	var g = document.forms["UserRegForm"]["CVC"].value;
	if (g === "") {
		alert("Please enter a CVC number.");
		return false;
	}
	/*check if CVC is correct length*/
	var gg = g.length;
	if (gg !== 3){
		alert("Incorrect CVC");
		return false;
	}
	/*check if empty*/
	var no = document.forms["UserRegForm"]["Address"].value;
	if (no === "") {
		alert("Please enter your billing address.");
		return false;
	}
	/*check if empty*/
	var yes = document.forms["UserRegForm"]["Zipcode"].value;
	if (yes === "") {
		alert("Please enter your Zipcode.");
		return false;
	}
	/*check if empty*/
	var yarr = document.forms["UserRegForm"]["PhoneNumber"].value;
	if (yarr === "") {
		alert("Please fill out your phone number.");
		return false;
	}
}


