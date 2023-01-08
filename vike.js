const r = require('raylib');

let objects = []; 

// Adds the object to the world for future reference.
function add_obj(_class, _name) {
	_class.name = _name; 
	_class.id = generate_unique_id(); 
	objects.push(_class); 
	console.log("VIKE::Object Available::" + _name);  
}

// Create a vector2
function vec2(v1, v2) {
	return {x: v1, y: v2}; 
}

// returns a vector 3
function vec3(v1, v2, v3) {
	return {x: v1, y: v2, z: v3}; 
}

// Clamps the pos vec2 to the screen.
// ent requires x,y,width,height props.
function clamp_obj_to_screen(ent, pos, spd) {
	// TODOO: This is not perfect, its still kinda iffy. 
    let targetX = pos.x * spd; 
    let targetY = pos.y * spd; 
    
    // Clamp player to the screen.
    if (ent.x + targetX > (r.GetScreenWidth() - ent.width) || ent.x + targetX < 0) { pos.x = 0; }
    if (ent.y + targetY > (r.GetScreenHeight() - ent.height) || ent.y + targetY < 0) { pos.y = 0; }
	
	return pos; 
}

// just a wrapper for console.log, because who can be bothered to type console.log everytime.
function log(str) {
	console.log("VIKE::LOG::" + str); 
}

// TODO: this only returns the first result
// this is problematic if there is multiple instances of a object.
function object_get(name, id = -1) {
	let ret; 
	for(let i = 0; i < objects.length; i++) {
		if (objects[i].name == name) {
			ret = objects[i]; 
		}
	}

	if (ret == undefined) console.log("VIKE:: Cannot find object");
	return ret; 
}

// TODO: add validation
function check_collision2d(a, b, aox = 0, aoy = 0, box = 0, boy = 0) {
	return (
		a.x + aox < b.x + box + b.width &&
		a.x + aox + a.width > b.x + box &&
		b.y + boy < a.y + aoy + a.width &&
		b.y + boy + b.width > a.y + aoy
	); 
}

function generate_unique_id() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// TODOO: make this a class instead.
module.exports = {check_collision2d, object_get, add_obj, log,clamp_obj_to_screen, vec2};
