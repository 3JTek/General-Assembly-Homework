from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Pizza(db.Model):

    __tablename__ = 'pizzas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=True)
    toppings = db.Column(db.String(60), nullable=True)
    dough = db.Column(db.String(40), nullable=True)
    price = db.Column(db.Float, nullable=False)


class PizzaSchema(ma.ModelSchema):

    class Meta:
        model = Pizza


@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World!' }), 200


@app.route('/pizzas', methods=['GET'])
def pizzas_index():
    pizzas = Pizza.query.all()
    pizzas_schema = PizzaSchema(many=True)


    return pizzas_schema.jsonify(pizzas), 200
