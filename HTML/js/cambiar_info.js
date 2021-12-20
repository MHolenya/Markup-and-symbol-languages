function validarFormulario() {
if(document.formulario.nombre_txt.value==""){
	document.getElementById("mensaje").innerHTML="Pues ahora sale este texto!!!"
	document.formulario.nombre_txt.focus();


}
	
}