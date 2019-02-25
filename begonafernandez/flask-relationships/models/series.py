from app import db, ma
from .base import BaseModel

class Series(db.Model, BaseModel):

    __tablename__ = 'series'

    title = db.Column(db.String(40), nullable=True)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship("Author", backref='series')

class SeriesSchema(ma.ModelSchema):

    class Meta:
        model = Series
