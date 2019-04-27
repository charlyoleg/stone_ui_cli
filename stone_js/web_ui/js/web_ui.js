// web_ui.js


'use strict';

import * as stone from './stone.js';
//import {stone_weight, wall_thermal_conductivity, call_activities} from './stone.js';


function stone_compute_with_frontend_js(){
  // read the input parameter
  let b_w  = parseFloat(document.querySelector('#input_brick_width').value);
  let b_h  = parseFloat(document.querySelector('#input_brick_height').value);
  let b_t  = parseFloat(document.querySelector('#input_brick_thickness').value);
  let m_d  = parseFloat(document.querySelector('#input_material_density').value);
  let m_tc = parseFloat(document.querySelector('#input_material_thermal_conductivity').value);
  
  
  //// Using the front-end javascript

  let computed_mass = stone.stone_weight(b_w, b_h, b_t, m_d);
  //let computed_mass = stone_weight(b_w, b_h, b_t, m_d);
  console.log(computed_mass);
  document.querySelector("#brick_mass").innerHTML = computed_mass.toFixed(2);

  let computed_thermal_conductivity = stone.wall_thermal_conductivity(m_tc, b_t);
  //let computed_thermal_conductivity = wall_thermal_conductivity(m_tc, b_t);
  console.log(computed_thermal_conductivity);
  document.querySelector("#wall_thermal_conductivity").innerHTML = computed_thermal_conductivity.toFixed(2);

  let sugar = stone.call_activities();
  //let sugar = call_activities();
  console.log(sugar.visit_stat);
  document.querySelector("#compute_stat").innerHTML = sugar.visit_stat.replace(/\n/g, "<br>");

}


function stone_compute_with_rest_server(){
  // read the input parameter
  let b_w  = document.querySelector('#input_brick_width').value
  let b_h  = document.querySelector('#input_brick_height').value
  let b_t  = document.querySelector('#input_brick_thickness').value
  let m_d  = document.querySelector('#input_material_density').value
  let m_tc = document.querySelector('#input_material_thermal_conductivity').value
  
  
  //// Using the restful micro-service

  // Request for Brick_Mass
  //let xhttp_mass = new XMLHttpRequest();
  //xhttp_mass.onreadystatechange = function() {
  //  if (this.readyState == 4 && this.status == 200) {
  //    // Action to be performed when the document is ready:
  //    let computed_mass = parseFloat(xhttp_mass.responseText);
  //    console.log(computed_mass);
  //    document.querySelector("#brick_mass").innerHTML = computed_mass.toFixed(2);
  //  }
  //};
  //xhttp_mass.open("GET",
  //  "https://localhost:8443/stone_weight?width="+b_w+"&height="+b_h+"&thickness="+b_t+"&density="+m_d,
  //  true);
  //xhttp_mass.send();
  fetch("https://localhost:8443/stone_weight?width="+b_w+"&height="+b_h+"&thickness="+b_t+"&density="+m_d)
    .then( (res) => { // http response
      if(res.ok) {
        return res.text(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then( (res_text) => {
      console.log('fetch response text: ', res_text);
      let computed_mass = parseFloat(res_text);
      console.log(computed_mass);
      document.querySelector("#brick_mass").innerHTML = computed_mass.toFixed(2);
    }).catch(function(error) {
      console.log('Failing fetch operation: ', error.message);
    });

  // Request for Wall_Thermal_Conductivity
  fetch("https://localhost:8443/wall_thermal_conductivity?thickness="+b_t+"&conductivity="+m_tc)
    .then( (res) => { // http response
      if(res.ok) {
        return res.text(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then( (res_text) => {
      console.log('fetch response text: ', res_text);
      let computed_thermal_conductivity = parseFloat(res_text);
      console.log(computed_thermal_conductivity);
      document.querySelector("#wall_thermal_conductivity").innerHTML = computed_thermal_conductivity.toFixed(2);
    }).catch(function(error) {
      console.log('Failing fetch operation: ', error.message);
    });


  // Request for Computation-statistics
  fetch("https://localhost:8443/call_activities")
    .then( (res) => { // http response
      if(res.ok) {
        return res.json(); // consuming the http body
      }
      throw new Error('Network response was not ok.');
    }).then( (res_json) => {
      //console.log('fetch response json: ', JSON.stringify(res_json));
      //console.log('fetch response json raw: ', res_json);
      console.log(res_json.visit_stat);
      document.querySelector("#compute_stat").innerHTML = res_json.visit_stat.replace(/\n/g, "<br>");
    }).catch(function(error) {
      console.log('Failing fetch operation: ', error.message);
    });

}

//==========================================
// Adding listners
//==========================================

document.querySelector('#button_rest_server').addEventListener("click", stone_compute_with_rest_server);
document.querySelector('#button_frontend_js').addEventListener("click", stone_compute_with_frontend_js);

