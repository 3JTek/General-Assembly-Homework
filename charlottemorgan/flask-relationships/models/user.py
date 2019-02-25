from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(80), nullable=False)

class UserSchema(ma.ModelSchema, BaseSchema):

    faves = fields.Nested('GifSchema', many=True, exclude=('user_faves', ))

    class Meta:
        model = User
        exclude = ('email', )
