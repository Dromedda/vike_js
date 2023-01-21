const r = require('raylib');
const v = require('./vike.js');
const scene = require('./comps/scene_handler.js');	
const scene_dev = require('./src/scenes/scene_dev.js');

const window = {
	height: 900,
	width: 1600,
	title: "VIKE_JS - DEV",
	targetFPS: 60
};

function main() {
	v.init_window(window);
	scene.create('dev', scene_dev);
	scene.goto('dev');

	while(!r.WindowShouldClose()) {
		scene.update();
		r.BeginDrawing();
			scene.draw();
		r.EndDrawing();
	}	
	r.CloseWindow();
}

main();
