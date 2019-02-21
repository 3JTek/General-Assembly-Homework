from app import db, ma
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)

class UserSchema(ma.ModelSchema, BaseSchema):
    

    class Meta:
        model = User
