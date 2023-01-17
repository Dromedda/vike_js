const r = require('raylib');

const Vike = {};
let objects = []; 

Vike.init_window = function(win) {
	console.log("VIKE::Initialized Window.." + win.title); 
	r.InitWindow(win.width, win.height, win.title);; 
	r.SetTargetFPS(win.targetFPS); 
} 

Vike.add_obj = function(_class, _name) {
	_class.name = _name; 
	_class.id = generate_unique_id(); 
	objects.push(_class); 
	console.log("VIKE::Object Available::" + _name);  
	return _class; 
}

Vike.vec2 = function(v1, v2) {
	return{x:v1, y:v2}; 
}

Vike.log = function(str) {
	console.log("VIKE::LOG::" + str); 
}

Vike.load_sprite = function(path = null) {
	this.log("Tried loading a sprite, which isnt implemented yet..."); 
	let ret = r.LoadTexture(path); 
	return ret;
}

Vike.draw_sprite = function(spr, posx, posy, col) {
	r.DrawTexture(spr, posx, posy, col); 
}

// TODOO: Might just wanna make the camera var local to vike, making it easier to use,
// however will limit the amount of cameras to 1.
Vike.camera_init = function(offset = vec2(0, 0), target = vec2(0, 0), rotation = 0, scale = 1) {
	let camera = r.Camera2D(offset, target, rotation, scale); 
	return camera; 
}

Vike.camera_set = function(camera) {
	// TODO: validate Camera
	r.BeginMode2D(camera); 
}

Vike.camera_unset = function() {
	r.EndMode2D(); 
}

Vike.camera_goto = function(camera, pos, smoothing=1) {
	let to = {
		x: pos.x - camera.target.x,
		y: pos.y - camera.target.y
	}; 

	camera.target.x += (to.x) / smoothing; 
	camera.target.y += (to.y) / smoothing; 
}

Vike.camera_centered = function(camera) {
	// TODO: validate Camera
	camera.offset = this.vec2(r.GetScreenWidth()/2, r.GetScreenHeight()/2); 
}

// TODO: this only returns the first result
// this is problematic if there is multiple instances of a object.
Vike.object_get = function(name) {
	let ret; 
	for(let i = 0; i < objects.length; i++) {
		if (objects[i].name === name) {
			ret = objects[i]; 
		}
	}

	if (ret == undefined) console.log("VIKE:: Cannot find object");
	return ret; 
}

// TODOO: Check if offsets work
Vike.check_collision2d = function(a, b, aox = 0, aoy = 0, box = 0, boy = 0) {
	return (
		a.x + aox < b.x + box + b.width &&
		a.x + aox + a.width > b.x + box &&
		b.y + boy < a.y + aoy + a.width &&
		b.y + boy + b.width > a.y + aoy
	); 
}

// Clamps the pos vec2 to the screen.
// ent requires x,y,width,height props.
Vike.clamp_obj_to_screen = function(ent, pos, spd) {
    let targetX = pos.x * spd; 
    let targetY = pos.y * spd; 
    
    // Clamp player to the screen.
    if (ent.x + targetX > (r.GetScreenWidth() - ent.width) || ent.x + targetX < 0) { pos.x = 0; }
    if (ent.y + targetY > (r.GetScreenHeight() - ent.height) || ent.y + targetY < 0) { pos.y = 0; }
	
	return pos; 
}

function generate_unique_id() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

module.exports = Vike; 
