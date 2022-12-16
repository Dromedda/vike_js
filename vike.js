const r = require('raylib');

let objects = []; 

function create_obj_2d(type, name, x, y, w, h) {
  let obj = r.Rectangle(x, y, w, h);
  obj.name = name;
	obj.func = type;
  objects.push(obj);
  console.log("VIKE::Object Available:: ");
  console.table(obj);
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

function check_collision2d(a, b) {
	if (
  	a.x < b.x + b.width &&
  	a.x + a.width > b.x &&
  	b.x < a.x + a.width &&
  	b.x + b.width > a.x
	) {
  	return true;
	} else {
		return false;
	}
}

module.exports = {create_obj_2d, check_collision2d, object_get};
