#!/bin/bash
# run_network_api.sh

cd $(dirname $0)

# start the REST API server in background
echo "Start the micro-service server ..."
gnome-terminal --working-directory=$(pwd) -- bash -c 'source venv/bin/activate && hug -f stone.py' 
#hug -f stone.py > /tmp/hug_stone.log 2>&1 &
# give time to the server to start its service
sleep 2



# one request from the browser
MY_URL="http://localhost:8000/stone_weight?width=0.4&height=0.2&thickness=0.2&density=2800"
#sensible-browser "${MY_URL}"
echo -e "1st curl requests:\ncurl -X GET '${MY_URL}'"
curl -X GET "${MY_URL}"
echo -e "\n"

MY_URL="http://localhost:8000/stone_weight?width=0.4&height=0.2&thickness=0.4&density=2800"
echo -e "2nd curl requests:\ncurl -X GET '${MY_URL}'"
curl -X GET "${MY_URL}"
echo -e "\n"

MY_URL="http://localhost:8000/stone_thermal_conductivity?thickness=0.4&conductivity=3.1"
echo -e "3rd curl requests:\ncurl -X GET '${MY_URL}'"
curl -X GET "${MY_URL}"
echo -e "\n"

MY_URL="http://localhost:8000/stone_thermal_conductivity?thickness=0.2&conductivity=3.1"
echo -e "4th curl requests:\ncurl -X GET '${MY_URL}'"
curl -X GET "${MY_URL}"
echo -e "\n"

MY_URL="http://localhost:8000/visit_statistics"
echo -e "5th curl requests:\ncurl -X GET '${MY_URL}'"
curl -X GET "${MY_URL}"
echo -e "\n"



# stop the server
echo "Stop the micro-service server ..."
#ps aux | grep stone.py | grep python | awk '{ print $2; }' | xargs -n 1 kill
echo "Check remaining process ..."
ps aux | grep python

