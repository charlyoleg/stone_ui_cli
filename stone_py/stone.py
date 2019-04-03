"""
stone.py for functionalities around stones
a dummy logic that can be used from several ways
- Local API (aka Programming API)
- Network Restful API (aka micro-service)
- Command Line Interface
- Classic Laptop GUI
- Web UI
"""

import hug


#################
# The helper stuff
#################

class call_statistics:
    """Class to track the activity of the stone functionalities"""

    def __init__(self):
        self.brick_weight = 0
        self.wall_thermal_conductivity = 0

    def tick_off_brick_weight(self):
        self.brick_weight += 1

    def tick_off_wall_thermal_conductivity(self):
        self.wall_thermal_conductivity += 1

    def get_statistics(self):
        r =  "visit counts:\n"
        r += "brick_weight calls                : {}\n".format(self.brick_weight)
        r += "wall_thermal_conductivity calls   : {}\n".format(self.wall_thermal_conductivity)
        r += "total calls                       : {}\n".format(self.brick_weight + self.wall_thermal_conductivity)
        return(r)

# the global stats
call_stat = call_statistics()


#################
# The core logic
#################

@hug.cli()
@hug.get('/stone_weight', examples='width=0.4&height=0.2&thickness=0.2&density=2800')
@hug.local()
def brick_weight(
        density: hug.types.float_number,
        width: hug.types.float_number = 0.4,
        height: hug.types.float_number = 0.2,
        thickness: hug.types.float_number = 0.2):
    """Compute the weight of a brick based on the 3 size parameters and the density"""
    call_stat.tick_off_brick_weight()
    face_area = width * height
    volume = face_area * thickness
    weight = volume * density
    #return {'face_area': '{:.1f}'.format(face_area), 'volume': '{:.1f}'.format(volume) }
    return weight

@hug.cli()
@hug.get('/stone_thermal_conductivity', examples='thickness=0.2&conductivity=3.1')
@hug.local()
def wall_thermal_conductivity(
        conductivity    : hug.types.float_number,
        thickness       : hug.types.float_number = 0.2):
    """Compute the thermal-conductivity of a wall based on the wall thickness and the material thermal conductivity"""
    call_stat.tick_off_wall_thermal_conductivity()
    wall_conductivity = float(conductivity) / thickness
    return wall_conductivity


#################
# The sugar
#################

@hug.cli()
@hug.get('/visit_statistics')
@hug.local()
def call_activities():
    """Return a string that summarize the call statistics"""
    return {'visit_stat': '{:s}'.format(call_stat.get_statistics()) }


