#!/bin/bash
# run_cli.sh

cd $(dirname $0)
source venv/bin/activate

#hug -f stone.py -c brick_weight
hug -f stone.py -c brick_weight -w 0.4 --height=0.2 -t 0.2 --density 2800

hug -f stone.py -c wall_thermal_conductivity 3.1 --thickness=0.2

hug -f stone.py -c call_activities

deactivate

