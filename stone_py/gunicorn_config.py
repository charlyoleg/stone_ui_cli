# gunicorn_config.py
# configuration file for gunicorn

certfile = 'server.crt'
keyfile = 'server.key'

bind = '0.0.0.0:8443'

