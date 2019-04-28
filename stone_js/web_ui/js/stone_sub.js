// stone_sub.js

'use strict';


// ####################################
// Just an help class
// ####################################


class CallStatistics {
    constructor() {
        this.brick_height = 0;
        this.wall_thermal_conductivity = 0;
    }

    tick_off_brick_weight() {
        this.brick_height += 1;
    }

    tick_off_wall_thermal_conductivity() {
        this.wall_thermal_conductivity += 1;
    }

    get_statistics() {
        //let brick_height_str = this.brick_height.toString();
        //let wall_thermal_conductivity_str = this.wall_thermal_conductivity.toString();
        let total = this.brick_height + this.wall_thermal_conductivity;
        //let total_str = total.toString();
        let r = "visit counts:\n";
        r += `brick_weight calls                : ${this.brick_height}\n`;
        r += `wall_thermal_conductivity calls   : ${this.wall_thermal_conductivity}\n`;
        r += `total calls                       : ${total}\n`;
        return r;
    }
}

// ####################################
// export ES6-module
// ####################################

export { 
    CallStatistics
};

