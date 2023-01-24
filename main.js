const r = require('raylib');

// import the scenes and scene_handler
const scene = require('./comps/scene_handler');
const v = require('./vike'); 
const scene_intro = require('./src/scenes/scene_intro');
const scene_main = require('./src/scenes/scene_main');

const window = {
	height: 800, 
	width: 1400, 
	title: "Vike_js", 
	targetFPS: 60
}

function main() {
	v.init_window(window); 

	scene.create('intro', scene_intro);
	scene.create('main', scene_main);
	scene.goto('intro');
	
	while(!r.WindowShouldClose()) {
  	scene.update();

		r.BeginDrawing();
			scene.draw(); 
		r.EndDrawing(); 
	}
	//scene.destory();
	r.CloseWindow();
}
main();
