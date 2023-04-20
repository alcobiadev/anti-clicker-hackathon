let gameIsOver = false;
let bolts = [];
const ctx = document.getElementById("canvas").getContext("2d");
const speed = 3;

const sizeX = 80;
const sizeY = 160;

let mouseX = 0;
let mouseY = 0;

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
		ctx.lineTo(this.x - sizeX, this.y + sizeY / 2);
		ctx.lineTo(this.x - sizeX / 2, this.y + sizeY / 2);
		ctx.lineTo(this.x - sizeX, this.y + sizeY);
		ctx.lineTo(this.x, this.y + sizeY / 2);
		ctx.lineTo(this.x - sizeX / 2, this.y + sizeY / 2);
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
	if (bolts.length >= 1) {
		return;
	}

	while (bolts.length <= 1) {
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

function checkUserInput() {
    let newBolts = bolts.filter(bolt =>
        !(mouseX > bolt.x - sizeX && mouseX < bolt.x && mouseY < bolt.y + sizeY && mouseY > bolt.y)       
    );
    bolts = newBolts;
}

function gameOver() {
	alert("game over");
	return;
}

document.addEventListener("click", (e) => {
    mouseX = e.x;
    mouseY = e.y;
    e.preventDefault();
    checkUserInput();
    console.log(mouseX, mouseY);
});
