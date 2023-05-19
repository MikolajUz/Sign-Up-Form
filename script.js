
const first_name=document.getElementById('first_name'); 
const last_name=document.getElementById('last_name'); 
const email=document.getElementById('email');
const phone_number=document.getElementById('phone_number');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirm_password');

const first_name_warn=document.getElementById('first_name_warn');
const last_name_warn=document.getElementById('last_name_warn');
const email_warn=document.getElementById('email_warn');
const phone_number_warn=document.getElementById('phone_number_warn');
const password_warn=document.getElementById('password_warn');
const confirm_password_warn=document.getElementById('confirm_password_warn');

first_name.addEventListener('change',nameCheck);
last_name.addEventListener('change',lastNameCheck)
email.addEventListener('change',emailCheck)
phone_number.addEventListener('change',phoneNumberCheck)
password.addEventListener('change',passwordCheck)
confirm_password.addEventListener('change',confirmPasswordCheck)


function nameCheck(){
    if(/[^A-Za-z]/.test(first_name.value)){
        first_name_warn.textContent='Only latin letters please';
    }
    else{
        first_name_warn.textContent='';
    }
}

function lastNameCheck(){
    if(/[^A-Za-z]/.test(last_name.value)){
        last_name_warn.textContent='Only latin letters please';
    }
    else{
        last_name_warn.textContent='';
    }
}
function emailCheck(){
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        email_warn.textContent='Please enter valid email';
    }
    else{
        email_warn.textContent='';
    }
   
}

function phoneNumberCheck(){
    if(phone_number.value.length!=9){
        
        phone_number_warn.textContent='Please enter valid phone number(9 digit)';
    }
    else{
        phone_number_warn.textContent='';
    }
}


function passwordCheck(){
    let temp=0;

    
    if (password.value.length < 8) {
        password_warn.textContent=`Please enter at least 8 characters`; 
        temp++;
    }
    if (password.value.search(/[a-z]/i) < 0) {
        if(temp){
        password_warn.textContent +='\r\n Please enter at least one letter';
        }
        else{
            password_warn.textContent='Please enter at least one letter';
            temp++;
        }
        
    }
    if (password.value.search(/[0-9]/) < 0) {
        if(temp){
            password_warn.textContent +='\r\n Please enter at least one digit';
            }
            else{
                password_warn.textContent = 'Please enter at least one digit';
                temp++;
            }
    }
    if (password.value.search(/[!@#$%^&*]/) < 0) {
        if(temp){
            password_warn.textContent +='\r\n Please enter at least one special character';
            }
            else{
                password_warn.textContent = 'Please enter at least one special character';
                temp++;
            }
       
    }
    if(temp===0){
        password_warn.textContent='';
    }

}

function confirmPasswordCheck(){
        if(password.value!==confirm_password.value){
            confirm_password_warn.textContent='Password do not match';
        }
        else{
            confirm_password_warn.textContent='';
        }
}