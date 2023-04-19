window.onload = init();

function init() {
	const ctx = document.getElementById("canvas").getContext("2d");

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    let audio = new Audio('resources/music.m4a');
    //audio.play();

    
}

