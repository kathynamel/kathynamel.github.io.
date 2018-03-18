$(document).ready(function(){
  $("#palabra").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#claves button").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  $(".palabra-clave").click(function() {
    var value = $(this).val().toLowerCase();
    $("#blog .entrada").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      $("#mostrar").collapse('show');
    });
  });
});

function mostrarEntrada () {
	$(".entrada").show();
	$("#mostrar").collapse('hide');
}