const r = require('raylib');

// import the scenes and scene_handler
const scene = require('./comps/scene_handler.js');
const v = require('./vike.js'); 
const scene_birf = require('./src/scene_birf');

const window = {
	height: 800, 
	width: 1400, 
	title: "Vike_js", 
	targetFPS: 60
}

function main() {
	v.init_window(window); 

	scene.create('birf', scene_birf); 
	scene.goto('birf');

	while(!r.WindowShouldClose()) {
  	scene.update();

		r.BeginDrawing();
			scene.draw(); 
		r.EndDrawing(); 
	}
	r.CloseWindow();
}
main();
