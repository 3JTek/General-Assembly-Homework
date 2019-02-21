from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .author import Author, AuthorSchema
from .store import Store, StoreSchema

books_stores = db.Table('books_stores',
    db.Column('book_id', db.Integer, db.ForeignKey('books.id'), primary_key=True),
    db.Column('store_id', db.Integer, db.ForeignKey('stores.id'), primary_key=True)
)


class Book(db.Model, BaseModel):

    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    rating = db.Column(db.Integer, nullable=True)
    published_year = db.Column(db.Integer, nullable=False)
    author = db.relationship('Author', backref='books')
    stores = db.relationship('Store', secondary=books_stores, backref='books')


class BookSchema(ma.ModelSchema, BaseSchema):
    author = fields.Nested('AuthorSchema', exclude=('age', 'nationality'))

    class Meta:
        model = Book
