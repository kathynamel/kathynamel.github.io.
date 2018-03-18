// JavaScript Document
var respuesta1 = [-5,1,7,13,19,25,31,37,43,47]
var resp;
var calif=0;
var sol3="c";
var sol4="b"

function evaluar (i) {
	switch(i) {
    case 1:
        secuencia();
        break;

    case 2:
        respuesta2();
        break;

    case 3:
    	evaluar_radio(3);
    	break;

    case 4:
    	evaluar_radio(4);
    	break;

    default:
        alert("ERROR!");
	}
}

function secuencia () {
	var dato, mal=0, bien= true;;
	for (var i = 0; i < respuesta1.length; i++) {
		dato="#"+[i+1];
		if($(dato).val() != respuesta1[i]){
			bien = false;
			mal+=1;
		}
	};

	if (mal>0) {
		incorrecto(1, mal);
	}else{
		correcto(1);
	}
	bloquear(1);
}

function correcto (i) {
    var image = new Image();
    var nombre = '#image'+[i];

    var src = 'img/correcto.png'
    image.src = src;

    $(nombre).append(image);
    calif+=1;
}

function incorrecto (i, mal) {
	var image = new Image();
	var nombre = '#image'+[i];
	var plegar = '#plegar'+[i];

    var src = 'img/incorrecto.png'
    image.src = src;
    $(nombre).append(image);

    if (i==1) {
    	$(plegar).append("Tienes"+mal+" terminos incorrectos");
    } else{
    	$(plegar).collapse("show");
    }; 
}

function bloquear (i) {
	var resp = "respuesta"+i;
	var boton = "#boton"+i;
		$('input:text[name='+resp+']').prop("disabled",true);
		$(boton).attr("disabled",true);
}

function respuesta2 () {
	if ($("#resp2").val() == 4) {
		correcto(2);
	} else{
		incorrecto(2,0);
	};
	bloquear(2);
}

function bloquear_radio (i) {
	var resp = "respuesta"+i;
	var boton = "#boton"+i;
	$('input:radio[name='+resp+']').prop("disabled",true);
	$(boton).attr("disabled",true);
}

function evaluar_radio (i) {

	nombre = "respuesta"+i;
	resp = $('input:radio[name='+nombre+']:checked').val();
	if (resp != undefined) {
	if ((i == 3) && (resp == sol3)) {
		correcto(i);
	} else{
		if((i == 4) && (resp == sol4)){
			correcto(i);
		}else{
			incorrecto(i,0);
		}
	}
	bloquear_radio(i);
	}
}

function bloquear_todo () {
	bloquear(1);
	bloquear(2);
	bloquear_radio(3);
	bloquear_radio(4);
}

function calificar () {
	
	$(calificacion).append("Tienes "+calif+" respuestas correctas");
	bloquear_todo();
	$("#calificar").attr("disabled",true);
	$("#reiniciar").attr("disabled",false);

}

function reiniciar () {
	desbloquear(1);
	$("#plegar1").empty();
	desbloquear(2);
	$("#plegar2").collapse("hide");
	desbloq_radio();
	$("#calificar").attr("disabled",false);
	$("#reiniciar").attr("disabled",true);
	$("#calificacion").empty();
	calif=0;
}

function desbloquear (i) {
	var resp = "respuesta"+i;
	var boton = "#boton"+i;
		$('input:text[name='+resp+']').prop("disabled",false);
		$(boton).attr("disabled",false);
	var imagen = '#image'+[i];
		$(imagen).empty();
}

function desbloq_radio () {
	var nombre, boton;
	for (var i = 3; i < 5; i++) {
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
}

function unchecked (i) {
	
	for (var j = 1; j < 5; j++) {
		var radio ="#"+i+"-"+j;
		$(radio).prop('checked', false);
	};
}
