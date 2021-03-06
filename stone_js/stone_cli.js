#!/usr/bin/env node
// stone_cli.js

'use strict';

// Use commander as cli-library
const cli = require("commander");

// import the core logic stone.js
// A black-magic solution from ESM, waiting for the official support for es6-module by nodejs, planned with node-V12.0
require = require("esm")(module/*, options*/);
const stone = require("./web_ui/js/stone.js");
// With node V12.0, this will be replaced by
//import * as stone from './web_ui/js/stone.js';


// =================================
// define the cli
// =================================
cli
  .version('0.1.0');

cli
  .command('stone_weight')
  .option('-w, --width [Width]', 'the width of the brick (in m)', parseFloat, 0.4)
  .option('-H, --height [Height]', 'the height of the brick (in m)', parseFloat, 0.2)
  .option('-t, --thickness [Thickness]', 'the thickness of the brick (in m)', parseFloat, 0.2)
  .option('-d, --density [Density]', 'the density of the material (in kg/m3)', parseFloat, 2800)
  .action( (options) => {
    console.log("stone_weight options: width: %f   height: %f   thickness: %f   density: %f",
      options.width, options.height, options.thickness, options.density);
    // core computation
    let r = stone.stoneWeight(options.width, options.height, options.thickness, options.density);
    console.log("stone.stoneWeight(): " + r.toFixed(2) + " Kg");
});

cli
  .command('wall_thermal_conductivity')
  .option('-c, --conductivity [Conductivity]', 'the conductivity of the material (in W/(k.m) )', parseFloat, 3.1)
  .option('-t, --thickness [Thickness]', 'the thickness of the brick (in m)', parseFloat, 0.2)
  .action( (options) => {
    console.log("wall_thermal_conductivity options: conductivity: %f   thickness: %f",
      options.conductivity, options.thickness);
    // core computation
    let r = stone.wallThermalConductivity(options.conductivity, options.thickness);
    console.log("stone.wallThermalConductivity(): " + r.toFixed(2) + " W/(k.m2)");
});

cli
  .command('call_activities')
  .action( (options) => {
    // core computation
    let r = stone.callActivities();
    console.log("stone.callActivities() .visit_stat:\n" + r.visit_stat);
});

cli
  .command('*')
  .action( (cmd) => {
    console.log("ERR234: Error, unkown command: " + cmd);
});


// =================================
// execute the cli
// =================================
cli.parse(process.argv);

