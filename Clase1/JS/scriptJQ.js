$('#Submit').on('click', function(event){
	//validar nombre 
	let $name = $('#name');
	let $name_error = $('#name_error');

	if($name.val() == '') {
		$name_error.removeClass('hidden'); 
	} else {
		$name_error.addClass('hidden');
	}

	//validar email
	let $email = $('#email');
	let $email_error = $('#email_error');

	if($email.val() == '') {
		$email_error.removeClass('hidden'); 
	} else {
		$email_error.addClass('hidden');
		if(valida_email($email.val()) ) {
			$email_error.addClass('hidden');
		} else {
			$email_error.textContent = 'Tu email no es valido';
		}
	}

	//validar passwords
	let $password = $('#password');
	let $password_error = $('#password_error');

	if($password.val() == '') {
		$password_error.removeClass('hidden'); 
	} else {
		$password_error.addClass('hidden');
	}

	let $password_confirmation = $('#password_confirmation');
	let $password_confirmation_error = $('#password_confirmation_error');

	if($password_confirmation.val() == '') {
		$password_confirmation_error.removeClass('hidden'); 
	} else {
		if(password_confirmation.val() != password.val()) {
			$password_confirmation_error.textContent = 'Los passwords no hacen match';
		} else {
			$password_confirmation_error.addClass('hidden');
		}
	}

	//validar country
	let $country = $('#country');
	let $country_error = $('#country_error');

	if($country.val() == 0) {
		$country_error.removeClass('hidden'); 
	} else {
		$country_error.addClass('hidden');
	}

	//validar gender
	let $gender_error = $('#gender_error');
	if ( $('input[name=gender]').is(':checked') ) {
		$gender_error.addClass('hidden');
	} else {
		$gender_error.removeClass('hidden');
	}

})
	$('menu > li').click( function(event){
		//removerla seleccion
		$('.selected').removeClass('selected');
		//seleccionar el nuevo nav element
		let $current_element = $(this)
		let $section_name = $current_element.attr('id')
		$current_element.addClass('selected')

		//ocultar
		$('section').addClass('hidden')
		//mostrar la seleccionada
		$('#' + '$section_name' + '_section').removeClass('hidden');

	}) 
	function valida_email(email) {
		var regexp_email = /\S+@\S+\.\S+/;
		return regexp_email.test(email);
	}