const r = require('raylib'); 
const player = require("./player.js"); 

function init() {
	player.init(200, 200); 
}

function update() {
	player.update(); 
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4); 
	player.draw(); 
}

module.exports = {init, update, draw}; 
