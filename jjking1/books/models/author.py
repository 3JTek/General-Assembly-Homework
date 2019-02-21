from app import db, ma
from .base import BaseModel, BaseSchema

class Author(db.Model, BaseModel):

    __tablename__ = 'authors'

    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    nationality = db.Column(db.String(40), nullable=False)
    age = db.Column(db.Integer, nullable=False)



class AuthorSchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Author
