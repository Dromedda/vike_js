const v = require('../vike.js');
const r = require('raylib');

const Sensor = class {
	constructor(x, y, w, h) {
		this.x = x; 
		this.y = y; 
		this.width = w;  
		this.height = h; 
		this.isCarried = false; 
		v.add_obj(this, 'sensor'); 
	}
	
	update() {
		this.check_if_carried(); 
		if (!this.isCarried && v.check_collision2d(this, v.object_get('block'))) {
			this.x = Math.floor(Math.random() * 1200); 
			this.y = Math.floor(Math.random() * 500); 
		}
	}
	
	draw() {
		r.DrawRectangle(this.x, this.y, this.width, this.height, r.BLUE);
	}

	check_if_carried() {
		let player = v.object_get('player');
	
		if (v.check_collision2d(this, player) && r.IsKeyPressed(r.KEY_SPACE)) {
			this.isCarried = !this.isCarried;		
		}

		if (this.isCarried) {
			this.x = player.x + (player.width / 4);
			this.y = player.y + (player.height / 4);
		}
	}
}

module.exports = Sensor; 
