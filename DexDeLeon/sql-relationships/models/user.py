from app import db, ma
from .base import BaseModel, BaseSchema
from marshmallow import fields

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(50), nullable=False)


class UserSchema(ma.ModelSchema, BaseSchema):

    cocktails = fields.Nested('CocktailSchema', many=True, exclude=('user', ))

    class Meta:
        model = User
