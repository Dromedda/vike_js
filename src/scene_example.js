const r = require('raylib');
const v = require('../vike');

const SceneExample =  {};

SceneExample.init = function() {
	
}

SceneExample.update = function() {
	
}

SceneExample.draw = function() {
	r.ClearBackground(r.BLACK);
	r.DrawText("Example scene", 200, 200, 42, r.RAYWHITE);
}

module.exports = SceneExample;
