var calif=0;

function evaluar (i) {
	var resp = "#respuesta"+i;
	if($(resp).val() != ""){
		switch(i) {
    		case 1:
        		eval1();
        		break;

    		case 2:
        		eval2();
        		break;

    		case 3:
    			eval3();
    			break;

    		case 4:
    			eval4();
    			break;

   			 default:
        		alert("ERROR!");
		}
	}
}

function eval1 () {
		if($("#respuesta1").val() != 8){
			incorrecto(1);
		}else{
			correcto(1);
		}
	bloquear(1);
}

function eval2 () {
		if($("#respuesta2").val() != 102){
			incorrecto(2);
		}else{
			correcto(2);
		}
	bloquear(2);
}

function eval3 () {
		if($("#respuesta3").val() != 80){
			incorrecto(3);
		}else{
			correcto(3);
		}
	bloquear(3);
}

function eval4 () {
		if($("#respuesta4").val() != 30){
			incorrecto(4);
		}else{
			correcto(4);
		}
	bloquear(4);
}

function correcto (i) {
    var image = new Image();
    var nombre = '#image'+[i];

    var src = 'img/correcto.png'
    image.src = src;

    $(nombre).append(image);
    calif+=1;
}

function incorrecto (i) {
	var image = new Image();
	var nombre = '#image'+[i];
	var plegar = '#plegar'+[i];

    var src = 'img/incorrecto.png'
    image.src = src;
    $(nombre).append(image);
    $(plegar).collapse("show");
}

function bloquear (i) {
	var resp = "respuesta"+i;
	var boton = "#boton"+i;
		$('input:text[name='+resp+']').prop("disabled",true);
		$(boton).attr("disabled",true);
}


function bloquear_todo () {
	for (var i = 1; i < 5; i++) {
		bloquear(i);
	};
}

function calificar () {
	
	$(calificacion).append("Tienes "+calif+" respuestas correctas");
	bloquear_todo();
	$("#calificar").attr("disabled",true);
	$("#reiniciar").prop("disabled",false);

}

function reiniciar () {
	for (var i = 1; i < 5; i++) {
		desbloquear(i);
	};

	$("#calificar").attr("disabled",false);
	$("#reiniciar").attr("disabled",true);
	$("#calificacion").empty();
	calif=0;

	vaciar();
}

function desbloquear (i) {
	var resp = "respuesta"+i;
	var boton = "#boton"+i;
		$('input:text[name='+resp+']').prop("disabled",false);
		$(boton).attr("disabled",false);
	var imagen = '#image'+[i];
		$(imagen).empty();
	var plegar = '#plegar'+[i];	
	$(plegar).collapse("hide");
}

function vaciar () {
	for (var i = 1; i < 5; i++) {
		var resp = "#respuesta"+i;
		$(resp).val("");
	};
}