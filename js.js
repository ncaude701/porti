function handformsubmi() {
  //form or contactme are same
	  let x = document.forms["form"]["names"].value;
    let y=document.forms["form"]["mail"].value;
    let z=document.forms["form"]["subject"].value;
	  let t=document.forms["form"]["message"].value;
  if (x == "") {
    alert("Fill Name Please");
    return false;
  }
  else if(y == ""){
  	alert("Fill Email Please");
  	return false;
  }
  else if(x == ""){
    alert("Fill Subject Please");
    return false;
  }
  else if(t == ""){
    alert("Fill Message Please");
    return false;
  }
  else{
  	
  	return true;
  }

}