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
      // Typical action to be performed when the document is ready:
      document.getElementById("brick_mass").innerHTML = xhttp_mass.responseText;
    }
  };
  xhttp_mass.open("GET",
    "http://localhost:8000/stone_weight?width="+b_w+"&height="+b_h+"&thickness="+b_t+"&density="+m_d,
    true);
  xhttp_mass.send();

}

