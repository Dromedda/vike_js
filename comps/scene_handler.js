let scenes = []; 
let active_scene = ""; 
let previously_searched_for_scene = {name: ""}; 

// TODO:  Do we really need to pass each flow function?
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

// -- Flow -- //
function init() {
	get_current().init();
}

function update() {
	get_current().update(); 
}

function draw() {
	get_current().draw(); 
}

// Goes to a scene, and calls that scenes init function, if the scene can be found.
function goto(name) {
	active_scene = get_scene(name).name; 
	console.log("SCENE_HANDLER::Loading Scene::" + name); 
	init(); 	
}

function get_current() {
	return get_scene(active_scene); 
}

// returns the scene with the name applied, if there is one.
function get_scene(name) {
	if (previously_searched_for_scene.name === name) {
		return previously_searched_for_scene; 
	}
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			previously_searched_for_scene = scenes[i]; 
			return scenes[i]; 
		}
	}
	console.log("VIKE::SCENE_HANDLER::CANNOT FIND SCENE"); 
}

module.exports = {create, init, update, draw, goto};
