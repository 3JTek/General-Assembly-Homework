from app import db, ma
from marshmallow import fields
from .base import BaseModel

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)

class UserSchema(ma.ModelSchema):

    mylists = fields.Nested('MylistSchema', many=True, exclude=('user', 'films'))

    class Meta:
        model = User
