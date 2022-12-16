const r = require('raylib'); 

let firewood = { x : 0, y : 0 };

function init() {

}

function update() {

}

function draw() {
	r.DrawRectangle(firewood.x, firewood.y, 32, 32, r.RED); 
}

module.exports = {init, update, draw}; 
