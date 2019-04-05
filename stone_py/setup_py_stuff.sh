#!/bin/bash
# setup_py_stuff.sh

# move to the script directory
cd $(dirname $0)

echo "Prepare the environment to run the stone_ui_cli backend."

# deactive potential active virtual environment
if [ ${VIRTUAL_ENV} ]; then
  echo "stop current virtual env" && 
    deactivate
fi

# create venv 
if [ ! -d venv ]; then
  virtualenv -p /usr/bin/python3 venv &&
    source venv/bin/activate &&
    pip install hug gunicorn &&
    deactivate &&
    echo "venv is created!"
fi

# check venv
if [ -d venv ]; then
  source venv/bin/activate &&
    (pip freeze | grep "hug") || (echo "ERROR: venv does not contain hug"; exit 1) &&
    pip freeze &&
    deactivate &&
    echo "venv is ok!"
fi

echo "End of setup_py_stuff.sh"

