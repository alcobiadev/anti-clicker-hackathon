let gameIsOver = false;
let bolts = [];
const ctx = document.getElementById("canvas").getContext("2d");
const speed = 3;

class Bolt {
	constructor(y) {
		this.x = Math.floor(Math.random() * window.innerWidth);
		this.y = y;
	}

	draw() {
		ctx.fillStyle = "yellow";
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x - 40, this.y + 40);
		ctx.lineTo(this.x - 20, this.y + 40);
		ctx.lineTo(this.x - 40, this.y + 80);
		ctx.lineTo(this.x, this.y + 40);
		ctx.lineTo(this.x - 20, this.y + 40);
		ctx.lineTo(this.x, this.y);
		ctx.fill();
		ctx.stroke();
	}

	update() {
		this.y += speed;
		if (this.y >= window.innerHeight) {
			gameIsOver = true;
		}
	}
}

window.onload = () => {
	init();
};

function init() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	let audio = new Audio("resources/music.m4a");
	//audio.play();

	let cloud = new Image();
	cloud.addEventListener("load", () => {
		ctx.drawImage(cloud, 100, 25, 450, 230);
	});
	cloud.src = "resources/cloud.webp";

	window.requestAnimationFrame(gameLoop);
}

function gameLoop() {
	if (gameIsOver) {
		gameOver();
		return;
	}
	generateBolts();
	draw();
	update();

	window.requestAnimationFrame(gameLoop);
}

function generateBolts() {
	if (bolts.length >= 5) {
		return;
	}

	while (bolts.length <= 5) {
		bolts.push(new Bolt(100));
		console.log(bolts.length);
	}
}

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	bolts.forEach((bolt) => {
		bolt.draw();
	});
}

function update() {
	bolts.forEach((bolt) => {
		bolt.update();
	});
}

function gameOver() {
	alert("game over");
	return;
}
