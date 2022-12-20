const r = require('raylib');

let objects = []; 

// Adds the object to the world for future reference.
function add_obj(_class, _name) {
	_class.name = _name; 
	objects.push(_class); 
	console.log("VIKE::Object Available::" + _name);  
}

// TODOOO: This should die, because we are going oop.
function create_obj_2d(type, name, x, y, w, h) {
	let obj = r.Rectangle(x, y, w, h);
	obj.name = name;
	obj.func = type;
	objects.push(obj);
	console.log("VIKE::Object Available::" + obj.name);
	return obj;
}

function object_get(name) {
	for(let i = 0; i < objects.length; i++) {
		if (objects[i].name == name) {
			return objects[i]; 
		}
	}
	console.log("VIKE:: Cannot find object");
}

// TODOOO: VALIDATE A & B!
// TODO: Add optional Params for offsets for a's position
function check_collision2d(a, b) {
	return (
		a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		b.y < a.y + a.width &&
		b.y + b.width > a.y
	); 
}

module.exports = {create_obj_2d, check_collision2d, object_get, add_obj};
