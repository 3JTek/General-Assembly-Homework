from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Author(db.Model, BaseModel):

    __tablename__ = 'authors'

    name = db.Column(db.String(20), nullable=False)

class AuthorSchema(ma.ModelSchema, BaseSchema):

    books = fields.Nested('BookSchema', many=True)
    genre = fields.Nested('GenreSchema', many=True)

    class Meta:
        model = Author
