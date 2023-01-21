const r = require('raylib');
const v = require('../../vike');

const SceneDev = {};	

SceneDev.init = function() {
	
}

SceneDev.update = function() {
	
}

SceneDev.draw = function() {
	r.ClearBackground(r.BLACK);
	r.DrawText("Dev scene", 200, 200, 42, r.RAYWHITE);
}

module.exports = SceneDev;
