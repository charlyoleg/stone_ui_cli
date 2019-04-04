#!/bin/bash
# run_web_ui.sh

cd $(dirname $0)

# start the REST API server in background
echo "Start the micro-service server ..."
gnome-terminal --working-directory=$(pwd) -- bash -c 'source venv/bin/activate && hug -f stone.py' 
#hug -f stone.py > /tmp/hug_stone.log 2>&1 &
# give time to the server to start its service
sleep 2



# Start Web-UI in browser
sensible-browser "web_ui"




