

let btnSubmit = document.getElementById('Submit')

btnSubmit.addEventListener('click', function()  { 
	let name = document.getElementById('name')
	let name_error = document.getElementById('name_error')
	if(name.value == "") {
		name_error.classList.remove('hidden')
	} else {
		name_error.classList.add('hidden')
	}

	let email = document.getElementById('email')
	let email_error = document.getElementById('email_error')
	if(email.value == "") {
		email_error.textContent = 'Error el mail no puede estar vacio'
		email_error.classList.remove('hidden')
	} else {										// No esta vacio pero tengo que checar que sea valido
		if(valida_email(email.value) ) {
			email_error.classList.add('hidden') 
		} else {
			email_error.textContent = 'Tu email no es valido'
		}
	}

	let password = document.getElementById('password')
	let password_error = document.getElementById('password_error')
	if(password.value == "") {
		password_error.textContent = 'Error el password no puede estar vacio'
		password_error.classList.remove('hidden')
	} else {
		password_error.classList.add('hidden')
	}

	let password_confirmation = document.getElementById('password_confirmation')
	let password_confirmation_error = document.getElementById('password_confirmation_error')

	if(password_confirmation.value != password.value) {
		password_confirmation_error.textContent = 'Error los password no hacen match'
		password_confirmation_error.classList.remove('hidden')
	} else {
		password_confirmation_error.classList.add('hidden')
	}

	let country = document.getElementById('country')
	let country_error = document.getElementById('country_error')

	if(country.value == 0 ) {
		country_error.classList.remove('hidden')
	} else {
		country_error.classList.add('hidden')
	}

	let radios = document.getElementsByName('gender')
	let gender_error = document.getElementById('gender_error')

	let flag = false;
	let i;
	for(let i = 0; i<radios.length; i++) {
		if(radios[i].checked ) {
			flag = true;
		}
	}

	if(!flag) {
		gender_error.classList.remove('hidden')
	} else {
		gender_error.classList.add('hidden')
	}
})

	function valida_email(email) {
		var regexp_email = /\S+@\S+\.\S+/;
		return regexp_email.test(email);
	}