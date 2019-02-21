from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-relationships'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)



@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World!' }), 200

# pylint: disable=W0611,C0413
from config import routes
