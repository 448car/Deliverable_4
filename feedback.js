window.onload=pageLoad;

function pageLoad(){
	document.getElementById("submit").onclick= validate;

}

function validate(){

var value;
value = emptycheck();
if(value == false){
  return value;
}

} // end of validate function

function emptycheck(){

	var namevalue = document.getElementById("name").value;
	var commentvalue = document.getElementById("comment").value;

if(namevalue == ""){
	 alert("Name is empty. Re-enter");
		return false;
}

if(commentvalue == ""){
alert("Comment is empty. Re-enter");
	return false;
}

} // end of emptycheck function
