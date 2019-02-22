from app import db, ma
from marshmallow import fields

class Business(db.Model):

    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    type = db.Column(db.String(20), nullable=False)

class BusinessSchema(ma.ModelSchema):
    

    class Meta:
        model = Business
