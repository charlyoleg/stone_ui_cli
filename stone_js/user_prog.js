// user_prog.js

'use strict';

// A black-magic solution from ESM, waiting for the official support for es6-module by nodejs, planned with node-V12.0
require = require("esm")(module/*, options*/);
const stone = require("./web_ui/js/stone.js");

var r = stone.stone_weight(1,2,3, 1);
console.log("stone.stone_weight(): " + r);


