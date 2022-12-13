let scenes = []; 
let active_scene = ""; 

// TODO: Would be nice to create the scenes in the scenes themselves. 
// TODO: Might wanna fix naming between create and init 
	// to something like init and load instead of create and init.
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
	init(); 	
}

// returns null if no scene with the na
function get_current() {
	for (let i = 0; i < scenes.length; i++) {
		if (scenes[i].name == active_scene) {
			return scenes[i];
		}
	}
	console.log("CANNOT FIND ACTIVE SCENE: " + active_scene); 
}

function get_scene(name) {
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			return scenes[i]; 
		}
	}
	console.log("CANNOT FIND SCENE: " + name); 
}

module.exports = {create, init, update, draw, goto}; 
