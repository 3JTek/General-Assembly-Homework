from app import db, ma
from marshmallow import fields
from models.base import Base

class Corporation(db.Model, Base):

    #give the table name, if null tablename = model_name
    __tablename__ = 'corporations'

    name = db.Column(db.String(30), nullable=False)
    revenue = db.Column(db.Integer, nullable=False)
    headquarters = db.Column(db.String(30), nullable=False)

class CorporationSchema(ma.ModelSchema):

    #1 to many relationship with corporation
    services = fields.Nested('ServiceSchema', many=True, exclude=('corporation', 'id'))
    users = fields.Nested('UserSchema', many=True)

    class Meta:
        model = Corporation
        #exclude corporation_id from the response
        exclude = ('id',)
