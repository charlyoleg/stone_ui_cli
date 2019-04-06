// web_ui.js

function stoneCompute(){
  // read the input parameter
  var b_w  = document.getElementById('input_brick_width').value
  var b_h  = document.getElementById('input_brick_height').value
  var b_t  = document.getElementById('input_brick_thickness').value
  var m_d  = document.getElementById('input_material_density').value
  var m_tc = document.getElementById('input_material_thermal_conductivity').value
  
  // write the output fields
  //document.getElementById("brick_mass").innerHTML = b_w
  //document.getElementById("wall_thermal_conductivity").innerHTML = b_h
  //document.getElementById("compute_stat").innerHTML = "7000"
  
  //// Using the restful micro-service

  // Request for Brick_Mass
  var xhttp_mass = new XMLHttpRequest();
  xhttp_mass.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Action to be performed when the document is ready:
      var computed_mass = parseFloat(xhttp_mass.responseText);
      console.log(computed_mass);
      document.getElementById("brick_mass").innerHTML = computed_mass.toFixed(2);
    }
  };
  xhttp_mass.open("GET",
    "https://localhost:8443/stone_weight?width="+b_w+"&height="+b_h+"&thickness="+b_t+"&density="+m_d,
    true);
  xhttp_mass.send();

  // Request for Wall_Thermal_Conductivity
  var xhttp_thermal_conductivity = new XMLHttpRequest();
  xhttp_thermal_conductivity.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Action to be performed when the document is ready:
      var computed_thermal_conductivity = parseFloat(xhttp_thermal_conductivity.responseText);
      console.log(computed_thermal_conductivity);
      document.getElementById("wall_thermal_conductivity").innerHTML = computed_thermal_conductivity.toFixed(2);
    }
  };
  xhttp_thermal_conductivity.open("GET",
    "https://localhost:8443/wall_thermal_conductivity?thickness="+b_t+"&conductivity="+m_tc,
    true);
  xhttp_thermal_conductivity.send();

  // Request for Computation-statistics
  var xhttp_compute_stat = new XMLHttpRequest();
  xhttp_compute_stat.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Action to be performed when the document is ready:
      var compute_stat = JSON.parse(xhttp_compute_stat.responseText);
      console.log(compute_stat.visit_stat);
      document.getElementById("compute_stat").innerHTML = compute_stat.visit_stat.replace(/\n/g, "<br>");
    }
  };
  xhttp_compute_stat.open("GET", "https://localhost:8443/call_activities", true);
  xhttp_compute_stat.send();
}

