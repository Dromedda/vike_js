const r = require('raylib');
const v = require('./vike');
const scene = require('./comps/scene_handler.js');	
const scene_example = require('./src/scenes/scene_example.js');

const window = {
	height: 900,
	width: 1600,
	title: "VIKE_JS - Example",
	targetFPS: 60
};

function main() {
	v.init_window(window);
	scene.create('example', scene_example);
	scene.goto('example');

	while(!r.WindowShouldClose()) {
		scene.update();
		r.BeginDrawing();
			scene.draw();
		r.EndDrawing();
	}	
	r.CloseWindow();
}

main();
