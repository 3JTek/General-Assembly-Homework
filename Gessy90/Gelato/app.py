from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__) #file name main

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Gelato(db.Model):

    __tablename__='gelatos'

    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable= False)
    cone = db.Column(db.Boolean, default= True)
    flake = db.Column(db.Boolean, default= True)
    flavours = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable= False)


class GelatoSchema(ma.ModelSchema):

    class Meta:
        model = Gelato


@app.route('/')
def home():
    return jsonify({'message':'Welcome to my Website'}), 200


@app.route('/gelatos', methods=['GET'])
def gelatos_index():
    gelatos = Gelato.query.all()
    gelatos_schema = GelatoSchema(many=True)

    return gelatos_schema.jsonify(gelatos), 200


@app.route('/gelatos/<int:id>', methods=['GET'])
def gelatos_show(id):
    gelato = Gelato.query.get(id)
    gelato_schema = GelatoSchema()

    return gelato_schema.jsonify(gelato), 200
