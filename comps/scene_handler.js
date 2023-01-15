let scenes = []; 
let active_scene = ""; 
let previously_searched_for_scene = {name: ""}; 

const SceneHandler = {}; 

SceneHandler.create = function(name, _scene) {
	let scene = {
		name: name, 
		init: _scene.init, 
		update: _scene.update, 
		draw: _scene.draw
	}; 

	scenes.push(scene); 
	console.log("SCENE_HANDLER::Created Scene::" + name); 
	return scene; 
}

// -- Flow -- //
SceneHandler.init = function() {
	this.get_current().init();
}

SceneHandler.update = function() {
	this.get_current().update(); 
}

SceneHandler.draw = function() {
	this.get_current().draw(); 
}

// Goes to a scene, and calls that scenes init function, if the scene can be found.
SceneHandler.goto = function (name) {
	active_scene = this.get_scene(name).name; 
	console.log("SCENE_HANDLER::Loading Scene::" + name); 
	this.init(); 	
}

SceneHandler.get_current = function() {
	return this.get_scene(active_scene); 
}

// returns the scene with the name applied, if there is one.
SceneHandler.get_scene = function(name) {
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

module.exports = SceneHandler; 
