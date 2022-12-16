const r = require('raylib');
const player = require("./player.js"); 
const firewood = require('./firewood.js'); 

function init() {
	player.init(200, 200); 
	firewood.init(); 
}

function update() {
	player.update(); 
}

function draw() {
 	r.ClearBackground(r.RAYWHITE);  
 	r.DrawFPS(4, 4); 
	player.draw(); 
	firewood.draw(); 
}

module.exports = {init, update, draw};
