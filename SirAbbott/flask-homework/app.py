from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Dip(db.Model):

    __tablename__ = 'dip'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    color = db.Column(db.String(20), nullable=True)
    origin = db.Column(db.String(40), nullable=False)
    pairing = db.Column(db.String(40), nullable=False)


class DipSchema(ma.ModelSchema):

    class Meta:
        model = Dip

@app.route('/')
def home():
    return jsonify({'message' : 'hello world'}), 200

@app.route('/dips', methods=['GET'])
def dips_index():
    dips = Dip.query.all() # get all the donuts
    dip_schema =  DipSchema(many=True)

    return dip_schema.jsonify(dips), 200

@app.route('/dips/<int:id>', methods=['GET'])
def dip_show(id):
    dip = Dip.query.get(id) #Get donut by id
    dip_schema = DipSchema()

    return dip_schema.jsonify(dip), 200
