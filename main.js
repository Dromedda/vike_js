const r = require('raylib');

const scene = require('./comps/scene_handler.js'); 
const main_scene = require('./src/scene_main.js'); 
const intro_scene = require('./src/scene_intro.js'); 
const menu_scene = require('./src/scene_menu.js'); 

const screenWidth = 1400; 
const screenHeight = 800;

function main() {
	r.InitWindow(screenWidth, screenHeight, "Vike_JS"); 
	r.SetTargetFPS(60); 

	scene.create("menu", menu_scene.init, menu_scene.update, menu_scene.draw); 
	scene.create("intro", intro_scene.init, intro_scene.update, intro_scene.draw); 
	scene.create("main", main_scene.init, main_scene.update, main_scene.draw); 

  // scene.goto("menu");  

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
