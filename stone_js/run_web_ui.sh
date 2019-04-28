#!/bin/bash
# run_web_ui.sh

cd $(dirname $0)

# start the REST API server in background
echo "Start the micro-service server ..."
## create the key and certificate for ssl
#openssl genrsa -out rest_server.key 2018
#chmod a-w rest_server.key
#chmod go-r rest_server.key
#openssl req -new -x509 -nodes -sha256 -days 365 -key rest_server.key -out rest_server.crt
## launch the https restful micro-service
gnome-terminal --working-directory=$(pwd) -- bash -c 'node stone_rest_app.js'

# give time to the server to start its service
sleep 2

# Testing the restful-API
curl -X GET -k "https://localhost:8443/stone_weight?width=0.4&height=0.2&thickness=0.2&density=2800"
echo -e "\n"

# To help the user to set this web-site as exception for the browser to allow self-certified micro-service for the cross-origin-request
sensible-browser "https://localhost:8443/stone_weight?width=0.4&height=0.2&thickness=0.2&density=2800"

# Start Web-UI in browser
sensible-browser "web_ui/index.html"

# stop the micro-service
# Type ctrl-c in the server terminal
#ps aux | grep node
#killall node
#sleep 1
ps aux | grep node



