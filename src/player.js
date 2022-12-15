const r = require('raylib'); 

// TODO: might wanna make a vec2 struct.
let player   = { x : 0, y : 0 };
let shadow   = { x : 0, y : 0 }; 
let move_dir = { x : 0, y : 0 };

let move_speed = 10; 
let move_speed_og = move_speed;
let facing_dir = 1; 

// is called on initialization.
function init(x, y) {
	player.x = x;  
	player.y = y; 
}

function update() {
	move_dir.x = (r.IsKeyDown(r.KEY_RIGHT) - r.IsKeyDown(r.KEY_LEFT)); 
	move_dir.y = (r.IsKeyDown(r.KEY_DOWN) - r.IsKeyDown(r.KEY_UP)); 

	if (move_dir.x != 0 && move_dir.y != 0) {
		move_speed = move_speed_og * 0.7; 
	}

	// if we are moving diagonally.
	if (move_dir.x != 0) facing_dir = -move_dir.x; 
	
	player.x += move_dir.x * move_speed; 
	player.y += move_dir.y * move_speed;  

	shadow.x += (player.x + (facing_dir * 16) - shadow.x) / 2; 
	shadow.y += (player.y - shadow.y) / 2; 
}

function draw() {
  r.DrawRectangle(shadow.x, shadow.y, 64, 64, r.BLACK);  
	r.DrawRectangle(player.x, player.y, 64, 64, r.MAROON); 

	if (r.IsKeyDown(r.KEY_SPACE)) {
		r.DrawText("Welcome To Vike :) \n and Raylib_js :)", player.x - 64, player.y - 80, 28, r.BLACK); 
	}	
}

// Export the functions for init, update and draw so that we can use it elsewhere.
module.exports = {init, update, draw}; 
