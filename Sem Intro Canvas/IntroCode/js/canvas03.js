//4
var frame = window.requestAnimationFrame ||
 			window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;


//1
var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

//6 voy a crear variables para ayudar a crear el moviemiento
var numero = 0;
//8 para cambiar de recorte
var ubicacionX = 0;
//13
var animacion;

//2
//Dibujar SPRITE
var sprite = new Image();
sprite.src = "img/opcion1.png";

//3  //11 cancelar este paso
sprite.onload = function(){

	//ctx.drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1,y1, x2, y2);recorte fragmento + ubicación = tamaño fragmento
	// ctx.drawImage(sprite, 0, 0, 100, 100, 0, 100, 100, 100);
	ctx.drawImage(sprite, 100, 0, 100, 100, 0, 100, 100, 100);
	// ctx.drawImage(sprite, 200, 0, 100, 100, 200, 100, 100, 100);
	//el valor de un sprite es que la ubicaciónX sea un numero dinamico en una linea de tiempo
}

// Ver intro requestAnimationFrame en PWP
// 1-Crear variable frame al principio del proyecto
// 2-Crear una funcción tiempo
// 3-Pongo la function tiempo dentro de frame (var -> function) para que se ejecute más de una vez 
// 4-Vamos a dar vida a nuestro sprite haciando que la ubicacionX sea dinamico, creamos 3 var: numero, ubicacionX y animacion
// 5-Crear condiciones if else
// 6-Crear un bucle
// 7-Dibujar de nuevo la img dentro de la function
// 8-clearRect
// 9-Volver dinamico el valor del sprite
// 10-Detener la linea de tiempo con el metodo cancelAnimationFrame() + crear var animacion
// 11-Poner un setTimeout para detener la linea de tiempo


//5
function tiempo(){

	// console.log("hola");

	//7
	if(numero >= 600){numero = 0}else{numero+=20}
		// console.log(numero);

	//9 pero puedo ahorar códgido con un ciclo for
	// if(numero >= 0){ubicacionX = 0}
	// if(numero >= 100){ubicacionX = 100}

	for(var i = 0; i <= numero; i+=100){

		if(numero >= i){ubicacionX = i}
	}
	
	//10 clearRect para borrar el canvas
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// ctx.drawImage(sprite, 0, 0, 100, 100, 0, 100, 100, 100);
	ctx.drawImage(sprite, ubicacionX, 0, 100, 100, 0, 100, 100, 100);
	
	// frame(tiempo); //para que se realize varias veces la function
	//14
	animacion = frame(tiempo);
	// requestAnimationFrame(tiempo);
}

tiempo();

//12 para detener animacion metodo cancelAnimationFrame por eso hay que almacenar nuestra linea de tiempo en una variable animation

// cancelAnimationFrame(animacion)

//14
// setTimeout(function(){

// cancelAnimationFrame(animacion)

// },3000)
