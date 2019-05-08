window.onload = pageLoad;
function pageLoad(){

  document.getElementById("submit").onclick=chkData;
}

function chkData() {
  var fname_value = document.getElementById("fname").value;
  var lname_value = document.getElementById("lname").value;
  var email_value = document.getElementById("email").value;
  var subject_value = document.getElementById("subject").value;
  var textarea_value = document.getElementById("textarea").value;

  if (fname_value == "")
  {
    alert("You did not enter first name. Please enter first name now.");
     document.getElementById("fname").select();
    return false;
  }

  if (lname_value == "")
  {
    alert("You did not enter last name. Please enter last name now");
    document.getElementById("lname").select();
    return false;
  }

  if (email_value == "")
  {
    alert("You did not enter Email. Please enter email now");
    document.getElementById("email").select();
    return false;
  }
  if (subject_value == "")
  {
    alert("You did not enter subject. Please enter subject now");
    document.getElementById("subject").select();
    return false;
  }
  if (textarea_value == "")
  {
    alert("You did not enter any message. Please enter message now");
    document.getElementById("textarea").select();
    return false;
  }

  var pattern1 = /\S+@\S+\.\S+/;
  	var result = pattern1.test(email_value);


  	if (result==false)
  	{

  		alert("The email you entered is not in the correct form. Please go back and fix your email");
  	document.getElementById("email").select();

  		return false;
  	}


}








/* window.onload = pageLoad;

function pageLoad()
{
  document.getElementById("submit").onclick=validate;
}


funciton validate()
{
  var retvalue;
  retvalue= check_contactus();
  if(retvalue == false){
    return retvalue;
  }
}

function check_contactus()
{
  var firstname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;


  if(firstname == ""){
    alert("Please enter First name");
    return false;
  }

  if(firstname == ""){
    alert("Please enter First name");
    return false;
  }

  if(firstname == ""){
    alert("Please enter First name");
    return false;
  }
}
*/
