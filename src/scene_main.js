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
	player = v.add_obj(new Player(100, 100), 'player'); 
	sensor = v.add_obj(new Sensor(200, 200, 32, 32), 'sensor');
	block = v.add_obj(new Block(500, 200), 'block'); 
	sprite = v.load_sprite('./assets/square.png'); 
	anim = v.create_anim(v.load_sprite('./assets/square_animation-sheet.png'), 'squareanim', 200, 200, 64, 64, 12); 
}

SceneMain.update = function() {
	v.camera_goto(camera, v.vec2(player.x, player.y), 16); 
	player.update();
	block.update();
	sensor.update();
	anim.update(15); 
}

SceneMain.draw = function() {
	v.camera_set(camera); 
	v.camera_centered(camera); 
 	r.ClearBackground(r.RAYWHITE);
	
	block.draw();
	player.draw();
	sensor.draw();
	anim.draw(); 
	v.draw_sprite(sprite, 0, 0, r.WHITE); 
	v.camera_unset(); 
 	r.DrawFPS(4, 4);
}

module.exports = SceneMain; 
