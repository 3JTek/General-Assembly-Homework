from app import db, ma
from marshmallow import fields
from .user import User, UserSchema
from .base import BaseModel, BaseSchema

mylist_films = db.Table('mylist_films',
    db.Column('mylist_id', db.Integer, db.ForeignKey('mylists.id'),
    primary_key=True),
    db.Column('film_id', db.Integer, db.ForeignKey('films.id'), primary_key=True)
)


class Mylist(db.Model, BaseModel):

    __tablename__ = 'mylists'

    title = db.Column(db.String(40), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='mylists')
    films = db.relationship('Film', secondary=mylist_films, backref='mylists')


class MylistSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('mylists'))
    films = fields.Nested('FilmSchema', exclude=('mylists', 'user'), many=True)

    class Meta:
        model = Mylist
