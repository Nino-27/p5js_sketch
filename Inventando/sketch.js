let b = [];
let p = [];

function setup() {
	createCanvas(400,400);
	for(let i = 0; i < 200; i ++) {
		b.push(new Bubble());
	}
	let x = width/2;
	let y = height - 20;

	for (let i = 0; i < 3; i ++) {
		p.push(new Particle(x,y));
	}
	
}

function draw() {
	background(0);
	//p.push(new Particle());

	for (let i = 0; i < b.length; i ++) {
		 b[i].mostrar();
		 b[i].update();
		 for (let j = 0; j < b.length; j ++) {
		 	 if (i != j && b[i].intersect(b[j])){
		 	 	 b[i].cambiarColor();
		 	 	 b[j].cambiarColor();
		 	 }
		 }
	}

	for (let i = 0; i < p.length; i ++) {
		p[i].show();
		p[i].update();
		p[i].limite();
		p[i].mas();
	}
}

//Bubble
function Bubble() {
	this.x = random(width);
	this.y = random(height);
	this.r = 10;
	this.fadeout = 0;

	this.mostrar = function() {
		stroke(255)
		fill(0,255,0,this.fadeout);
		ellipse(this.x, this.y, this.r*2);
	}

	this.update = function () {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}

	this.cambiarColor = function() {
		this.fadeout = 400;
	}

	this.intersect = function(other) {
		let d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r) {
			return true;
		}
		else {
			this.fadeout = 0;
			return false;
		}
	}
}

//Particles
function mousePressed() {
	p.push(new Particle(mouseX, mouseY));
}

class Particle {
	constructor(x=200, y=380) {
		this.xx = x;
		this.yy = y;
		this.x = this.xx;
		this.y = this.yy;
		this.r = 20;
		this.xx = random(-1,1);
		this.yy = random(-5,-0.00001);
		this.fadeout = 200;
	}

	show() {
		noStroke();
		fill(255,0,0,this.fadeout);
		ellipse(this.x, this.y, this.r, this.r);
		this.fadeout -= 5;
	}

	update() {
		this.x = this.x + this.xx;
		this.y = this.y + this.yy;
	}

	limite() {
		if (this.fadeout < 0) {
			p.splice(0,1);
		}
	}

	mas() {
		if (this.fadeout < 50 && p.length < 100) {
			this.xx = 200;
			this.yy = 380;
			this.x = this.xx;
			this.y = this.yy;
			p.push(new Particle(this.x, this.y));
		}
	}

	texto() {
		text('this.xx : ' + this.xx, 10,20);
		text('this.yy : ' + this.yy, 10,20);

	}
}