var api = {
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics'
}

var $listaTemas = $("#temas");

var cargarPagina = function () {
    leerTemas();
    $("#add-form").submit(agregarTema);
}

var leerTemas = function () {
    $.getJSON(api.url, function(temas) {
        temas.forEach(crearTema);
    });
}

var crearTema = function (tema) {
    var tema = tema.content;
    var autor = tema.author_name;
    var respuestas = tema.responses_count;

    var $tr = $("<tr />");
    var $temaTd = $("<td />");
    $temaTd.text(tema);

    var $autorTd = $("<td />");
    $autorTd.text(autor);

    var $respuestas = $("<td />");
    $respuestas.text(respuestas);

    $tr.append($temaTd);
    $tr.append($autorTd);
    $tr.append($respuestas);

    $listaTemas.append($tr)
};

var agregarTema = function (e) {
  e.preventDefault();
  //alert("probando");
  var nuevoAutor = $("#nombre-autor").val();
  var nuevoTema = $("#nuevo-tema").val();
  $.post(api.url, {
      author_name : nuevoAutor,
      content: nuevoTema
  }, function (tema) {
    crearTema(tema);
    $("#myModal").modal("hide");
  });
};

$(document).ready(cargarPagina);
