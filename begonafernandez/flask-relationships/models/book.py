from app import db, ma
from marshmallow import fields
from .base import BaseModel
from .series import Series

series_books = db.Table('series_books',
    db.Column('series_id', db.Integer, db.ForeignKey('series.id'), primary_key=True),
    db.Column('book_id', db.Integer, db.ForeignKey('books.id'), primary_key=True)
)

class Book(db.Model, BaseModel):
    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')
    series = db.relationship('Series', secondary=series_books, backref='books')

class BookSchema(ma.ModelSchema):
    author = fields.Nested('AuthorSchema')
    series = fields.Nested('SeriesSchema', many=True)

    class Meta:
        model = Book
