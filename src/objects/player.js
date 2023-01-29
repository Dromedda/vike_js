const r = require('raylib');
const v = require('../../vike.js');

let move_speed = 10; 
let move_speed_og = move_speed; 

const Player = class {
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.width = 64; 
    this.height = 64; 
    this.facing_dir = 1; 
    this.isCarryingSomething = false; 
    this.sprite = v.create_anim(v.load_sprite('./assets/square_animation-sheet.png'), 'player_anim', 0, 0, 64, 64, 12); 
  }
  
  update(dt) {
    let move_dir = v.vec2(0, 0); 
    
    // grab user input
    let key_left  = ( r.IsKeyDown(r.KEY_LEFT)  || 
                      r.IsKeyDown(r.KEY_A) || 
                      r.IsKeyDown(r.KEY_H)); 

    let key_right = ( r.IsKeyDown(r.KEY_RIGHT) || 
                      r.IsKeyDown(r.KEY_D) || 
                      r.IsKeyDown(r.KEY_L)); 

    let key_up    = ( r.IsKeyDown(r.KEY_UP)    || 
                      r.IsKeyDown(r.KEY_W) || 
                      r.IsKeyDown(r.KEY_K)); 

    let key_down  = ( r.IsKeyDown(r.KEY_DOWN)  || 
                      r.IsKeyDown(r.KEY_S) || 
                      r.IsKeyDown(r.KEY_J)); 

    // decide where to go based on the user input.
    move_dir.x = key_right - key_left; 
    move_dir.y = key_down - key_up; 

    // check if we are moving diagonally.
    move_speed = move_speed_og; 

    if (move_dir.x != 0 && move_dir.y != 0) {
      move_speed = move_speed_og * 0.707; 
      this.facing_dir = move_dir.x;
    }

   	// apply movement.
    this.x += move_dir.x * move_speed * dt;
    this.y += move_dir.y * move_speed * dt; 

    this.sprite.update(1); 

    if(r.IsKeyPressed(r.KEY_Q)) this.sprite.pause(); 
    if(r.IsKeyPressed(r.KEY_E)) this.sprite.pause(false); 
    if(r.IsKeyPressed(r.KEY_R)) this.sprite.frame = 2; 
  }
  
  draw() {
    let outline_stroke = 2;
    r.DrawRectangle(this.x-outline_stroke, this.y- outline_stroke, 64 + (outline_stroke*2), 64 + (outline_stroke*2), r.BLACK);
    this.sprite.draw(this.x, this.y); 
  }
}

module.exports = Player; 
