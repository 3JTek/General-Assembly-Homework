from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)  # USE TO FORMAT 'jsonify'



# =========== CALL CLASS + ASSIGN TABLE NAME + CREATE A SCHEMA ============
class Pizza(db.Model):

    __tablename__ = 'pizzas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=True)
    toppings = db.Column(db.String(60), nullable=True)
    dough = db.Column(db.String(40), nullable=True)
    price = db.Column(db.Float, nullable=False)


# =========== MARSHMALLOW TO CONVERT SCHEMA TO 'jsonify' =============
class PizzaSchema(ma.ModelSchema):

    class Meta:
        model = Pizza

 # =========== CREATE ROUTE FOR HOME PAGE ============
@app.route('/')
def home():
    return jsonify({ 'message': 'Pizza World!' }), 200



# ============ CREATE ROUTE FOR INDEX PAGE =============
@app.route('/pizzas', methods=['GET'])
def pizzas_index():
    pizzas = Pizza.query.all()
    pizzas_schema = PizzaSchema(many=True)


    return pizzas_schema.jsonify(pizzas), 200


# ============= CREATE ROUTE PIZZA SHOW PAGE ============
@app.route('/pizzas/<int:id>', methods=['GET'])
def pizzas_show(id):
    pizza = Pizza.query.get(id)
    pizza_schema = PizzaSchema()

    return pizza_schema.jsonify(pizza), 200
