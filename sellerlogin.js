function validate(){
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
if(userid=='Vanita'&& password=='radhe'){
    
     alert("Login successfully");
     window.open("seller.html");
    }
    else{
        // window.location.assign("trial/login.html");
        alert("Login failed");
        window.open("trial/sellerlogin.html");
     
    }
}