from app import db, ma
from marshmallow import fields
from .store import Store, StoreSchema
from .author import Author, AuthorSchema
from .base import BaseModel, BaseSchema

stores_books = db.Table('stores_books',
    db.Column('store_id', db.Integer, db.ForeignKey('stores.id'), primary_key=True),
    db.Column('book_id', db.Integer, db.ForeignKey('books.id'), primary_key=True)
)


class Book(db.Model, BaseModel):

    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    year_published = db.Column(db.Integer, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')
    stores = db.relationship('Store', secondary=stores_books, backref='books')





class BookSchema(ma.ModelSchema, BaseSchema):
    author = fields.Nested('AuthorSchema', exclude=('age', 'nationality'))
    class Meta:
        model = Book
