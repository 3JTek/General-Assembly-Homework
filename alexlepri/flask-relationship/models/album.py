from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Album(db.Model, BaseModel):

    __tablename__ = 'albums'

    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='albums')


class AlbumSchema(ma.ModelSchema, BaseSchema):


    photos = fields.Nested('PhotoSchema', many=True, exclude=('album', 'user'))
    user = fields.Nested('UserSchema', exclude=('email', ))




    class Meta:
        model = Album
