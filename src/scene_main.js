const r = require('raylib');
const v = require('../vike.js');

const _player = require("./player.js");
const _sensor = require("./sensor.js");
const _block  = require("../block.js"); 

let p, s, b; 

function init() {
	p = v.create_obj_2d(_player, "player", 200, 200, 64, 64);
	p.func.init(p);

	s = v.create_obj_2d(_sensor, "sensor", 500, 500, 32, 32);
	s.func.init(s);
	
	b = v.create_obj_2d(_block, "block", 500, 400, 200, 200); 
	b.func.init(b); 
}

function update() {
  p.func.update();
  s.func.update();
	b.func.update(); 	
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4);

 	p.func.draw();
 	s.func.draw();
	b.func.draw(); 
}
module.exports = {init, update, draw};
