#!/bin/bash
# run_local_user_program.sh

cd $(dirname $0)
source venv/bin/activate

./user_prog.py

deactivate

