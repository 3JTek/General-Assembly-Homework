from app import db, ma
from .author import Author, AuthorSchema
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Book(db.Model, BaseModel):

    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    year_published = db.Column(db.Integer, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')





class BookSchema(ma.ModelSchema, BaseSchema):
    author = fields.Nested('AuthorSchema', exclude=('age', 'nationality'))
    class Meta:
        model = Book
