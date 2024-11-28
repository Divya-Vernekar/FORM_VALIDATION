function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = " ";
    }

}
function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;


}
function validateForm(){
    let returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","*Length of name is too short");
        returnval = false;
    }
    if(name.length == 0){
        seterror("name","*Length of name cannot be zero!");
        returnval = false;

    }
    var email = document.forms['myForms']["femail"].value;
    if(email.length>15){
        seterror("email","*email length is too long");
        returnval = false;
    }
    var phone = document.forms['myForms']["fphone"].value;
    if(phone.length!=10){
        seterror("phone","*phone number should be 10 digit");
        returnval = false;
    }
    var password = document.forms['myForms']["fpass"].value;
    if(password.length<6){
        seterror("pass","*password should be atleast 6 characters long!");
        returnval = false;
    }
    var cpassword = document.forms['myForms']["fcpass"].value;
    if(cpassword!=password){
        seterror("cpass","*password and Confirm password should match!");
        returnval = false;
    }
    return returnval;


    }
