const r = require('raylib');
const _player = require("./player.js");
const _sensor = require("./sensor.js");
const v = require('../vike.js');

let p, f;

function init() {
	p = v.create_obj_2d(_player, "player", 200, 200, 64, 64);
	p.func.init(p);
	f = v.create_obj_2d(_sensor, "sensor", 500, 500, 32, 32);
	f.func.init(f);
}

function update() {
  p.func.update();
  f.func.update();
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4);
 	p.func.draw();
 	f.func.draw();
}

module.exports = {init, update, draw};
