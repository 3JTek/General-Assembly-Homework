from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Genre(db.Model, BaseModel):

    __tablename__ = 'genres'

    name = db.Column(db.String(20), nullable=False)

class GenreSchema(ma.ModelSchema, BaseSchema):

    books = fields.Nested('BookSchema', many=True, exclude=('author', 'genres'))

    class Meta:
        model = Genre
