from app import db, ma
from marshmallow import fields
from .base import BaseModel

class Book(db.Model, BaseModel):
    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')

class BookSchema(ma.ModelSchema):
    author = fields.Nested('AuthorSchema')

    class Meta:
        model = Book
