const r = require('raylib'); 
const v = require('../../vike.js');  

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
  }    
  
  draw() {
    r.DrawRectangle(this.x, this.y, this.width, this.height, this.color); 
  }
}

module.exports = Block; 