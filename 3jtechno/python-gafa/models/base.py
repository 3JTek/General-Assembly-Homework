from app import db, ma
from marshmallow import fields

class Base:

    id = db.Column(db.Integer, primary_key=True)
