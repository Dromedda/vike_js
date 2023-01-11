const r = require('raylib');
const v = require('../vike.js');

let move_speed = 10; 
let move_speed_og = move_speed; 

let shadow = v.vec2(0, 0); 

const Player = class {
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.width = 64; 
    this.height = 64; 
    this.facing_dir = 1; 
    this.isCarryingSomething = false; 
    
    v.add_obj(this, 'player'); 
  }
  
  update() {
    let moving_diagonally = false; 
    let move_dir = v.vec2(0, 0); 
    
    // grab user input
    let key_left  = (r.IsKeyDown(r.KEY_LEFT)  || r.IsKeyDown(r.KEY_A) || r.IsKeyDown(r.KEY_H)); 
    let key_right = (r.IsKeyDown(r.KEY_RIGHT) || r.IsKeyDown(r.KEY_D) || r.IsKeyDown(r.KEY_L)); 
    let key_up    = (r.IsKeyDown(r.KEY_UP)    || r.IsKeyDown(r.KEY_W) || r.IsKeyDown(r.KEY_K)); 
    let key_down  = (r.IsKeyDown(r.KEY_DOWN)  || r.IsKeyDown(r.KEY_S) || r.IsKeyDown(r.KEY_J)); 

    // decide where to go based on the user input.
    move_dir.x = key_right - key_left; 
    move_dir.y = key_down - key_up; 

    // check if we are moving diagonally.
    if (move_dir.x != 0 && move_dir.y != 0) moving_diagonally = true; 
    if (move_dir.x != 0) this.facing_dir = move_dir.x; 
    
    // Normalize movement if we are moving diagonally
    move_speed = move_speed_og; 
    if (moving_diagonally) move_speed = move_speed_og * 0.7; 

    //clamp the movement to the screen.
    move_dir = v.clamp_obj_to_screen(this, move_dir, move_speed); 

   	// apply movement.
    this.x += move_dir.x * move_speed;
    this.y += move_dir.y * move_speed; 

    // apply movement for the shadow
    shadow.x += (this.x - (this.facing_dir * 16) - shadow.x) / 2; 
    shadow.y += (this.y - shadow.y) / 2; 
  }
  
  draw() {
    let player_color = r.MAROON; 

  	if (r.IsKeyDown(r.KEY_SPACE)) {
	  	player_color = r.GREEN;
  	}

		// if we are colliding with the sensor set our color to green.
   	if (v.check_collision2d(this, v.object_get('sensor'))) {
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
    	this.x,
    	this.y,
    	this.width,
    	this.height,
    	player_color
	  );
  }
}

module.exports = Player; 
