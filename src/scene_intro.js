const r = require('raylib'); 
const scene = require('../comps/scene_handler.js'); 

let timer = 120; 
let time = 0;

function init() {
	console.log("Loaded Intro Scene"); 
}

function update() {
	if (time < timer) {
		time += 1; 
	} else {
		scene.goto("main"); 
	}
}

function draw() {
  r.ClearBackground(r.RAYWHITE); 
  r.DrawText("VIKE In Node_Raylib", 400, 400, 48, r.MAROON); 
}

module.exports = {init, update, draw}; 
