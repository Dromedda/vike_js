const r = require('raylib');
const _player = require("./player.js");
const _sensor = require("./sensor.js");
const v = require('../vike.js');

let p, f;

function init() {
  // Create entities.
	p = v.create_obj_2d(_player, "player", 200, 200, 64, 64);
	p.func.init(p);

	s = v.create_obj_2d(_sensor, "sensor", 500, 500, 32, 32);
	s.func.init(s);
}

function update() {
  // Update entities.
  p.func.update();
  s.func.update();
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4);

 	// Draw the entities.
 	p.func.draw();
 	s.func.draw();
}

module.exports = {init, update, draw};
