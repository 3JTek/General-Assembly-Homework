from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(70), nullable=False)


class UserSchema(ma.ModelSchema, BaseSchema):

    articles = fields.Nested('ArticleSchema', many=True, exclude=('user', ))
    reading_lists = fields.Nested('Reading_ListSchema', many=True, exclude=('user', ))

    class Meta:
        model = User
