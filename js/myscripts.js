var check = function() {
    var z=document.getElementById("regi");
  if (document.getElementById('myInput').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
      z.disabled=false;
  } else {

    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not Matching';
      z.disabled=true;
  }
}

function myFunction() {
  var x = document.getElementById("myInput");
  var y=document.getElementById("confirm_password");

  if (x.type === "password" ) {
    x.type = "text";
    y.type="text";

  } else {
    x.type = "password";
    y.type='password';
  }
}
