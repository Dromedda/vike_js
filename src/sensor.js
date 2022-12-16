const v = require('../vike.js');
const r = require('raylib');

let sensor; 

function init(f) {
  sensor = f; 
}

function update() {
	let isBeingCarried = check_if_carried();
}

function draw() {
	r.DrawRectangle(sensor.x, sensor.y, sensor.width, sensor.height, r.BLUE);
}

function check_if_carried(){
	let player = v.object_get('player');
  let ret = false;
	if (v.check_collision2d(sensor, player)) {
		ret = r.IsKeyDown(r.KEY_SPACE);
	}
	if (ret) {
		sensor.x = player.x + (player.width / 4);
		sensor.y = player.y + (player.height / 4);
	}
	return ret;
}

module.exports = {init, update, draw};
