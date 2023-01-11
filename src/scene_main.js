const r = require('raylib');
const v = require('../vike.js');

const Player = require("./player.js");
const Sensor = require("./sensor.js");
const Block = require('./block.js')

const SceneMain = {}; 

let player, sensor, block; 
let camera_pos = v.vec2(0, 0); 
let camera_offset = v.vec2(0, 0); 
const camera = v.camera_init(camera_offset, camera_pos, 0, 1); 

SceneMain.init = function() {
	player = new Player(100, 100);
	sensor = new Sensor(200, 200, 32, 32);
	block = new Block(500, 200);
}

SceneMain.update = function() {
	v.camera_goto(camera, v.vec2(player.x, player.y), 16); 
	player.update();
	block.update();
	sensor.update();
}

SceneMain.draw = function() {
	v.camera_set(camera); 
	v.camera_centered(camera); 
 	r.ClearBackground(r.RAYWHITE);
	
	block.draw();
	player.draw();
	sensor.draw();
	v.camera_unset(); 
 	r.DrawFPS(4, 4);
}

module.exports = SceneMain; 
