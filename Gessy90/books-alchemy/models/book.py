from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .author import Author, AuthorSchema
from .genre import Genre, GenreSchema

books_genres = db.Table('books_genres',
    db.Column('books_id', db.Integer, db.ForeignKey('books.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genres.id'), primary_key=True)
)

class Book(db.Model, BaseModel):

    __tablename__ = 'books'

    title = db.Column(db.String(50), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')
    genres = db.relationship('Genre', secondary=books_genres, backref='books')



class BookSchema(ma.ModelSchema, BaseSchema):

    author = fields.Nested('AuthorSchema', exclude=('books', ))
    genres = fields.Nested('GenreSchema', exclude=('books', ), many=True)

    class Meta:
        model = Book
