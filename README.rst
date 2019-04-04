========
UI & CLI
========

Goal
====

How provide some functionalities with one code base and supporting the following interfaces for the users?

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

Requirements
------------

- python3
- pip3
- virturalenv


Stone_js
========

Requirements
------------

- nodejs
- npm
- npx


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

Cons:

- don't know yet

