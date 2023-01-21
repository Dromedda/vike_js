const r = require('raylib'); 

let SceneBirf = {}; 
let sentence;
let frame = 0;

SceneBirf.init = function() {
	sentence = "Happy Birthday!, ur now old :)"; 
}

SceneBirf.update = function() {
	frame += 0.5;
	if (frame > sentence.length * 5) frame = 0;	
}

SceneBirf.draw = function() {
	r.ClearBackground(r.BLACK);
	r.DrawText(r.TextSubtext(	sentence, 0,  frame), 
														r.GetScreenWidth()/4, 
														r.GetScreenHeight()/2, 
														48, 
														r.RAYWHITE);

	for (let i = 0; i < 5; i++) {
		let len = sentence.length; 
		if (frame > len * i){
			r.DrawRectangle(16 + (32 * i),
											r.GetScreenHeight() - 48, 
											28, 
											28, 
											r.RAYWHITE);
		}
	}
}

module.exports = SceneBirf;

