from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__) #file name main

app.config['SQLALCHEMY_DATABASE_URI']= 'postgres://localhost:5432/flask-homework'

@app.route('/')
def home():
    return jsonify({'message':'Hello World!'}), 200
