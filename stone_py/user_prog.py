#!/usr/bin/env python
"""user_prog.py to demonstrate the Programming API of stone.py"""

import stone

# dummy try
r = stone.brick_weight(1,2,3, 1)
print(r)

# mass of a limestone brick
r = stone.brick_weight(density=2800)
print("limestone brick mass: {:.1f} kg".format(r))

# thermal conductivity of a limestone brick
r = stone.wall_thermal_conductivity(conductivity=3.1, thickness=0.2)
print("thermal conductivity of a limestone wall: {:.1f} W/(m2.K)\n".format(r))

# display the call statistics
r = stone.call_activities()
#print(r)
print(r['visit_stat'])

