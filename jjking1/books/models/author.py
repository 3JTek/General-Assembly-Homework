from app import db, ma
from .base import BaseModel, BaseSchema

class Author(db.Model, BaseModel):

    __tablename__: 'authors'

    author_first_name: db.Column(db.String(40), nullable=False)
    author_last_name: db.Column(db.String(40), nullable=False)
    author_nationality: db.Column(db.String(40), nullable=False)
    author_age: db.Column(db.Integer, nullable=False)



    class AuthorSchema(ma.ModelSchema, BaseSchema):

        class Meta:
            model = Author
