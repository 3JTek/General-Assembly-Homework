from app import db, ma
from marshmallow import fields
from models.base import Base
# pylint: disable=W0611
from models.user import User

services_users = db.Table(
    'services_users',
    db.Column('users_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('services_id', db.Integer, db.ForeignKey('services.id'))
)

class Service(db.Model, Base):

    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    type = db.Column(db.String(30), nullable=False)
    corporation_id = db.Column(db.Integer, db.ForeignKey('corporations.id'), nullable=False)

    users = db.relationship('User', secondary=services_users, backref='services')
    corporation = db.relationship('Corporation', backref='services')

class ServiceSchema(ma.ModelSchema):

    corporation = fields.Nested('CorporationSchema', exclude=('services',))
    users = fields.Nested('UserSchema', many=True, exclude=('email',))

    class Meta:
        model = Service
        exclude = ('id',)
