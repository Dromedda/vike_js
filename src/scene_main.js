const r = require('raylib');
const v = require('../vike.js');

const Player = require("./player.js");
const Sensor = require("./sensor.js");
const Block = require('./block.js')

function init() {
	player = new Player(100, 100);
	sensor = new Sensor(200, 200, 32, 32);
	block = new Block(500, 200);
	console.table(Math); 
}

function update() {
	player.update();
	block.update();
	sensor.update();
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);
 	r.DrawFPS(4, 4);
	
	block.draw();
	player.draw();
	sensor.draw();
}

module.exports = {init, update, draw};
