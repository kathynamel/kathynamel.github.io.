// JavaScript Document
var respuestas = ['d','b','a','c','b','d','a','b','c','b']
var resp;
var calif=0;

function evaluar (i) {
	pregunta = "#boton"+[i+1];
	nombre = "respuesta"+[i+1];
	resp = $('input:radio[name='+nombre+']:checked').val();
	if (resp != undefined) {
	if (resp == respuestas[i]) {
		correcto(i);
	} else{
		incorrecto(i);
	};
	bloquear([i+1]);
	};
}

function correcto (i) {
    var image = new Image();
    var nombre = '#image'+[i+1];

    var src = 'img/correcto.png'
    image.src = src;

    $(nombre).append(image);
    calif+=1;
}

function incorrecto (i) {
	var image = new Image();
	var nombre = '#image'+[i+1];
	var plegar = '#plegar'+[i+1];

    var src = 'img/incorrecto.png'
    image.src = src;

    $(nombre).append(image);
    $(plegar).collapse("show");
}

function bloquear (j) {
		nombre = "respuesta"+[j];
		boton = "#boton"+[j];
		$('input:radio[name='+nombre+']').attr("disabled","");
		$(boton).attr("disabled","");
}

function bloquear_todo () {
	for (var i = 1; i < (respuestas.length+1); i++) {
		bloquear(i);
	};
}

function calificar () {
	
	$(calificacion).append("Tienes "+calif+" respuestas correctas");
	bloquear_todo();
	$("#calificar").attr("disabled","");
	$("#reiniciar").attr("disabled",false);

}

function reiniciar () {
	for (var i = 1; i < (respuestas.length+1); i++) {
		nombre = "respuesta"+[i];
		boton = "#boton"+[i];
		$('input:radio[name='+nombre+']').attr("disabled",false);
		$(boton).attr("disabled",false);
		unchecked(i);
		var imagen = '#image'+[i];
		$(imagen).empty();
		var plegar = '#plegar'+[i];
		$(plegar).collapse("hide");
	};
	$("#calificar").attr("disabled",false);
	$("#reiniciar").attr("disabled","");
	$("#calificacion").empty();
	calif=0;
}

function unchecked (i) {
	
	for (var j = 1; j < 5; j++) {
		var radio ="#"+i+"-"+j;
		$(radio).prop('checked', false);
	};
}
