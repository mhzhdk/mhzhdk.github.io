let font; 
let iad = "InteractionDesign"
let iadArray =[]
let rotater = false;
let back = false;
let r = 250;

function preload()
{font = loadFont("font/ReclaimGloryFreeTrial-BW1P8.otf")}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(font)
	
	angleMode(DEGREES)
	textSize(100)
	textAlign(CENTER,CENTER)
	frameRate(10)
	noStroke()
	
	iadArray = iad.split("") 
}

function draw() 
{
	
translate(width/2, height/2) 
	
let col = color(194,232,221,100) 	
let col1 = color(40,123,123)
let col2 = color(40,123,123,120)
let col3 = color(random(255),123,123)

// EITHER singular bg
background(col2)

// OR rings
//for(let i=0; i<width+200; i+=80){
//fill(random(250),123,123) 
//circle(0,0,width+200-i)} 
	
for(let i=0; i<iadArray.length; i++) 
{ for (let j=0; j<360 ; j+=(360/iadArray.length)) 
	{
	// Polar Coordinates
	//r= 400*cos(6*j) //petal form ?
			
	let x = r * cos(j) 
	let y = r * sin(j)
	
	if(r>300){back = true} else if(r<200){back=false}
	if(back){r-=0.05}else{r+=0.05}
					
	let cruncher = map(mouseX,0,width,0.25,0.75) 
					
	rotate(i*i)
			
			
	if(i==0) 
	{ 
	push()
							
	if(rotater == true){t+=40}else{ t=mouseY} 
	rotate(t) 
							
	fill(color(random(255),123,123))
	text(iadArray[0],x*cruncher*i,y*cruncher*i)
					
	pop()
			
	}else{
				
	push()
						
	if(rotater == true){t+=20}else{t=mouseY}
	rotate(t) 
								
	fill(color(random(255),123,123))
	text(iadArray[i],x*cruncher*i,y*cruncher*i)

	pop()
						
	}}}}

function mousePressed(){
	seed = random(6778)
	rotater = !rotater;
	}

