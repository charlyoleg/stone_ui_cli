// stone_rest_app.js

'use strict';

require = require("esm")(module/*, options*/);
const stone = require("./web_ui/js/stone.js");

const express = require('express');
const https = require('https');
const fs = require('fs');

const ssl_options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
};

const stone_rest_app = express();
const stone_http_port = 8442;
const stone_https_port = 8443;


// ####################################
// Browser security policy: Access-Control-Allow-Origin
// ####################################

stone_rest_app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


// ####################################
// end points
// ####################################

stone_rest_app.get('/stone_weight', (req, res) => {
    console.log('stone_rest_app: stone_weight: req.query.width: '+ req.query.width);
    let q_width = parseFloat(req.query.width);
    let q_height = parseFloat(req.query.height);
    let q_thickness = parseFloat(req.query.thickness);
    let q_density = parseFloat(req.query.density);
    console.log("W: " + q_width.toFixed(2) + "  H: " + q_height.toFixed(2) +
        "  T: " + q_thickness.toFixed(2) + "  D: " + q_density.toFixed(2));
    //let r_weight = q_width * q_height * q_thickness * q_density;
    let r_weight = stone.stone_weight(q_width, q_height, q_thickness, q_density);
    res.send(r_weight.toString());
});

stone_rest_app.get('/wall_thermal_conductivity', (req, res) => {
    console.log('stone_rest_app: wall_thermal_conductivity: req.query.conductivity: '+ req.query.conductivity);
    let q_conductivity = parseFloat(req.query.conductivity);
    let q_thickness = parseFloat(req.query.thickness);
    //let r_wall_conductivity = q_conductivity / q_thickness;
    let r_wall_conductivity = stone.wall_thermal_conductivity(q_conductivity, q_thickness);
    res.send(r_wall_conductivity.toString());
});

// the sugar
stone_rest_app.get('/call_activities', (req, res) => {
    console.log('stone_rest_app: call_activities');
    res.json(stone.call_activities());
});

// ####################################
// main whole loop
// ####################################
//stone_rest_app.listen(stone_http_port, () => {
//    console.log('stone_rest_app: listening at http port '+ stone_http_port);
//});

https.createServer(ssl_options, stone_rest_app).listen(stone_https_port, () => {
    console.log('stone_rest_app: listening at https port '+ stone_https_port);
});



