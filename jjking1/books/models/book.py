from app import db, ma
from .author import Author, AuthorSchema
from marshmallow import fields
from .base import BaseModel, BaseSchema

# readlists_stories = db.Table('readlists_stories',
#     db.Column('readlist_id', db.Integer, db.ForeignKey('readlist.id'), primary_key=True),
#     db.Column('story_id', db.Integer, db.ForeignKey('story.id'), primary_key=True),
# )


class Book(db.Model, BaseModel):

    __tablename__ = 'stories'

    title = db.Column(db.String(40), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    year_published = db.Column(db.Integer, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', backref='books')





class StorySchema(ma.ModelSchema, BaseSchema):
    author = fields.Nested('AuthorSchema', exclude=('age', 'nationality'))
    class Meta:
        model = Book
