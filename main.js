var canvasWidth = 800;
var canvasHeight = 1000;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();

var radius = 80;

image.src = "WechatIMG1.jpeg";

image.onload = function(){
	initCanvas();
}

function initCanvas(){
	clippingRegion = {
		x: Math.random() * (canvas.width - radius * 2) + radius,
		y: Math.random() * (canvas.height - radius * 2) + radius,
		r: radius
	}
	draw( image , clippingRegion);
}

function setClippingRegion( clippingRegion ) {
	context.beginPath();
	context.arc( clippingRegion.x , clippingRegion.y , clippingRegion.r , 0 , Math.PI * 2 , false );
	context.clip();
}

function draw(image , clippingRegion) {
	context.clearRect( 0 , 0 , canvas.width , canvas.height );
	context.save();
	setClippingRegion( clippingRegion );
	context.drawImage(image , 0, 0)
	context.restore();
}

function show() {
	clippingRegion.r = 2000;
	draw( image , clippingRegion);
}

function reset() {
	initCanvas();
}






