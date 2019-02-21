from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Store(db.Model, BaseModel):

    __tablename__ = 'stores'

    name = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    hours_of_operation = db.Column(db.String(50), nullable=False)


class StoreSchema(ma.ModelSchema, BaseSchema):

    books = fields.Nested('BookSchema', exclude=('stores', 'created_at', 'id', 'author', ), many=True)

    class Meta:
        model = Store
