
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation');
	var form = forms[0];
  
	form.addEventListener('submit', function (event) {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
	}, false);

	var requirements = {
		onlyLetters: /^[a-zA-Z]+$/,
		onlyNumbers: /^[0-9]+$/,
		NumbersAndLetters: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()-_+=?]+$/,
		onlyEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


	// Validate fields entered by the user: name, phone, password, and email
	var inputs = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];
	inputs.forEach(input => {
		input.required = true;
		if (input.value == "") {
			input.classList.remove('is-valid');
			input.classList.add('is-invalid');
			error++;
		}
		else {
			input.classList.remove('is-invalid');
			input.classList.add('is-valid');
		}
		if (input.value.length < 3) {
			input.classList.remove('is-valid');
			input.classList.add('is-invalid');
			error++;
		}
		else {
			input.classList.remove('is-invalid');
			input.classList.add('is-valid');
		}
	});
	

	if(!(requirements.onlyLetters.test(fName.value)) || /\d/.test(fName.value)){
		fName.classList.remove('is-valid');
		fName.classList.add('is-invalid');
		error++;
	} else {
		fName.classList.remove('is-invalid');
		fName.classList.add('is-valid');
	}

	if(!(requirements.onlyLetters.test(fLastN.value))){
		fLastN.classList.remove('is-valid');
		fLastN.classList.add('is-invalid');
		error++;
	} else {
		fLastN.classList.remove('is-invalid');
		fLastN.classList.add('is-valid');
	}

	if(!(requirements.onlyNumbers.test(fPhone.value)) || fPhone.value.length != 9) {
		fPhone.classList.remove('is-valid');
		fPhone.classList.add('is-invalid');
		error++;
	} else {
		fPhone.classList.remove('is-invalid');
		fPhone.classList.add('is-valid');
	}

	if(!(requirements.NumbersAndLetters.test(fPassword.value))) {
		fPassword.classList.remove('is-valid');
		fPassword.classList.add('is-invalid');
		error++;
	} else {
		fPassword.classList.remove('is-invalid');
		fPassword.classList.add('is-valid');
	}

	if(!(requirements.onlyEmail.test(fEmail.value))) {
		fEmail.classList.remove('is-valid');
		fEmail.classList.add('is-invalid');
		error++;
	} else {
		fEmail.classList.remove('is-invalid');
		fEmail.classList.add('is-valid');
	}
	

	if(error>0){
		inputs.forEach(input => {
			if (input.classList.contains('is-invalid')) input.value = "";
		});
	}
	
}
