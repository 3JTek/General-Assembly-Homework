from app import db, ma
from marshmallow import fields
from models.base import Base

class Service(db.Model, Base):

    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    type = db.Column(db.String(30), nullable=False)
    corporation_id = db.Column(db.Integer, db.ForeignKey('corporations.id'))

    corporation = db.relationship('Corporation', backref='services')

class ServiceSchema(ma.ModelSchema):

    corporation = fields.Nested('CorporationSchema')

    class Meta:
        model = Service
        exclude = ('id',)
