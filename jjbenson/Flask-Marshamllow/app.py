from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Astronaut(db.Model):

    __tablename__ = 'astronauts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    rank = db.Column(db.String(20), nullable=False)
    agency = db.Column(db.String(40), nullable=False)
    first_mission = db.Column(db.String(40), nullable=False)


class AstronautSchema(ma.ModelSchema):

    class Meta:
        model = Astronaut


@app.route('/')
def home():
    return 'hello world!', 200

@app.route('/astronauts')
def astronauts_index():
    astronauts = Astronaut.query.all()
    astronaut_schema = AstronautSchema(many=True)

    return astronaut_schema.jsonify(astronauts), 200


@app.route('/astronauts/<int:id>', methods=['GET'])
def astronaut_show(id):
    astronaut = Astronaut.query.get(id) #get a donut by id
    astronaut_schema = AstronautSchema()

    return astronaut_schema.jsonify(astronaut),200
