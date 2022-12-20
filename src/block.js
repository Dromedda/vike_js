const r = require('raylib'); 
const v = require('../vike.js');  

const Block = class {
  constructor(name, x, y) {
    this.x = x; 
    this.y = y; 
    this.width = 128; 
    this.height = 128; 
    this.color = r.BLUE;
    
    // TODOO: this is quite ugly, and it should just be like (v.create_obj2d(this, name))
    v.add_obj(this, name); 
  }

  update() {
    this.color = r.BLUE; 
    if (v.check_collision2d(this, v.object_get("player"))) this.color = r.DARKGREEN; 
  }    
  
  draw() {
    r.DrawRectangle(this.x, this.y, this.width, this.height, this.color); 
  }
}

module.exports = Block; 