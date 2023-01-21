const r = require('raylib'); 
const v = require('../vike.js');  

let score = 0; 

const Block = class {
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.width = 128; 
    this.height = 128; 
    this.color = r.BLUE;
    
    v.add_obj(this, 'block'); 
  }

  update() {
    this.color = r.BLUE; 
    if (v.check_collision2d(this, v.object_get("player"))) this.color = r.DARKGREEN; 
    if (v.check_collision2d(this, v.object_get('sensor')) && r.IsKeyDown(r.KEY_SPACE)) {
      score += 1; 
    }
  }    
  
  draw() {
    r.DrawRectangle(this.x, this.y, this.width, this.height, this.color); 
    r.DrawText('' + score, this.x + 16, this.y - 32, 24, r.BLACK);
  }
}

module.exports = Block; 