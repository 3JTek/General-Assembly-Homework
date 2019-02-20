from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Cake(db.Model):

    __tablename__ = 'cakes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    flavour = db.Column(db.String(40), nullable=False)
    slices = db.Column(db.Integer, nullable=True)
    type = db.Column(db.String(40), nullable=False)


class CakeSchema(ma.ModelSchema):

    class Meta:
        model = Cake



@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World!' }), 200


@app.route('/cakes', methods=['GET'])
def cakes_index():
    cakes = Cake.query.all()
    cakes_schema = CakeSchema(many=True)

    return cakes_schema.jsonify(cakes), 200

@app.route('/cakes/<int:id>', methods=['GET'])
def cakes_show(id):
    cake = Cake.query.get(id)
    cake_schema = CakeSchema()

    return cake_schema.jsonify(cake), 200
