from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db= SQLAlchemy(app)
ma = Marshmallow(app) #create instance of marshmallow

class Phone(db.Model):

    __tablename__ = 'phones'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    has_external_memory = db.Column(db.Boolean, default=True)
    price = db.Column(db.Float, nullable=False)

class PhoneSchema(ma.ModelSchema):

    class Meta:
        model = Phone

@app.route('/')
def home():
    return jsonify({'message': 'Hello World!'}), 200
    

@app.route('/phones', methods=['GET'])
def phones_index():
    phones = Phone.query.all()
    phones_schema = PhoneSchema(many=True)

    return phones_schema.jsonify(phones), 200


@app.route('/phones/<int:id>', methods=['GET'])
def phones_show(id):
    phone = Phone.query.get(id)
    phone_schema = PhoneSchema()

    return phone_schema.jsonify(phone), 200
