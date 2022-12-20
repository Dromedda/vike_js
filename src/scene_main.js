const r = require('raylib');
const v = require('../vike.js');

const _player = require("./player.js"); 
const _sensor = require("./sensor.js");
const Block = require('./block.js')

let p, s, b; 
let block; 

function init() {
	p = v.create_obj_2d(_player, "player", 200, 200, 64, 64);
	p.func.init(p);

	s = v.create_obj_2d(_sensor, "sensor", 200, 700, 32, 32);
	s.func.init(s);
	
	block1 = new Block("block1", 500, 200); 
}

function update() {
  p.func.update();
  s.func.update();
	
	block1.update(); 
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4);

 	p.func.draw();
 	s.func.draw();
	
	block1.draw(); 
}

module.exports = {init, update, draw};
