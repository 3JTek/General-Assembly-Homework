from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .author import Author, AuthorSchema

class Book(db.Model, BaseModel):

    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')
    rating = db.Column(db.Integer, nullable=True)
    published_year = db.Column(db.Integer, nullable=False)

class BookSchema(ma.ModelSchema, BaseSchema):
    author = fields.Nested('AuthorSchema', exclude=('age','nationality'))

    class Meta:
        model = Book
