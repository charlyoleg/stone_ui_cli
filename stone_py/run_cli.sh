#!/bin/bash
# run_cli.sh

cd $(dirname $0)

#pipenv run hug -f stone.py -c brick_weight
pipenv run hug -f stone.py -c brick_weight -w 0.4 --height=0.2 -t 0.2 --density 2800

pipenv run hug -f stone.py -c wall_thermal_conductivity 3.1 --thickness=0.2

pipenv run hug -f stone.py -c call_activities


