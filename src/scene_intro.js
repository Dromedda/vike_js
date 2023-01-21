const r = require('raylib'); 
const scene = require('../comps/scene_handler.js'); 

let timer = 30; 
let time = 0;

function init() {
}

function update() {
	time++; 
	if (time > timer) scene.goto("main"); 
}

function draw() {
  r.ClearBackground(r.RAYWHITE); 
  r.DrawText("VIKE In Node_Raylib", 400, 400, 48, r.MAROON); 
}

module.exports = {init, update, draw};
