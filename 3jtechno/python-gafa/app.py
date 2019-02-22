from flask import Flask

app = Flask(__name__)

#pylint: disable=C0413, W0611
from config import routes
