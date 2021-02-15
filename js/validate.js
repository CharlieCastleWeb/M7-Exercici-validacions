
const searchform = document.getElementById("searchForm");
const sesionform = document.getElementById("formularioSesion");
const registerform = document.getElementById("formularioRegistro");
var acumErrores;

function validateSesion() {
    acumErrores = 0;

    sesionform.classList.remove("is-invalid");

    var inputEmail = document.getElementById("sesionInputEmail");
    var inputPassword = document.getElementById("sesionInputPassword")

    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

function validateRegistro() {
    acumErrores = 0;
    console.log(acumErrores);
    registerform.classList.remove("is-invalid");

    var registroInputEmail = document.getElementById("registroInputEmail");
    var registroInputPassword = document.getElementById("registroInputPassword");
    var inputConfirm = document.getElementById("registroConfirmPassword");
    var inputProvincia = document.getElementById("inputProvincia");
    var inputCondiciones = document.getElementById("registroCondiciones");
    
    if(registroInputEmail.value == "") {
		registroInputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailRegistro").textContent = "Este campo es obligatorio";
        acumErrores++;
    }else if(!validar_email(registroInputEmail.value)){
		registroInputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailRegistro").textContent = "El email no cumple el formato";
		acumErrores++;
	}
    
    if(registroInputPassword.value == "") {
        registroInputPassword.classList.add("is-invalid");
		document.getElementById("errorPasswordRegistro").textContent = "Este campo es obligatorio";
		acumErrores++;
	} else if (!validar_password(registroInputPassword.value)) {
        registroInputPassword.classList.add("is-invalid");
		document.getElementById("errorPasswordRegistro").textContent = "La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número";
		acumErrores++;
    }

    if(inputConfirm.value == "") {
		inputConfirm.classList.add("is-invalid");
		document.getElementById("errorConfirmRegistro").textContent = "Este campo es obligatorio";
		acumErrores++;
	} else if (inputConfirm.value != registroInputPassword.value) {
        inputConfirm.classList.add("is-invalid");
		document.getElementById("errorConfirmRegistro").textContent = "No coincide con el password indicado";
		acumErrores++;
    }

    if(inputProvincia.value == "") {
		inputProvincia.classList.add("is-invalid");
		document.getElementById("errorProvincia").textContent = "Este campo es obligatorio";
		acumErrores++;
	}
    
    if(!inputCondiciones.checked) {
		inputCondiciones.classList.add("is-invalid");
		document.getElementById("errorCondiciones").textContent = "Debes aceptar las condiciones.";
		acumErrores++;
	}
    console.log(acumErrores);
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

function validateSearch() {
    acumErrores = 0;

    searchform.classList.remove("is-invalid");

    var searchInput = document.getElementById("searchInput");
    
    console.log(searchInput.value.length);

    if (searchInput.value.length < 3) {
        searchInput.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "Introduce al menos tres carácteres";
        acumErrores ++;  
    } else {
        acumErrores = 0;
        searchform.classList.remove("is-invalid");
        document.getElementById("errorSearch").textContent = "";
        // Realiza búsqueda
    }
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

sesionform.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //validateSesion();
}, true);

registerform.addEventListener('blur', (event) => {
	console.log(event);
    if(event.target.value!='') event.target.classList.remove('is-invalid');
    validateRegistro()
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password) ? true : false;
}