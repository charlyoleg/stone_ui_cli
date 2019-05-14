==============
Stone UI & CLI
==============

Goal
====

How to provide some functionalities with one code base and supporting the following interfaces for the users?

- Programming API
- Network API
- Command Line Inteface
- Graphical User Interface
- Web Interface

Two languages are tested:

- Python
- Javascript

Dummy functionalities around stone to demonstrate the ui_cli stuff.

Stone_py
========

Implementation
--------------

*Stone_py* uses the library hug_. *hug* answers completely the problematic and makes all the hard job. Finally, *stone.py* just illustrates how to use *hug*.

.. _hug: http://www.hug.rest


Requirements
------------

- python3 (v3.6.7)
- pip3 (v9.0.1)
- pipenv (v2018.11.26)
- virtualenv (v15.1.0)
- tkinter

::

  sudo apt install python3 pip3 python3-tk virtualenv
  sudo pip install pipenv


Getting started
---------------

In a terminal, run::

  # preparation
  git clone https://github.com/charlyoleg/stone_ui_cli.git
  cd stone_ui_cli/stone_py
  ./setup_py_stuff.sh
  # try the 5 interfaces
  ./run_local_user_program.sh
  ./run_cli.sh
  ./run_network_api_micro_service.sh
  ./run_gui.sh
  ./run_web_ui.sh



Stone_js
========

Requirements
------------

- nodejs
- npm/npx


Conclusion
==========

Python
------

Pros:

- small boilerplate

Cons:

- For the Web-UI variant, the core logic run on the server. No CDN! Not scalable!
- No user namespace in Pypi registry. Possible clashes with package names!


Javascript
----------

Pros:

- core logic run in browser for the Web-UI variant. Ready for CDN
- thanks to npx, no need to install / download explicitely stone_js
- nodejs is fast for http-requests and file-access (90% of the job of a web-server)

Cons:

- don't know yet

