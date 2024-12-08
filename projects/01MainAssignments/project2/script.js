let distance;
let arrayerX = [];
let arrayerY = [];
let increment;
let startX;
let blocked = false;
let size =1000;
let gradier;
let img;
let font;

let circelo = {
	x: 800, 
	y: 400,
	d: 100 }

function preload(){
	img = loadImage("img/clipart1877598.png") // downloaded png from the internet
	font = loadFont("font/Nunito-VariableFont_wght.otf")}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(color("rgb(0,0,0)"));
	rectMode(CENTER)
	noStroke()
	textFont(font)
	textAlign(CENTER)}


function mousePressed(){
	arrayerX = [] 
	arrayerY = []

	startX = mouseX 
	startY = mouseY  }

function mouseReleased(){
	blocked = false; }



function draw() {
	background(color("rgb(0,0,0)"))

	radialCircle() 
	circle(circelo.x,circelo.y,circelo.d) 
	circle(circelo.x,circelo.y,circelo.d/1.5) 
	
	push()
	translate(width/2, height/2)
	textSize(40)
	text("Alice's Adventures in Wonderland",0,-200)
	textSize(18)
	text(	"Alice was beginning to get very tired of sitting by her sister on the bank,\n "+
		"and of having nothing to do: once or twice she had peeped into the book her sister was reading, \n "+
		"but it had no pictures or conversations in it, \n "+
		" “and what is the use of a book,” thought Alice “without pictures or conversations?”  \n "+
		"So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid),  \n "+
		"whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies,\n "+
		"when suddenly a White Rabbit with pink eyes ran close by her.  \n "+
		"There was nothing so very remarkable in that;  \n "+
		" nor did Alice think it so very much out of the way to hear the Rabbit say to itself,  \n "+
		" “Oh dear! Oh dear! I shall be late!” \n "+
		"but when the Rabbit actually took a watch out of its waistcoat-pocket,  \n "+
		"and looked at it, and then hurried on, Alice started to her feet,  \n "+
		" for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket,\n "+
		"or a watch to take out of it, and burning with curiosity,  \n "+
		"she ran across the field after it, \n "+
		" and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.  \n "+
		"In another moment down went Alice after it, \n "+
		"never once considering how in the world she was to get out again. " ,0,-160)
	pop()
	
	
	d= dist(mouseX,mouseY,circelo.x,circelo.y) 

	if (d<=circelo.d/1.5 && d>=circelo.d/3 && mouseIsPressed == true || blocked == true){  
		blocked=true; 
		
		image(img,circelo.x-50,circelo.y-70,100,100) 
		
		arrayerX.push(mouseX)
		arrayerY.push(mouseY)
		
		for(let i = 0; i< arrayerX.length; i++)
		{
			size+=10
			
			if(arrayerX.length > 1) 
			{
				arrayerX.splice(0,1); 
				arrayerY.splice(0,1);	
			}
		push() 
		let colori = color(255,255,224)
		stroke(colori)
		strokeWeight(2)
		line(startX,startY,arrayerX[i],arrayerY[i]) 			
		circle(mouseX,mouseY,30)
		pop()
		}
		

	} else if(d<=circelo.d/3) { 
		circelo.x = random(0+circelo.d,width-circelo.d);
		circelo.y = random(0+circelo.d,height-circelo.d)
	} 
	
	if(!blocked){
	if (size>10){size-=3}} 
}

// Youtube Tutorial "Easiest Gradient Effect - p5.js tutorial" by Kazuki Umeda
function radialCircle(){
	angleMode(DEGREES)
	let gradient = drawingContext.createRadialGradient(circelo.x,circelo.y,0,circelo.x,circelo.y,size/2) 																																	
	gradient.addColorStop(0,color("rgb(255,255,224)")) 
	gradient.addColorStop(1,color(0))
	drawingContext.fillStyle = gradient; 
	circle(circelo.x,circelo.y,size)}




