from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


books_stores = db.Table('books_stores',
    db.Column('book_id', db.Integer, db.ForeignKey('books.id'), primary_key=True),
    db.Column('store_id', db.Integer, db.ForeignKey('stores.id'), primary_key=True)
)



class Store(db.Model, BaseModel):

    __tablename__ = 'stores'

    name = db.Column(db.String(40), nullable=False)
    location = db.Column(db.String(40), db.ForeignKey('authors.id'))
    hours_of_operation = db.Column(db.String(40), nullable=True)

class StoreSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Store
