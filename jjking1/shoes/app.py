from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Shoe(db.Model):

    __tablename__ = 'shoes'

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=True)
    price = db.Column(db.Float, nullable=False)
    color = db.Column(db.String(20), nullable=False)


class ShoeSchema(ma.ModelSchema):

    class Meta:
        model = Shoe




@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World!' }), 200


@app.route('/shoes', methods=['GET'])
def shoes_index():
    shoes = Shoe.query.all()
    shoe_schema = ShoeSchema(many=True)

    return shoe_schema.jsonify(shoes), 200

@app.route('/shoes/<int:id>', methods=['GET'])
def shoes_show(id):
    shoe = Shoe.query.get(id)
    shoe_schema = ShoeSchema()

    return shoe_schema.jsonify(shoe), 200
