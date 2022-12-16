let scenes = []; 
let active_scene = ""; 

// TODO: Would be nice to create the scenes in the scenes themselves. 
// TODO: Might wanna fix naming between create and init 
// to something like init and load instead of create and init.

// Adds a scene to the list of scenes.
// also defines the functions which will 
// be called when the scene is called.
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
	// TODO: just use get_scene dumbass
  for (let i = 0; i < scenes.length; i++) {
		if (scenes[i].name == active_scene) {
			return scenes[i];
		}
	}
	throw "Cant Find the current scene"; 
}

function get_scene(name) {
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			return scenes[i]; 
		}
	}
	throw "Cant find the scene, that was being looked for. Scene looked for: " + name;
}

module.exports = {create, init, update, draw, goto};
