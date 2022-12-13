const r = require('raylib');
const scene = require('./scene_handler.js'); 
const main_scene = require("./scene_main.js"); 

const screenWidth = 1400; 
const screenHeight = 800;

function main() {

	scene.create("main", main_scene.init, main_scene.update, main_scene.draw); 
  
	r.InitWindow(screenWidth, screenHeight, "Vike_JS"); 
	r.SetTargetFPS(60); 

	// automatically load the scene.
	scene.goto("main"); 

	while(!r.WindowShouldClose()) {
  	scene.update(); 
		r.BeginDrawing(); 
		r.ClearBackground(r.RAYWHITE); 
		r.DrawText("VIKE_JS", screenWidth/2, screenHeight/2, 32,r.GRAY); 
		scene.draw(); 
		r.EndDrawing(); 
	}

	r.CloseWindow(); 
}

main(); 
