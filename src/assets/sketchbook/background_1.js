const sketch = p5 => {

let gridNum = 40;
let w,step;
let sp = -30;
let lineColors = [];


p5.setup = () => {
	p5.createCanvas(p5.windowWidth, p5.windowHeight,p5.WEBGL);
	w = p5.width;
	step = w/gridNum;

  lineColors[0] = '#1ac69e';
  lineColors[1] = '#1ac69e';
}

p5.draw = () => {
	p5.noFill();
	p5.stroke(lineColors[1]);
  p5.strokeWeight(3);
	
	p5.rotateX(p5.PI*(0.35 + 0.1*p5.sin(p5.frameCount/30)));
	p5.rotateZ(p5.PI*(0.1*p5.sin(p5.frameCount/20)));
	p5.scale(0.9 + 0.1*p5.sin(p5.frameCount/35));
	
	p5.translate(-w*0.5,-w*0.5);
	
	for(let y = 0; y < w; y += step)
	{
		p5.beginShape(p5.TRIANGLE_STRIP);

		for(let x = 0; x < w; x += step)
		{
			p5.vertex(x,y,p5.noiseVal(x,y + p5.frameCount*sp));
			p5.vertex(x,y + step,p5.noiseVal(x,y + step + p5.frameCount*sp));
		}
		p5.endShape();
	}
}


p5.noiseVal = (x,y) =>{
	let m = 0.002;
	let h = p5.height*0.25;
	return (p5.noise(x*m,y*m) -0.5)*2* h;
}

}

export default sketch;



