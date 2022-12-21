let scenes = []; 
let active_scene = ""; 
let previously_searched_for_scene = {name: ""}; 

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

function get_scene(name) {
	// we do this if the scene has not changes since previous call. 
	if (previously_searched_for_scene.name === name) {
		return previously_searched_for_scene; 
	}
	
	// If the scene has changes go through the list of known scenes. 
	for (let i = 0; i < scenes.length; i++) {
		if (name == scenes[i].name) {
			previously_searched_for_scene = scenes[i]; 
			return scenes[i]; 
		}
	}
	
	console.log("VIKE::SCENE_HANDLER::CANNOT FIND SCENE"); 
}

module.exports = {create, init, update, draw, goto};
