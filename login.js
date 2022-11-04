function validate(){
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
if(userid=='Vanita'&& password=='radhe'){
     
     alert("Login successfully");
     window.open("indexnew.html");
    }
    else{
     
        alert("Login failed");
        window.open("trial/login.html");
    }
}