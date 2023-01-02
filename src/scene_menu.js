const r = require('raylib'); 
const v = require("../vike.js"); 
const scene = require("../comps/scene_handler.js"); 

let StartButton = {x : 700, y : 400, width : 400, height : 160}; 

function init() {}

function update() {
  let mouse_pos = {x : r.GetMouseX(),y : r.GetMouseY(), width : 4, height: 4};

	if (v.check_collision2d(mouse_pos, StartButton)) {
		scene.goto("main"); 		
	}
}

function draw() {
  r.ClearBackground(r.RAYWHITE); 
	r.DrawRectangle(StartButton.x, StartButton.y, StartButton.width, StartButton.height, r.LIGHTGRAY);   
	r.DrawText("Start Game", StartButton.x, StartButton.y, 28, r.BLACK); 
}

module.exports = {init, update, draw}; 
