from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Musical(db.Model):

    __tablename__ = 'musicals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    origin = db.Column(db.String(40), nullable=False)
    produced_by = db.Column(db.String(80), nullable=False)
    music_and_lyrics = db.Column(db.String(80), nullable=False)
    currently_playing = db.Column(db.Boolean)

class MusicalSchema(ma.ModelSchema):

    class Meta:
        model = Musical

@app.route('/')
def home():
    print('Running 🏃🏽‍💨')
    return jsonify({ 'message': 'Running 🏃🏽💨' }), 200

@app.route('/musicals', methods=['GET'])
def musicals_index():
    musicals = Musical.query.all()
    musicals_schema = MusicalSchema(many=True)

    return musicals_schema.jsonify(musicals), 200
