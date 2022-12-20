const r = require('raylib');
const v = require('../vike.js');

const _player = require("./player.js"); 
const Sensor = require("./sensor.js");
const Block = require('./block.js')

let p; 

function init() {
	p = v.create_obj_2d(_player, "player", 200, 200, 64, 64);
	p.func.init(p);
	
	sensor = new Sensor("sensor1", 200, 200, 32, 32); 
	block = new Block("block1", 500, 200); 
}

function update() {
  p.func.update();
	
	block.update(); 
	sensor.update(); 
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4);
	
	block.draw(); 
 	p.func.draw();
	sensor.draw(); 
}

module.exports = {init, update, draw};
