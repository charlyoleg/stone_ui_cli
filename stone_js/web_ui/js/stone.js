// stone.js

'use strict';


// ####################################
// helper stuff
// ####################################
class CallStatistics {
    constructor(){
        this.brick_height = 0;
        this.wall_thermal_conductivity = 0;
    }

    tick_off_brick_weight(){
        this.brick_height += 1;
    }

    tick_off_wall_thermal_conductivity(){
        this.wall_thermal_conductivity += 1;
    }

    get_statistics(){
        //let brick_height_str = this.brick_height.toString();
        //let wall_thermal_conductivity_str = this.wall_thermal_conductivity.toString();
        let total = this.brick_height + this.wall_thermal_conductivity;
        //let total_str = total.toString();
        let r = "visit counts:\n";
        r += `brick_weight calls                : ${this.brick_height}\n`;
        r += `wall_thermal_conductivity calls   : ${this.wall_thermal_conductivity}\n`
        r += `total calls                       : ${total}\n`
        return(r);
    }
}


const call_stat = new CallStatistics();


// ####################################
// the stone core
// ####################################

function stone_weight(width, height, thickness, density){
    console.log('stone_core: stone_weight: width: '+ width);
    call_stat.tick_off_brick_weight();
    console.log("W: " + width.toFixed(2) + "  H: " + height.toFixed(2) +
        "  T: " + thickness.toFixed(2) + "  D: " + density.toFixed(2));
    let r_weight = width * height * thickness * density;
    return(r_weight);
}

function wall_thermal_conductivity(conductivity, thickness){
    console.log('stone_core: wall_thermal_conductivity: conductivity: '+ conductivity.toFixed(2));
    call_stat.tick_off_wall_thermal_conductivity();
    let r_wall_conductivity = conductivity / thickness;
    return(r_wall_conductivity);
}

// the sugar
function call_activities(){
    console.log('stone_core: call_activities');
    return({visit_stat: call_stat.get_statistics()});
}


// ####################################
// ES module export
// ####################################

export {
  stone_weight,
  wall_thermal_conductivity,
  call_activities
};

