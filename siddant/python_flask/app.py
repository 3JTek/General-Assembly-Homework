from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__) #file name main

app.config['SQLALCHEMY_DATABASE_URI']= 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Team(db.Model):

    __tablename__='teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable= False)
    location = db.Column(db.String(40), nullable=True) #not needed
    established = db.Column(db.String(40), nullable=True)
    league = db.Column(db.Integer, default= False)

@app.route('/')
def home():
    return jsonify({'message':'Hello World!'}), 200
