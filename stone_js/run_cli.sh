#!/bin/bash
# run_cli.sh

cd $(dirname $0)


./stone_cli.js stone_weight
./stone_cli.js stone_weight -w 0.5 --height=0.3 -t 0.1 --density 1500
./stone_cli.js wall_thermal_conductivity -c 3.1 --thickness=0.2
./stone_cli.js call_activities

