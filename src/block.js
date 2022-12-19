const r = require('raylib'); 
const v = require('./vike.js');  

let block; 

let color = r.DARKGREEN; 

function init(b) {
  block = b; 
}

function update() {
  // Change color if we are touching the player.
  if (v.check_collision2d(block, v.object_get("player"))) {
    color = r.BLUE; 
  } else {
    color = r.DARKGREEN;
  }
}

function draw() {
  r.DrawRectangle(block.x, block.y, block.width, block.height, color); 
}

module.exports = {init, update, draw}; 