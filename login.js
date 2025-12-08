let btn=document.getElementById("submit");
btn.addEventListener("click",function(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");

    if(name.value=="" || email.value=="" || password.value==""){
        alert("Please fill all the details");
    }else{
        alert("Form submitted successfully");
    }
});
