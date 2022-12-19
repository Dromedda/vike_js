const v = require('../vike.js');
const r = require('raylib');

let sensor;
let isCarried = false;

function init(s) {
  sensor = s; 
}

function update() {
  check_if_carried();
	if (!isCarried && v.check_collision2d(sensor, v.object_get('block'))) {
		sensor.x = Math.floor(Math.random() * 800);
		sensor.y = Math.floor(Math.random() * 600);
	}
}

function draw() {
	r.DrawRectangle(sensor.x, sensor.y, sensor.width, sensor.height, r.BLUE);
}

function check_if_carried(){
	let player = v.object_get('player');
	
	if (v.check_collision2d(sensor, player) && r.IsKeyPressed(r.KEY_SPACE)) {
		isCarried = !isCarried;		
	}

	if (isCarried) {
		sensor.x = player.x + (player.width / 4);
		sensor.y = player.y + (player.height / 4);
	}
}

module.exports = {init, update, draw};
