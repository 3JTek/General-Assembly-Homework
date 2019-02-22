from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Creator(db.Model, BaseModel):

    __tablename__ = 'creators'

    creatorname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(80), nullable=False)

class CreatorSchema(ma.ModelSchema, BaseSchema):

    created_gifs = fields.Nested('GifSchema', many=True, exclude=('created_by', ))

    class Meta:
        model = Creator
        exclude = ('email', )
