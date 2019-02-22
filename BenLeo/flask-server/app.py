from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Thunderbird(db.Model):

    __tablename__ = 'thunderbirds'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    pilot = db.Column(db.String(30), nullable=False)
    max_speed = db.Column(db.Integer, nullable=True)
    weapons = db.Column(db.String(100), nullable=True)
    is_cool = db.Column(db.Boolean)

class ThunderbirdSchema(ma.ModelSchema):
    class Meta:
        model = Thunderbird

@app.route('/')
def home():
    return jsonify({ 'message': 'Hello World!' }), 200


@app.route('/thunderbirds', methods=['GET'])
def thunderbirds_index():
    thunderbirds = Thunderbird.query.all()
    thunderbirds_schema = ThunderbirdSchema(many=True)

    return thunderbirds_schema.jsonify(thunderbirds), 200


@app.route('/thunderbirds/<int:id>', methods=['GET'])
def thunderbirds_show(id):
    thunderbird = Thunderbird.query.get(id)
    thunderbird_schema = ThunderbirdSchema()

    return thunderbird_schema.jsonify(thunderbird), 200
