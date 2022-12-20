const r = require('raylib');
const v = require('../vike.js');

// TODOOO: Make this a class instead.

let player;
let shadows = []; 
let shadow   = { x : 0, y : 0 }; 
let move_dir = { x : 0, y : 0 };

let move_speed = 10; 
let move_speed_og = move_speed;

let dash_speed = 100; 
let dash_speed_og = dash_speed; 

let facing_dir = 1;
let isCarryingSomething = false;

function init(p) {
  player = p;
}

function update() {
  let moving_diagonally = false;

  // Set keybindings 
  let key_left  = (r.IsKeyDown(r.KEY_LEFT)  || r.IsKeyDown(r.KEY_A) || r.IsKeyDown(r.KEY_H)); 
  let key_right = (r.IsKeyDown(r.KEY_RIGHT) || r.IsKeyDown(r.KEY_D) || r.IsKeyDown(r.KEY_L)); 
  let key_up    = (r.IsKeyDown(r.KEY_UP)    || r.IsKeyDown(r.KEY_W) || r.IsKeyDown(r.KEY_K)); 
  let key_down  = (r.IsKeyDown(r.KEY_DOWN)  || r.IsKeyDown(r.KEY_S) || r.IsKeyDown(r.KEY_J)); 
  
  // Capture input
	move_dir.x = (key_right - key_left); 
  move_dir.y = (key_down  - key_up); 
  
	// if we are moving diagonally.
	if (move_dir.x != 0 && move_dir.y != 0) moving_diagonally = true; 	
	if (move_dir.x != 0) facing_dir = -move_dir.x; 

  // Dashing and movespeed modifications
  if (r.IsKeyPressed(r.KEY_LEFT_SHIFT)) {
    move_speed = dash_speed; 
    if (moving_diagonally) move_speed = dash_speed * 0.7;
  } else {
    move_speed = move_speed_og;
    if (moving_diagonally) move_speed = move_speed_og * 0.7; 
  }
	
  // apply things
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

 	if (v.check_collision2d(player, v.object_get('sensor1'))) {
   	let draw_pos_x = player.x - player.width;
   	let draw_pos_y = player.y - player.height + 8;
   	if (r.IsKeyPressed(r.KEY_SPACE)) {
			isCarryingSomething = !isCarryingSomething;
   	}
    // if we are carrying something draw a lil text bit for feedback
    // otherwise display some text to tell the user that they can indeed grab the thing
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

// TODOOO: Export a class instead, once the class is done.
// module.exports = Player; 
module.exports = {init, update, draw}; 
