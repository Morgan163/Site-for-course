var username; 
var email; 
var password; 
var password_confirmation; 
var name_error; 
var email_error; 
var password_error; 

function init() { 
username = document.forms["regform"]["username"]; 
email = document.forms["regform"]["email"]; 
password = document.forms["regform"]["password"]; 
password_confirmation = document.forms["regform"]["password_confirmation"]; 
name_error = document.getElementById("name_error"); 
email_error = document.getElementById("email_error"); 
password_error = document.getElementById("password_error"); 
username.addEventListener("blur", nameVerify, true); 
email.addEventListener("blur", emailVerify, true); 
password.addEventListener("blur", passwordVerify, true); 
} 

function registerValidation() { 
init(); 
if (username.value == "") { 
username.style.border = "1px solid red"; 
name_error.textContent = "Введите имя пользователя"; 
username.focus(); 
return false; 
} 
// if (email.value == "") { 
if (!isEmail(email.value)) { 
email.style.border = "1px solid red"; 
email_error.textContent = "Некорректный e-mail"; 
email.focus(); 
return false; 
} 
if (password.value == "") { 
password.style.border = "1px solid red"; 
password_error.textContent = "Введите пароль"; 
password.focus(); 
return false; 
} 
if (password.value != password_confirmation.value) { 
password.style.border = "1px solid red"; 
password_confirmation.style.border = "1px solid red"; 
password_error.innerHTML = "Пароли не совпадают"; 
return false; 
} 
if (password.value == password_confirmation.value) { 
password.style.border = "1px solid #cccccc"; 
password_confirmation.style.border = "1px solid #cccccc"; 
password_error.innerHTML = ""; 
return false; 
} 
// if (!isEmail(email.value)) { 
// email.style.border = "1px solid red"; 
// email_error.textContent = "Некорректный e-mail"; 
// email.focus(); 
// return false; 
// } 

} 

function isEmail(email) { 
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
return re.test(email); 

} 

function nameVerify() { 
if (username.value != "") { 
username.style.border = "1px solid #cccccc"; 
name_error.innerHTML = ""; 
return true; 
} 
} 

function emailVerify() { 
//if (email.value != "") { 
if(isEmail(email.value)){ 
email.style.border = "1px solid #cccccc"; 
email_error.innerHTML = ""; 
return true; 
} 
} 

function passwordVerify() { 
if (password.value != "") { 
password.style.border = "1px solid #cccccc"; 
password_error.innerHTML = ""; 
return true; 
} 
}