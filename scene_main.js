const player = require("./player.js"); 

function init() {
	player.init(); 
}

function update() {
	player.update(); 
}

function draw() {
	player.draw(); 
}

module.exports = {init, update, draw}; 
