var canvas = document.querySelector('#lienzo');
var ctx = canvas.getContext('2d');




ctx.fillStyle = "cyan";
ctx.fillRect(10,10,500,100);	
ctx.lineWidth = 5;
ctx.strokeStyle = "steelblue";
ctx.rect(10, 10, 500, 100);
ctx.rect(200, 300, 10, 10);
ctx.rect(400, 400, 10, 10);
ctx.stroke();

/*=============================================
CIRCULOS
=============================================*/

ctx.beginPath();
// ctx.arc(x1, y1, r, startAngle, endAngle);
ctx.arc(300,300,80,0,2*Math.PI);
// //RELLENO CIRCULO
ctx.fillStyle = "red";
ctx.fill();

// //CONTORNO CIRCULO
ctx.lineWidth= 5;
ctx.strokeStyle = "coral";
ctx.stroke();
ctx.closePath();

/*=============================================
LINEAS
=============================================*/

ctx.beginPath();

ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.lineTo(400,200);
ctx.lineTo(600,400);
ctx.lineTo(800,200);
ctx.lineTo(1000,200);
ctx.lineTo(1000,0);

// // //Contorno línea
ctx.lineWidth = 5;
ctx.stroke();

// //Relleno linea
ctx.fillStyle ='rgba(0,0,255,.6)';
ctx.fill();

ctx.closePath();

/*=============================================
CURVAS
=============================================*/

ctx.beginPath();

ctx.moveTo(0,500);
//ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2); puntos de palancas bezier poner los cuadrtos de arriba
ctx.bezierCurveTo(200,300,400,400,500,500);

// //Relleno curva
ctx.fillStyle ='tomato';
ctx.fill();
ctx.closePath();

/*=============================================
DEGRADADOS
=============================================*/
//ctx.createLinearGradient(x1,y1,x2,y2);
// desde donde hasta donde

var grd = ctx.createLinearGradient(0,300,100,400);
grd.addColorStop(0,"tomato");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(0,300,100,100);

// //ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);
var grd2 = ctx.createRadialGradient(890,350,5,900,350,120); //degradado desde el centro sería (900,400,0,900,400,100)
// var grd2 = ctx.createRadialGradient(900,400,0,900,400,100);
grd2.addColorStop(0,"white");
grd2.addColorStop(1,"black");
ctx.beginPath();
ctx.arc(900,400,100,0,7);
ctx.fillStyle = grd2;
ctx.fill();
