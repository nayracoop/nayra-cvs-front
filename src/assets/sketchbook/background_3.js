const sketch = p5 => {

p5.disableFriendlyErrors = true; 
  
let particlesQuantity = 20000;

let positionX = new Array(particlesQuantity);
let positionY = new Array(particlesQuantity);
let velocityX = new Array(particlesQuantity).fill(0);
let velocityY = new Array(particlesQuantity).fill(0);

let backgroundColors = [];
let lineColors = [];

let theme = 1;

p5.setup = () => {
	backgroundColors[0] = '#04090d';
  	backgroundColors[1] = '#f8f8f8';
  	lineColors[0] = '#1ac69e';
  	lineColors[1] = '#1ac69e';
  
  	p5.createCanvas(p5.windowWidth, p5.windowHeight);
	p5.stroke(lineColors[theme]);
 	p5.strokeWeight(p5.random(3))
	

	for (let particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = p5.random(0, p5.width);
		positionY[particle] = p5.random(0, p5.height);
	}
	
	positionX[0] = 0;
	positionY[0] = 0;
}

p5.draw = () => {
	p5.background(backgroundColors[theme]);
	
	velocityX[0] = velocityX[0] * 0.5 + (p5.mouseX - positionX[0]) * 0.1;
	velocityY[0] = velocityY[0] * 0.5 + (p5.mouseY - positionY[0]) * 0.1;
	
	positionX[0] += velocityX[0];
	positionY[0] += velocityY[0];
	
	for (let particle = 1; particle < particlesQuantity; particle++) {
		let whatever = 1024 / (p5.sq(positionX[0] - positionX[particle]) + p5.sq(positionY[0] - positionY[particle]));
		
		velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
		velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;
		
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		
		if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > p5.width && velocityX[particle] > 0)) {
			velocityX[particle] = -velocityX[particle];
		}
		
		if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > p5.height && velocityY[particle] > 0)) {
			velocityY[particle] = -velocityY[particle];
		}
		
		p5.point(positionX[particle], positionY[particle]);
	}
}

p5.mousePressed = () =>  {
	for (let particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = p5.random(0, p5.width);
		positionY[particle] = p5.random(0, p5.height);
	}
}

}

export default sketch;



