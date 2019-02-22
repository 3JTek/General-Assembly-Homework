from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Sandwich(db.Model):

    __tablename__ = 'sandwiches'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    fillings = db.Column(db.String(40), nullable=True)
    price = db.Column(db.Float, nullable=False)
    vegetarian = db.Column(db.Boolean, nullable=False)

class SandwichSchema(ma.ModelSchema):

    class Meta:
        model = Sandwich


@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World?' }), 200

@app.route('/sandwiches', methods=['GET'])
def sandwiches_index():
    sandwiches = Sandwich.query.all()
    sandwiches_schema = SandwichSchema(many=True)

    return sandwiches_schema.jsonify(sandwiches), 200


@app.route('/sandwiches/<int:id>', methods=['GET'])
def sandwiches_show(id):
    sandwich = Sandwich.query.get(id)
    sandwich_schema = SandwichSchema()

    return sandwich_schema.jsonify(sandwich), 200
