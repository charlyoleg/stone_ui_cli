#!/bin/bash
# run_lgui.sh

cd $(dirname $0)
source venv/bin/activate

./stone_gui.py

deactivate

