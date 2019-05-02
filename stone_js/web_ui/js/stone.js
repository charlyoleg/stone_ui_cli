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

/**
 * Compute the weight of a brick based on the size of the parallepiped and the density of the material.
 * @param {float} width - first dimension of the brick (in meter)
 * @param {float} height - second dimension of the brick (in meter)
 * @param {float} thickness - third dimension of the brick (in meter)
 * @returns {float} weight - the weight of the brick (in Kg)
 */
function stone_weight(width = 0.4, height = 0.2, thickness = 0.2, density = 2800) {
    console.log('stone_core: stone_weight: width: ' + width);
    call_stat.tick_off_brick_weight();
    console.log("W: " + width.toFixed(2) + "  H: " + height.toFixed(2) +
        "  T: " + thickness.toFixed(2) + "  D: " + density.toFixed(2));
    let r_weight = width * height * thickness * density;
    return r_weight;
}

/**
 * Compute the thermal conductivity of a wall based of the material characterisitics and the dimension of the wall.
 * @param {float} conductivity - thermal conductivity of the material (in W/(K.m))
 * @param {float} thickness - the thickness of the wall (in m)
 * @returns {float} wall_conductivity - (in w/(K.m2))
 */
function wall_thermal_conductivity(conductivity = 3.1, thickness = 0.2) {
    console.log('stone_core: wall_thermal_conductivity: conductivity: ' + conductivity.toFixed(2));
    call_stat.tick_off_wall_thermal_conductivity();
    let r_wall_conductivity = conductivity / thickness;
    return r_wall_conductivity;
}

/**
 * The sugar
 * @returns {json} - containing text on how oft the previous functions have been used
 */
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

