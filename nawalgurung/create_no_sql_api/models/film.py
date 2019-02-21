from app import db, ma
from .base import BaseModel

class Film(db.Model, BaseModel):

    __tablename__ = 'films'

    title = db.Column(db.String(40), nullable=False)
    filename = db.Column(db.String(80), nullable=False)


class FilmSchema(ma.ModelSchema, BaseModel):

    class Meta:
        model = Film
