"""
stone_sub.py
Define a class that tracks the function calls of the stone's api
"""

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
