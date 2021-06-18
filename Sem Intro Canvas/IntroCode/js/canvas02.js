var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');

var imagenJPG = new Image(); //class Image objeto de tipo imagen
imagenJPG.src = "img/ejemploJPG.jpg";

imagenJPG.onload = function(){ //funcción onload para cargar en el canvas - POO

	//ctx.drawImage(imagen = su variable, x1, y1, x2, y2); metodo con 4 paremetros
	ctx.drawImage(imagenJPG, 100, 100, imagenJPG.naturalWidth/2, imagenJPG.naturalHeight/2)
	//naturalWidth-Height: propiedad me trae el ancho y alto original de la imagen pero podría poner el original

}

var imagenPNG = new Image();
imagenPNG.src = "img/ejemploPNG.png";

imagenPNG.onload = function(){
	ctx.drawImage(imagenPNG, 400, 100, imagenJPG.naturalWidth/2, imagenJPG.naturalHeight/2)
}

var imagenSVG = new Image();
imagenSVG.src = "img/ejemploSVG.svg";
//pasa a ser png (mapa de bits) pero carga más rapido, pero no es bueno para las lineas de tiempo (borra y gráfica)

imagenSVG.onload = function(){
	ctx.drawImage(imagenSVG, 700, 100, imagenJPG.naturalWidth/2, imagenJPG.naturalHeight/2)
}