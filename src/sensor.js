const v = require('../vike.js');
const r = require('raylib');

let sensor; 

function init(f) {
  sensor = f; 
}

function update() {
	let player = v.object_get('player');
	let isBeingCarried = false;

	if (v.check_collision2d(sensor, player)) {
  	isBeingCarried = r.IsKeyDown(r.KEY_SPACE);
	}

	if (isBeingCarried) {
		sensor.x = player.x + (player.width / 4);
		sensor.y = player.y + (player.height / 4);
	}
}

function draw() {
	r.DrawRectangle(sensor.x, sensor.y, sensor.width, sensor.height, r.BLUE);
}

module.exports = {init, update, draw};
