window.onload=pageLoad;

function pageLoad(){
	document.getElementById("submit").onclick= validate;
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
   		return false;
  	}

    if(passwordvalue == ""){
      alert("Please enter the password");
      return false;
    }

}
