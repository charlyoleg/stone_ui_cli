// web_ui.js

'use strict';

import * as stone from './stone.js';
// import {stoneWeight, wallThermalConductivity, callActivities} from './stone.js';

function stoneComputeWithFrontendJs () {
  // read the input parameter
  let bw  = parseFloat(document.querySelector('#input_brick_width').value);
  let bh  = parseFloat(document.querySelector('#input_brick_height').value);
  let bt  = parseFloat(document.querySelector('#input_brick_thickness').value);
  let md  = parseFloat(document.querySelector('#input_material_density').value);
  let mtc = parseFloat(document.querySelector('#input_material_thermal_conductivity').value);

  // // Using the front-end javascript

  let computedMass = stone.stoneWeight(bw, bh, bt, md);
  // let computedMass = stoneWeight(bw, bh, bt, md);
  console.log(computedMass);
  document.querySelector('#brick_mass').innerHTML = computedMass.toFixed(2);

  let computedThermalConductivity = stone.wallThermalConductivity(mtc, bt);
  // let computedThermalConductivity = wallThermalConductivity(m_tc, b_t);
  console.log(computedThermalConductivity);
  document.querySelector('#wall_thermal_conductivity').innerHTML = computedThermalConductivity.toFixed(2);

  let sugar = stone.callActivities();
  // let sugar = callActivities();
  console.log(sugar.visit_stat);
  document.querySelector('#compute_stat').innerHTML = sugar.visit_stat.replace(/\n/g, '<br>');
}

function stoneComputeWithRestServer () {
  // read the input parameter
  let bw  = document.querySelector('#input_brick_width').value;
  let bh  = document.querySelector('#input_brick_height').value;
  let bt  = document.querySelector('#input_brick_thickness').value;
  let md  = document.querySelector('#input_material_density').value;
  let mtc = document.querySelector('#input_material_thermal_conductivity').value;

  // // Using the restful micro-service

  //  Request for Brick_Mass
  // let xhttp_mass = new XMLHttpRequest();
  // xhttp_mass.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     // Action to be performed when the document is ready:
  //     let computedMass = parseFloat(xhttp_mass.responseText);
  //     console.log(computedMass);
  //     document.querySelector("#brick_mass").innerHTML = computedMass.toFixed(2);
  //   }
  // };
  // xhttp_mass.open("GET",
  //   "https://localhost:8443/stoneWeight?width="+b_w+"&height="+b_h+"&thickness="+b_t+"&density="+m_d,
  //   true);
  // xhttp_mass.send();
  fetch('https://localhost:8443/stone_weight?width=' + bw + '&height=' + bh + '&thickness=' + bt + '&density=' + md)
    .then((res) => { // http response
      if (res.ok) {
        return res.text(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then((resText) => {
      console.log('fetch response text: ', resText);
      let computedMass = parseFloat(resText);
      console.log(computedMass);
      document.querySelector('#brick_mass').innerHTML = computedMass.toFixed(2);
    }).catch(function (error) {
      console.log('Failing fetch operation: ', error.message);
    });

  // Request for wallThermalConductivity
  fetch('https://localhost:8443/wall_thermal_conductivity?thickness=' + bt + '&conductivity=' + mtc)
    .then((res) => { // http response
      if (res.ok) {
        return res.text(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then((resText) => {
      console.log('fetch response text: ', resText);
      let computedThermalConductivity = parseFloat(resText);
      console.log(computedThermalConductivity);
      document.querySelector('#wall_thermal_conductivity').innerHTML = computedThermalConductivity.toFixed(2);
    }).catch(function (error) {
      console.log('Failing fetch operation: ', error.message);
    });

  // Request for Computation-statistics
  fetch('https://localhost:8443/call_activities')
    .then((res) => { // http response
      if (res.ok) {
        return res.json(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then((resJson) => {
      // console.log('fetch response json: ', JSON.stringify(resJson));
      // console.log('fetch response json raw: ', resJson);
      console.log(resJson.visit_stat);
      document.querySelector('#compute_stat').innerHTML = resJson.visit_stat.replace(/\n/g, '<br>');
    }).catch(function (error) {
      console.log('Failing fetch operation: ', error.message);
    });
}

// ==========================================
//  Adding listners
// ==========================================

document.querySelector('#button_rest_server').addEventListener('click', stoneComputeWithRestServer);
document.querySelector('#button_frontend_js').addEventListener('click', stoneComputeWithFrontendJs);
