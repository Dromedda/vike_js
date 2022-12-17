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
	return scene; 
}

//init the current scene.
function init() {
	get_current().init();
}

// Calls the update func for the current scene.
function update() {
	get_current().update(); 
}

// Calls the draw func for the current scene.
function draw() {
	get_current().draw(); 
}

// Goto a scene based on its name provided when created.
function goto(name) {
	active_scene = get_scene(name).name; 
	init(); 	
}

// returns null if no scene with the name provided 
function get_current() {
	return get_scene(active_scene); 
}

function get_scene(name) {
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			return scenes[i]; 
		}
	}
}

module.exports = {create, init, update, draw, goto};
