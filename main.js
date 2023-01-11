const r = require('raylib');

// import the scenes and scene_handler
const scene = require('./comps/scene_handler.js');
const v = require('./vike.js'); 
const main_scene = require('./src/scene_main.js'); 
const intro_scene = require('./src/scene_intro.js'); 
const menu_scene = require('./src/scene_menu.js'); 

const window = {
	height: 800, 
	width: 1400, 
	title: "Vike_js", 
	targetFPS: 60
}

function main() {
	v.init_window(window); 

	scene.create("menu", menu_scene.init, menu_scene.update, menu_scene.draw); 
	scene.create("intro", intro_scene.init, intro_scene.update, intro_scene.draw); 
	scene.create("main", main_scene.init, main_scene.update, main_scene.draw); 

	scene.goto("intro"); 

	while(!r.WindowShouldClose()) {
  	scene.update();

		r.BeginDrawing();
			scene.draw(); 
		r.EndDrawing(); 
	}
	r.CloseWindow();
}
main(); 
