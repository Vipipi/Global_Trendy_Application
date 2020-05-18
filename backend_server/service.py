""" Backend Service """
import logging
import json
import os
import sys

from bson.json_util import dumps #pylint: disable=import-error
from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer #pylint: disable=import-error

sys.path.append(os.path.join(os.path.dirname(__file__), 'utils'))
import mongodb_client #pylint: disable=wrong-import-position, import-error

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

LOGGER_FORMAT = '%(asctime)s - %(message)s'
logging.basicConfig(format=LOGGER_FORMAT)
LOGGER = logging.getLogger('backend_service')
LOGGER.setLevel(logging.DEBUG)

def add(num1, num2):
    """Test method"""
    LOGGER.debug("add is called with %d and %d", num1, num2)
    return num1 + num2

def get_one_news():
    """Get one news"""
    LOGGER.debug("get_one_news is called")
    res = mongodb_client.get_db()['news'].find_one()
    return json.loads(dumps(res))

def start(host=SERVER_HOST, port=SERVER_PORT):
    """Start RPC server"""
    server = SimpleJSONRPCServer((host, port))
    server.register_function(add, 'add')
    server.register_function(get_one_news, 'getOneNews')
    LOGGER.info("Starting RPC server on %s:%d", host, port)
    server.serve_forever()

if __name__ == "__main__":
    start()
