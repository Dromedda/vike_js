const r = require('raylib');
const scene = require('./comps/scene_handler.js'); 
const main_scene = require("./src/scene_main.js"); 

const screenWidth = 1400; 
const screenHeight = 800;

function main() {
	r.InitWindow(screenWidth, screenHeight, "Vike_JS"); 
	r.SetTargetFPS(60); 

	// create and init the main scene.
	scene.create("main", main_scene.init, main_scene.update, main_scene.draw); 
	scene.goto("main"); 

	while(!r.WindowShouldClose()) {
  	// Main Update event ---
  	scene.update(); 

		// Main drawing event ---
		r.BeginDrawing(); 
			scene.draw(); 
		r.EndDrawing(); 
	}
	// Exit the application.
	r.CloseWindow(); 
}

// call the main func
main(); 
