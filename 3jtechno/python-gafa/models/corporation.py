from app import db, ma
from marshmallow import fields
from models.base import Base

class Corporation(db.Model, Base):

    __tablename__ = 'corporations'

    name = db.Column(db.String(30), nullable=False)
    revenue = db.Column(db.Integer, nullable=False)
    headquarters = db.Column(db.String(30), nullable=False)

class CorporationSchema(ma.ModelSchema):

    services = fields.Nested('ServiceSchema', many=True, exclude=('corporation', 'id'))
    users = fields.Nested('UserSchema', many=True)

    class Meta:
        model = Corporation
        exclude = ('id',)
