#!/usr/bin/env python
"""stone_gui.py to provide a Graphical User Interface to stone.py"""

import stone
import tkinter

# computation on demand
def stone_compute():
    b_w  = float(entry_brick_width.get())
    b_h  = float(entry_brick_height.get())
    b_d  = float(entry_brick_depth.get())
    m_d  = float(entry_density.get())
    m_tc = float(entry_thermal_conductivity.get())
    mass = stone.brick_weight(width=b_w, height=b_h, thickness=b_d, density=m_d)
    thermal_conductivity = stone.wall_thermal_conductivity(conductivity=m_tc, thickness=b_d)
    print("Stone mass (in kg): {:.1f}".format(mass))
    print("Wall thermal conductivity (in W/(K.m-2)): {:.1f}".format(thermal_conductivity))
    label_weight2.config(text=mass)
    label_conductivity2.config(text=thermal_conductivity)
    compute_stat = stone.call_activities()
    label_statistics2.config(text=compute_stat['visit_stat'])

### gui layout
gui_app = tkinter.Tk()
gui_app.title("Stone GUI")

# title in payload
label_title = tkinter.Label(gui_app, text="Computations around the stones", font=("Arial Bold", 16))
label_title.grid(column=0, row=0, columnspan=2)
# brick_width
label_brick_width = tkinter.Label(gui_app, text="Brick Width (in m):")
label_brick_width.grid(column=0, row=1, sticky=tkinter.E)
entry_brick_width = tkinter.Entry(gui_app, width=20)
entry_brick_width.grid(column=1, row=1)
entry_brick_width.insert(0, "0.4")
# brick_height
label_brick_height = tkinter.Label(gui_app, text="Brick Height (in m):")
label_brick_height.grid(column=0, row=2, sticky=tkinter.E)
entry_brick_height = tkinter.Entry(gui_app, width=20)
entry_brick_height.grid(column=1, row=2)
entry_brick_height.insert(0, "0.2")
# brick_depth
label_brick_depth = tkinter.Label(gui_app, text="Brick Depth (in m):")
label_brick_depth.grid(column=0, row=3, sticky=tkinter.E)
entry_brick_depth = tkinter.Entry(gui_app, width=20)
entry_brick_depth.grid(column=1, row=3)
entry_brick_depth.insert(0, "0.2")
# density
label_density = tkinter.Label(gui_app, text="Material Density (in kg.m-3):")
label_density.grid(column=0, row=4, sticky=tkinter.E)
entry_density = tkinter.Entry(gui_app, width=20)
entry_density.grid(column=1, row=4)
entry_density.insert(0, "2800")
# thermal conductivity
label_thermal_conductivity = tkinter.Label(gui_app, text="Material Thermal Conductivity (in W/(K.m)):")
label_thermal_conductivity.grid(column=0, row=5, sticky=tkinter.E)
entry_thermal_conductivity = tkinter.Entry(gui_app, width=20)
entry_thermal_conductivity.grid(column=1, row=5)
entry_thermal_conductivity.insert(0, "3.1")
# computation
button_computation = tkinter.Button(gui_app, text="Compute", command=stone_compute)
button_computation.grid(column=0, row=6)
# results
label_results = tkinter.Label(gui_app, text="Stone results:")
label_results.grid(column=0, row=7, sticky=tkinter.W)
#
label_weight = tkinter.Label(gui_app, text="Stone weight (in kg):")
label_weight.grid(column=0, row=8, sticky=tkinter.E)
label_weight2 = tkinter.Label(gui_app, text="")
label_weight2.grid(column=1, row=8)
#
label_conductivity = tkinter.Label(gui_app, text="Wall thermal conductivity (in W/(K.m-2)):")
label_conductivity.grid(column=0, row=9, sticky=tkinter.E)
label_conductivity2 = tkinter.Label(gui_app, text="")
label_conductivity2.grid(column=1, row=9)
# computation statistics
label_statistics = tkinter.Label(gui_app, text="Statictics on computation:")
label_statistics.grid(column=0, row=10, sticky=tkinter.W)
label_statistics2 = tkinter.Label(gui_app, text="", justify="left", font=("Monospace", 10))
label_statistics2.grid(column=0, row=11, columnspan=2, sticky=tkinter.W)

# resizable
gui_app.columnconfigure(0, weight=1)
gui_app.rowconfigure(0, weight=1)
# main loop
gui_app.mainloop()

