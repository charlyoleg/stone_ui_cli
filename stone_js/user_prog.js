// user_prog.js

'use strict';

// A black-magic solution from ESM, waiting for the official support for es6-module by nodejs, planned with node-V12.0
require = require("esm")(module/*, options*/);
const stone = require("./web_ui/js/stone.js");
// With node V12.0, this will be replaced by
//import * as stone from './web_ui/js/stone.js';

// dummy try
var r = stone.stoneWeight(1,2,3, 1);
console.log("stone.stoneWeight(1,2,3, 1): " + r);

// mass of a limestone brick
var r = stone.stoneWeight(0.4, 0.2, 0.2, 2800);
//var r = stone.stoneWeight(0.4, 0.2, 0.2); // thanks to paramter default values
//var r = stone.stoneWeight(); // thanks to paramter default values
console.log("limestone brick mass: " + r.toFixed(2) + " kg");

// thermal conductivity of a limestone brick
var r = stone.wallThermalConductivity(3.1, 0.2);
console.log("thermal conductivity of limeston wall: " + r.toFixed(1) + " W/(m2.K)\n");

// display the call statistics
var r = stone.callActivities();
console.log("Print a part of the json:");
console.log(r.visit_stat);

console.log("end of user_prog.js");

