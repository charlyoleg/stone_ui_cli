# gunicorn_config.py
# configuration file for gunicorn

certfile = 'gunicorn_server.crt'
keyfile = 'gunicorn_server.key'

bind = '0.0.0.0:8443'

