from app import db, ma
from .base import BaseModel

class Author(db.Model, BaseModel):

    __tablename__ = 'authors'

    name = db.Column(db.String(40), nullable=False)

class AuthorSchema(ma.ModelSchema):
    class Meta:
        model = Author
