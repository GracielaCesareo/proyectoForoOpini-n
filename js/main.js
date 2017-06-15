var api = {
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics'
}

var $listaTemas = $("#temas");

var cargarPagina = function () {
    leerTemas();
}

var leerTemas = function () {
    $.getJSON(api.url, function(temas) {
        temas.forEach(crearTema);
    });
}

var crearTema = function (tema) {
    var tema = tema.content;
    var autor = tema.author_name;
    
    var $tr = $("<tr />");
    var $temaTd = $("<td />");
    $temaTd.text(tema);
    
    var $autorTd = $("<td />");
    $autorTd.text(autor);
    
    $tr.append($temaTd);
    $tr.append($autorTd);
    
    $listaTemas.append($tr)
};

$(document).ready(cargarPagina);