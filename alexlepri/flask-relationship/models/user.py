from app import db, ma
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):
    # ======= CREATE A TABLE AND GIVE THE PROPERTY TO BE DISPLAYED ==========
    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)


class UserSchema(ma.ModelSchema, BaseSchema):
    #  ======= META TELL JSON TO LOOK AT THE TABLE ==========
    class Meta:
        model = User
