let scenes = []; 
let active_scene = ""; 

function create(name, init, update, draw) {
  let scene = {
		name : name, 
		init : init, 
		update : update, 
		draw : draw
  }; 
	scenes.push(scene); 
	console.log("SCENE_HANDLER::Created Scene::" + name); 
	return scene; 
}

function init() {
	get_current().init();
}

function update() {
	get_current().update(); 
}

function draw() {
	get_current().draw(); 
}

function goto(name) {
	active_scene = get_scene(name).name; 
	console.log("SCENE_HANDLER::Loading Scene::" + name); 
	init(); 	
}

function get_current() {
	return get_scene(active_scene); 
}

// TODOO: There are optmizations to be made here, since this gets called like 2 times per frame.
function get_scene(name) {
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			return scenes[i]; 
		}
	}
}

module.exports = {create, init, update, draw, goto};
