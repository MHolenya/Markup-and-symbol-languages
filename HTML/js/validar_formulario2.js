function validarFormulario() {
			// Vamos a validar el formulario, con todos los campos obligatorios
			//if(document.formulario.nombre_txt.value=="") {
				//alert("Por favor, rellene el campo nombre");
				// Ponemos el foco en nombre_txt
				//document.formulario.nombre_txt.focus();
			var primer_caracter=document.formulario.telefono_txt.value.substr(0, 1);
			alert("Todo funcionando");
			if (document.formulario.nombre_txt.value.length<2) {
				alert("El nombre debe tener al menos 2 caracteres")
				document.formulario.apellidos_txt.focus();
			} else if (document.formulario.apellidos_txt.value=="") {
				alert("Por favor, rellene el campo apellidos");
				document.formulario.apellidos_txt.focus();
			} else if (document.getElementById('ciudad').value=="") {
				alert("Por favor, rellene el campo ciudad");
				document.formulario.ciudad_txt.focus();                                                 
			} else if (document.formulario.telefono_txt.value%1!=0 || document.formulario.telefono_txt.value.length !=9 || (primer_caracter !=6 && primer_caracter !=7 && primer_caracter !=9)) { 
				alert("Teléfono incorrecto");
				document.formulario.telefono_txt.focus();
				document.formulario.telefono_txt.style.borderColor="#FF0000";
			} else {
				// Enviar formulario
				//document.formulario.submit();
				alert("Todo ok");
			}

			//alert("Hemos pinchado en el botón Borrar");

}

//document.write("Estamos fuera de la función<br />");
//var nombre="Luis";
//var primer_caracter=nombre.substr(0, 4); // El cero es la posición en la que empezamos y 4 el número de letras

//document.write(primer_caracter);

function borrarFormulario() {
	//alert("Hemos pinchado en el botón Borrar");
	document.formulario.reset();
}	