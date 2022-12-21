const r = require('raylib');
const v = require('../vike.js');

let move_speed = 10; 
let move_speed_og = move_speed; 

let dash_speed = 100; 
let dash_speed_og = dash_speed; 

let shadow = {x: 0, y: 0}; 

const Player = class {
  constructor(name, x, y) {
    this.x = x; 
    this.y = y; 
    this.width = 64; 
    this.height = 64; 
    this.facing_dir = 1; 
    this.isCarryingSomething = false; 
    
    v.add_obj(this, name); 
  }
  
  update() {
    let moving_diagonally = false; 
    let move_dir = {x: 0, y: 0}; 
    
    let key_left  = (r.IsKeyDown(r.KEY_LEFT)  || r.IsKeyDown(r.KEY_A) || r.IsKeyDown(r.KEY_H)); 
    let key_right = (r.IsKeyDown(r.KEY_RIGHT) || r.IsKeyDown(r.KEY_D) || r.IsKeyDown(r.KEY_L)); 
    let key_up    = (r.IsKeyDown(r.KEY_UP)    || r.IsKeyDown(r.KEY_W) || r.IsKeyDown(r.KEY_K)); 
    let key_down  = (r.IsKeyDown(r.KEY_DOWN)  || r.IsKeyDown(r.KEY_S) || r.IsKeyDown(r.KEY_J)); 
    
    move_dir.x = key_right - key_left; 
    move_dir.y = key_down - key_up; 
    
    if (move_dir.x != 0 && move_dir.y != 0) moving_diagonally = true; 
    if (move_dir.x != 0) this.facing_dir = move_dir.x; 
    
    move_speed = move_speed_og; 
    if (moving_diagonally) move_speed = move_speed_og * 0.7; 
    
    this.x += move_dir.x * move_speed; 
    this.y += move_dir.y * move_speed; 
    
    shadow.x += (this.x - (this.facing_dir * 16) - shadow.x) / 2; 
    shadow.y += (this.y - shadow.y) / 2; 
  }
  
  draw() {
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
    	this.x,
    	this.y,
    	this.width,
    	this.height,
    	player_color
	  );

   	if (v.check_collision2d(this, v.object_get('sensor1'))) {
     	let draw_pos_x = this.x - this.width;
     	let draw_pos_y = this.y - this.height + 8;
     	if (r.IsKeyPressed(r.KEY_SPACE)) {
	  		this.isCarryingSomething = !this.isCarryingSomething;
    	}
      // if we are carrying something draw a lil text bit for feedback
      // otherwise display some text to tell the user that they can indeed grab the thing
  		if (this.isCarryingSomething) {
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
}

module.exports = Player; 
