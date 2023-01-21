const r = require('raylib');
const v = require('../../vike');

const Player = {
	x: 800,
	y: 450,
};

Player.init  = function() {
	this.spr = v.create_anim(v.load_sprite('./assets/square_animation-sheet.png'), 'player_anim', 0, 0, 64, 64, 12);
}

Player.update = function() {
	let md = false; 
	let move_dir = v.vec2(0, 0);
	let move_speed = 10;
	let move_speed_og = move_speed; 

	let key_left  = r.IsKeyDown(r.KEY_A); 
	let key_right = r.IsKeyDown(r.KEY_D); 
	let key_up    = r.IsKeyDown(r.KEY_W); 
	let key_down  = r.IsKeyDown(r.KEY_S); 

	move_dir.x = key_right - key_left; 
	move_dir.t = key_down - key_up;	

	if (move_dir.x != 0 && move_dir.y != 0) {
		md = true; 
	}

	move_speed = move_speed_og;	
	if (md) move_speed = move_speed_og * 0.707;

	this.x += move_dir.x * move_speed; 
	this.y += move_dir.t * move_speed; 
	this.spr.update(1);
}

Player.draw = function() {
	this.spr.draw(this.x, this.y);
}

const SceneExample =  {};
let player;

SceneExample.init = function() {
	player = v.add_obj(Player, 'player');
	player.init();
}

SceneExample.update = function() {
	player.update();
}

SceneExample.draw = function() {
	r.ClearBackground(r.BLACK);
	r.DrawText("Example scene", 8, 8, 42, r.RAYWHITE);
	player.draw();
}

module.exports = SceneExample;
