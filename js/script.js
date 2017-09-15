$(document).ready(function(){//Se ejecuta cuando se termina de cargar la web
  ajustesIniciales();
});

$(window).resize(function(){//Se ejecuta cada vez que existe un cambio en la resolución de la pantalla.
	ajustesIniciales();
});

function ajustesIniciales(){
  var width = $(window).width();
  var height = $(window).height();
  $("div.content").css({"height":+(height)+"px"});
  $("div.target").css({"width":+width+"px","height":+(height)+"px"});
  $("div.content_target").css({"width":+width+"px","height":+(height)+"px"});

}
