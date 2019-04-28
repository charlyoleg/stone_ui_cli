// stone.js

'use strict';

import * as stone_sub from './stone_sub.js';

// ####################################
// helper stuff
// ####################################


const call_stat = new stone_sub.CallStatistics();


// ####################################
// the stone core
// ####################################

function stone_weight(width, height, thickness, density) {
    console.log('stone_core: stone_weight: width: ' + width);
    call_stat.tick_off_brick_weight();
    console.log("W: " + width.toFixed(2) + "  H: " + height.toFixed(2) +
        "  T: " + thickness.toFixed(2) + "  D: " + density.toFixed(2));
    let r_weight = width * height * thickness * density;
    return r_weight;
}

function wall_thermal_conductivity(conductivity, thickness) {
    console.log('stone_core: wall_thermal_conductivity: conductivity: ' + conductivity.toFixed(2));
    call_stat.tick_off_wall_thermal_conductivity();
    let r_wall_conductivity = conductivity / thickness;
    return r_wall_conductivity;
}

// the sugar
function call_activities() {
    console.log('stone_core: call_activities');
    return { visit_stat: call_stat.get_statistics() };
}


// ####################################
// module export
// ####################################

export {
  stone_weight,
  wall_thermal_conductivity,
  call_activities
};

