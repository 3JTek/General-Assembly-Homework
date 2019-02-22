from flask import Flask
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
    name = db.Column(db.String(30), nullable=False)
    toppings = db.Column(db.String(30), nullable=False)
    vegetarian = db.Column(db.Boolean, nullable=False)
    price = db.Column(db.Float, nullable=False)

class PizzaSchema(ma.ModelSchema):

    class Meta:
        model = Pizza


@app.route('/')
def home():
  return 'Hello World!', 200

@app.route('/pizzas', methods=['GET'])
def pizzas_index():
    pizzas = Pizza.query.all()
    pizzas_schema = PizzaSchema(many=True)

    return pizzas_schema.jsonify(pizzas), 200

@app.route('/pizzas/<int:id>', methods=['GET'])
def pizzas_show(id):
    pizza = Pizza.query.get(id)
    pizza_schema = PizzaSchema()

    return pizza_schema.jsonify(pizza), 200
