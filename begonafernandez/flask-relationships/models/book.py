from app import db, ma
from .base import BaseModel

class Book(db.Model, BaseModel):
    __tablename__ = 'books'

    title = db.Column(db.String(40), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')

class BookSchema(ma.ModelSchema):
    class Meta:
        model = Book
