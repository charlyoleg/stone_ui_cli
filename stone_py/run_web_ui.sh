#!/bin/bash
# run_web_ui.sh

cd $(dirname $0)

# start the REST API server in background
echo "Start the micro-service server ..."
#gnome-terminal --working-directory=$(pwd) -- bash -c 'source venv/bin/activate && hug -f stone.py'
#hug -f stone.py > /tmp/hug_stone.log 2>&1 &
### hug-webserver supports only http. Gunicorn supports https, needed to overcome firefox cross-origin-request policy
## create the key and certificate for ssl
#openssl genrsa 2048 > server.key
#chmod a-w server.key
#chmod go-r server.key
#openssl req -new -x509 -nodes -sha256 -days 365 -key server.key -out server.crt
## check the config file
#source venv/bin/activate && gunicorn --check-config --config=gunicorn_config.py stone:__hug_wsgi__ && deactivate
## launch the https restful micro-service
gnome-terminal --working-directory=$(pwd) -- \
  bash -c 'source venv/bin/activate &&
    gunicorn --certfile=gunicorn_server.crt --keyfile=gunicorn_server.key --bind=0.0.0.0:8443 stone:__hug_wsgi__'

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
#ps aux | grep gunicorn
#killall gunicorn
#sleep 1
ps aux | grep gunicorn



