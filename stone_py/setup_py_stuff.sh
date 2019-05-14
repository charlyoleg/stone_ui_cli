#!/bin/bash
# setup_py_stuff.sh

# move to the script directory
cd $(dirname $0)

echo "Prepare the environment to run the stone_ui_cli backend."

pipenv install

echo "End of setup_py_stuff.sh"

