window.onload=pageLoad;

function pageLoad(){
	document.getElementById("formdisplayinfo").onsubmit=validate;
}


function validate() {

	var retvalue;
	retvalue = check_login();  //calls the function
	if(retvalue == false) {   //if the function returns false(name is empty) then calls the function again
			return retvalue;
		}
  }


  function check_login(){

  	var uname=document.getElementById("username").value;
    var passwordvalue=document.getElementById("password").value;

    if(uname == ""){
  		alert("Please enter the username");
			document.getElementById("username").select();

   		return false;
  	}

    if(passwordvalue == ""){
      alert("Please enter the password");
			document.getElementById("password").select();

      return false;
    }

}
