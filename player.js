const r = require('raylib'); 

let player = {
	x : 0, 
	y : 0
};

let move_dir = {
	x : 0,
	y : 0
};

let move_speed = 10; 
let move_speed_og = move_speed;

function init() {
	player.x = 200; 
	player.y = 200; 
}

function update() {
	move_dir.x = (r.IsKeyDown(r.KEY_RIGHT) - r.IsKeyDown(r.KEY_LEFT)); 
	move_dir.y = (r.IsKeyDown(r.KEY_DOWN) - r.IsKeyDown(r.KEY_UP)); 

	if (move_dir.x != 0 && move_dir.y != 0) {
		move_speed = move_speed_og * 0.7; 
	}

	player.x += move_dir.x * move_speed; 
	player.y += move_dir.y * move_speed;  
}

function draw() {
	r.DrawText("HELLO WORLD!", 100, 100, 32, r.BLACK); 
	r.DrawRectangle(player.x, player.y, 64, 64, r.MAROON); 
}

// Export the functions for init, update and draw so that we can use it elsewhere.
module.exports = {init, update, draw}; 
