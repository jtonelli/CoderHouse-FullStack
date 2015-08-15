window.addEventListener('load', function(){
	var form = document.querySelector('.registro');
	form.addEventListener('submit', function(e){
		e.preventDefault();

		if(!this.email.value){
			alert('No hay email');
		}else if(!this.password.value){
			alert('No hay password');
		}
		else{
			document.querySelector('div').innerHTML = 'Todo Bien!!';
		}

		//console.log(this.email.value);

	})
})