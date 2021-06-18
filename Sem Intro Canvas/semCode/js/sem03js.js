var frame = window.requestAnimationFrame ||
 			window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var sprite = new Image();
sprite.src = "img/opcion1.png";

//6 voy a crear variables para ayudar a crear el moviemiento
var numero = 0;
//8 para cambiar de recorte
var ubicacionX = 0;
var animation;

// sprite.onload = function(){
// 	ctx.drawImage(sprite, 100, 0, 100, 100, 0, 100, 100, 100);
	
// }

function tiempo(){

	if(numero >= 600){numero = 0}else{numero+=20}

	for(var i = 0; i <= numero; i+=100){

		if(numero >= i){ubicacionX = i}
	}
	//10 clearRect para borrar el canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(sprite, ubicacionX, 0, 100, 100, 0, 100, 100, 100);
	animacion = frame(tiempo);
}

tiempo();

setTimeout(function(){

cancelAnimationFrame(animacion)

},3000)