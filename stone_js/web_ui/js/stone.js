// stone.js

'use strict';

import * as stoneSub from './stone_sub.js';

// ####################################
// helper stuff
// ####################################

const callStat = new stoneSub.CallStatistics();

// ####################################
// the stone core
// ####################################

/**
 * Compute the weight of a brick based on the size of the parallepiped and the density of the material.
 * @param {float} width - first dimension of the brick (in meter)
 * @param {float} height - second dimension of the brick (in meter)
 * @param {float} thickness - third dimension of the brick (in meter)
 * @param {float} density - density of the material (in Kg/m3)
 * @returns {float} weight - the weight of the brick (in Kg)
 */
function stoneWeight (width = 0.4, height = 0.2, thickness = 0.2, density = 2800) {
  console.log('stone_core: stoneWeight: width: ' + width);
  callStat.tickOffBrickWeight();
  console.log('W: ' + width.toFixed(2) + '  H: ' + height.toFixed(2) +
      '  T: ' + thickness.toFixed(2) + '  D: ' + density.toFixed(2));
  let rWeight = width * height * thickness * density;
  return rWeight;
}

/**
 * Compute the thermal conductivity of a wall based of the material characterisitics and the dimension of the wall.
 * @param {float} conductivity - thermal conductivity of the material (in W/(K.m))
 * @param {float} thickness - the thickness of the wall (in m)
 * @returns {float} wall_conductivity - (in w/(K.m2))
 */
function wallThermalConductivity (conductivity = 3.1, thickness = 0.2) {
  console.log('stone_core: wallThermalConductivity: conductivity: ' + conductivity.toFixed(2));
  callStat.tickOffWallThermalConductivity();
  let rWallConductivity = conductivity / thickness;
  return rWallConductivity;
}

/**
 * The sugar
 * @returns {json} - containing text on how oft the previous functions have been used
 */
function callActivities () {
  console.log('stone_core: callActivities');
  return { visit_stat: callStat.getStatistics() };
}

// ####################################
// module export
// ####################################

export {
  stoneWeight,
  wallThermalConductivity,
  callActivities
};
