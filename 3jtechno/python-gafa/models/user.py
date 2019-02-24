from app import db, ma
from marshmallow import fields
from models.base import Base

class User(db.Model, Base):

    __tablename__ = 'users'

    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String, nullable=False)

class UserSchema(ma.ModelSchema):

    services = fields.Nested('ServiceSchema', many=True, exclude=('users',))

    class Meta:
        model = User
        exclude = ('id',)
