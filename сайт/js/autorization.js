var username; 
var email; 
var password; 
//var phone_number;
var password_confirmation; 
var name_error; 
var email_error; 
var password_error; 
var phone_number_error;


function init() { 
	username = document.forms["regform"]["username"]; 
	email = document.forms["regform"]["email"]; 
	password = document.forms["regform"]["password"]; 
	password_confirmation = document.forms["regform"]["password_confirmation"]; 
	//phone_number = document.forms["regform"]["phoneNumber"];
	name_error = document.getElementById("name_error"); 
	email_error = document.getElementById("email_error"); 
	password_error = document.getElementById("password_error");
	phone_number_error = document.getElementById("error_phoneNumber"); 
	username.addEventListener("blur", nameVerify, true); 
	email.addEventListener("blur", emailVerify, true); 
	password.addEventListener("blur", passwordVerify, true); 
	//phoneNumber.addEventListener("blur", numberVerify, true);
} 

function registerValidation() { 
	init(); 
	if (username.value == "") { 
		username.style.border = "1px solid red"; 
		//name_error.textContent = "Введите имя пользователя"; 
		alert("Введите имя пользователя");
		username.focus(); 
		return false; 
	} 
	if(!isName()){
		username.style.border = "1px solid red"; 
		//name_error.textContent = "Имя пользователя должно начинаться с буквы и содержать только цифры и буквы";
		alert("Имя пользователя должно начинаться с буквы и содержать только цифры и буквы") 
		username.focus(); 
		return false; 
	}
// if (email.value == "") { 
	if (!isEmail(email.value)) { 
		email.style.border = "1px solid red"; 
		//email_error.textContent = "Некорректный e-mail"; 
		alert("Некорректный e-mail");
		email.focus(); 
		return false; 
	}  
	/*if(phoneNumber.value=="") { 
		phoneNumber.style.border = "1px solid red"; 
		//error_phoneNumber.textContent = "Введите номер телефона"; 
		alert("Введите номер телефона");
		phoneNumber.focus(); 
		return false; 
	}*/
	/*if(!isPhoneNumber()) { 
		phoneNumber.style.border = "1px solid red"; 
		//error_phoneNumber.textContent = "Некорректный номер телефона"; 
		alert("Некорректный номер телефона");
		phoneNumber.focus(); 
		return false; 
	}*/
	if (password.value == "") { 
		password.style.border = "1px solid red"; 
		//password_error.textContent = "Введите пароль"; 
		alert("Введите пароль");
		password.focus(); 
		return false; 
	} 
	if(!isPassword()){
		password.style.border = "1px solid red"; 
		//password_error.textContent = "Пароль должен содержать не менее 8 символов, строчные и прописные буквы, цифры"; 
		alert("Пароль должен содержать не менее 8 символов, строчные и прописные буквы, цифры");
		password.focus(); 
		return false; 
	}
	if (password.value != password_confirmation.value) { 
		password.style.border = "1px solid red"; 
		password_confirmation.style.border = "1px solid red"; 
		//password_error.innerHTML = "Пароли не совпадают"; 
		alert("Пароли не совпадают");
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
function isName(){
	var re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
	return re.test(username.value);
}
function isPassword(){
	var re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	return re.test(password.value);
}
function nameVerify() { 
	if (isName()) { 
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
	if (isPassword()) { 
		password.style.border = "1px solid #cccccc"; 
		password_error.innerHTML = ""; 
		return true; 
	}
}

/*function numberVerify(){
	if(isPhoneNumber()){
		phone_number.style.border = "1px solid #cccccc"; 
		error_phoneNumber.innerHTML = ""; 
		return true; 
	}
} */
/*function isPhoneNumber(){
	var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	return re.test(phoneNumber.value);
}*/

jQuery(function ($) { 
	$(function() { 
		function maskPhone() { 
			var country = $('#country option:selected').val(); 
			switch (country) { 
				case "ru": 
				$("#phone").mask("+7 (9nn) nnn-nn-nn"); 
				break; 
				case "ua": 
				$("#phone").mask("+380 (nn) nnn-nn-nn"); 
				break; 
				case "by": 
				$("#phone").mask("+375 (nn) nnn-nn-nn"); 
				break; 
				case "kz6": 
				$("#phone").mask("+7 (6nn) nnn-nn-nn"); 
				break; 
				case "kz7": 
				$("#phone").mask("+7 (7nn) nnn-nn-nn"); 
				break; 
			} 
		} 
		maskPhone(); 
		$('#country').change(function() { 
			maskPhone(); 
		});
	}); 
});
