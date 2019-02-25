from app import db, ma
from marshmallow import fields
# from .user import User, UserSchema
from .base import BaseModel, BaseSchema
from .creator import Creator

gifs_users = db.Table('gifs_users',
    db.Column('gif_id', db.Integer, db.ForeignKey('gifs.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)

class Gif(db.Model, BaseModel):

    __tablename__ = 'gifs'

    url = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('creators.id'))
    created_by = db.relationship('Creator', backref='created_gifs')
    user_faves = db.relationship('User', secondary=gifs_users, backref='faves')


class GifSchema(ma.ModelSchema, BaseSchema):

    user_faves = fields.Nested('UserSchema', many=True, exclude=('faves', 'email', ))
    created_by = fields.Nested('CreatorSchema', exclude=('created_gifs', 'email', ))


    class Meta:
        model = Gif
