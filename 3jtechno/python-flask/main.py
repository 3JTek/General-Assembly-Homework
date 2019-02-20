#main.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # this speeds up SQLAlchemy

db = SQLAlchemy(app)
ma = Marshmallow(app)

from models.car import Car, CarSchema

@app.route('/cars', methods=['GET'])
def index_route():
    cars = Car.query.all()  # get all the cars from the database
    car_schema = CarSchema(many=True) # many=True will handle an array of cars
    
    return car_schema.jsonify(cars), 200

@app.route('/cars/<int:id>', methods=['GET'])
def show_route(id):
    car = Car.query.get(id)
    car_schema = CarSchema()

    return car_schema.jsonify(car), 200
