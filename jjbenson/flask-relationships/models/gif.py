from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

# This gives a linter error but doens't work without it.
from .creator import Creator


# Join table to join gifs and users
gifs_users = db.Table('gifs_users',
    db.Column('gif_id', db.Integer, db.ForeignKey('gifs.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)


class Gif(db.Model, BaseModel):

    __tablename__ = 'gifs'

    url = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80), nullable=False)

    # Create creator_id columns from creators id
    creator_id = db.Column(db.Integer, db.ForeignKey('creators.id'))

    # Make created_by Creator created_gifs field?
    created_by = db.relationship('Creator', backref='created_gifs')

    # Create users_who_fav join table gifs_users from gifs_users
    users_who_fav = db.relationship('User', secondary=gifs_users, backref='favs')


class GifSchema(ma.ModelSchema, BaseSchema):

    # Create users_who_fav and created_by based on user and creator
    users_who_fav = fields.Nested('UserSchema', many=True, exclude=('favs', 'email'))
    created_by = fields.Nested('CreatorSchema', exclude=('created_gifs', 'email'))

    class Meta:
        model = Gif
