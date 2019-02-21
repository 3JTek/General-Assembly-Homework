from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#Creates a instance of the Flask class
app = Flask(__name__)

#Gives the database a path, similar to 27017 in mongodb
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#Creating instances of SQLAlchemy and Marshmallow classes for use within the application
db = SQLAlchemy(app)
ma = Marshmallow(app)

#Creating table for cake in database, extending the SQLAlchemy.Model Class
class Cake(db.Model):

    __tablename__ = 'cakes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    flavour = db.Column(db.String(40), nullable=False)
    slices = db.Column(db.Integer, nullable=True)
    type = db.Column(db.String(40), nullable=False)

#creating a schema Cake table of database, using the Marshmallow ModelSchema and the Cake class
class CakeSchema(ma.ModelSchema):

  class Meta:
    model = Cake


@app.route('/')
def home():
  return 'Hello Cakes!', 200

#index route for cakes
@app.route('/cakes', methods=['GET'])
def cakes_index():
    cakes = Cake.query.all() #returns all cakes from the Cake table
    cakes_schema = CakeSchema(many=True) #Converts Python object into format that can be turned into json

    return cakes_schema.jsonify(cakes), 200 #returns all cakes in a json format

#show route for cakes
@app.route('/cakes/<int:id>', methods=['GET'])
def cakes_show(id):
    cake = Cake.query.get(id)
    cake_schema = CakeSchema()

    return cake_schema.jsonify(cake), 200
