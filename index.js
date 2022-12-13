const r = require('raylib');
const scene = require('./comps/scene_handler.js'); 
const main_scene = require("./src/scene_main.js"); 

const screenWidth = 1400; 
const screenHeight = 800;

function main() {
	r.InitWindow(screenWidth, screenHeight, "Vike_JS"); 
	r.SetTargetFPS(60); 

	scene.create("main", main_scene.init, main_scene.update, main_scene.draw); 
	scene.goto("main"); 

	while(!r.WindowShouldClose()) {
  	scene.update(); 

		r.BeginDrawing(); 
			r.ClearBackground(r.RAYWHITE); 
			r.DrawFPS(8, 8); 
			scene.draw(); 
		r.EndDrawing(); 
	}

	r.CloseWindow(); 
}

main(); 
