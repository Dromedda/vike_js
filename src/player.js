const r = require('raylib');
const v = require('../vike.js');

let player;

let shadows = []; 

let shadow   = { x : 0, y : 0 }; 
let move_dir = { x : 0, y : 0 };

let move_speed = 10; 
let move_speed_og = move_speed;
let facing_dir = 1;
let isCarryingSomething = false;

function init(p) {
  player = p;
}

function update() {
	move_dir.x = (r.IsKeyDown(r.KEY_RIGHT) - r.IsKeyDown(r.KEY_LEFT)); 
	move_dir.y = (r.IsKeyDown(r.KEY_DOWN) - r.IsKeyDown(r.KEY_UP)); 

	// if we are moving diagonally.
	if (move_dir.x != 0 && move_dir.y != 0)	move_speed = move_speed_og * 0.7;	
	if (move_dir.x != 0) facing_dir = -move_dir.x; 
	
	player.x += move_dir.x * move_speed; 
	player.y += move_dir.y * move_speed;  
 
	shadow.x += (player.x + (facing_dir * 16) - shadow.x) / 2; 
	shadow.y += (player.y - shadow.y) / 2;
}

function draw() {
  let player_color = r.MAROON; 

	if (r.IsKeyDown(r.KEY_SPACE)) {
		player_color = r.GREEN;
	}
  
  r.DrawRectangle(
    shadow.x,
    shadow.y,
    64,
    64,
    r.BLACK
  );  
	r.DrawRectangle(
  	player.x,
  	player.y,
  	player.width,
  	player.height,
  	player_color
	);

 	if (v.check_collision2d(player, v.object_get('sensor'))) {
   	let draw_pos_x = player.x - player.width;
   	let draw_pos_y = player.y - player.height + 8;
   	if (r.IsKeyPressed(r.KEY_SPACE)) {
			isCarryingSomething = !isCarryingSomething;
   	}
		if (isCarryingSomething) {
  		r.DrawText(
    		"Carrying Something",
    		draw_pos_x,
    		draw_pos_y,
    		28,
    		r.BLACK
  		);
		} else {
			r.DrawText(
  			"Press Space to grab this thing",
  			draw_pos_x,
  			draw_pos_y,
  			28,
  			r.BLACK
			);
		}
 	}
	
}

module.exports = {init, update, draw}; 
