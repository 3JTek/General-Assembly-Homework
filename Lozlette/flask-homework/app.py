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
    name = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    icing = db.Column(db.String(40), nullable=True)
    filling = db.Column(db.String(40), nullable=True)
    extra_ingredients = db.Column(db.String(60), nullable=True)

class CakeSchema(ma.ModelSchema):

        class Meta:
            model = Cake

@app.route('/')
def home():
    return jsonify({'message': 'Hello World!'}), 200

@app.route('/cakes', methods=['GET'])
def cakes_index():
    cakes = Cake.query.all()
    cakes_schema = CakeSchema(many=True)

    return cakes_schema.jsonify(cakes), 200

@app.route('/cakes/<int:id>', methods=['GET'])
def cakes_show(id):
    cake = Cake.query.get(id) # get a donut by id
    cake_schema = CakeSchema()

    return cake_schema.jsonify(cake), 200
