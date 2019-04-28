// user_prog.js

'use strict';

require = require("esm")(module/*, options*/);
const stone = require("./web_ui/js/stone.js");

var r = stone.stone_weight(1,2,3, 1);
console.log("stone.stone_weight(): " + r);


