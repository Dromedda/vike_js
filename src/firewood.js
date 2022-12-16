const r = require('raylib'); 

let firewood = { x : 400, y : 200, width : 32, height : 32 };

function init() {
}

function update() {
}

function draw() {
	r.DrawRectangle(firewood.x, firewood.y, 32, 32, r.RED); 
}

module.exports = {init, update, draw}; 
