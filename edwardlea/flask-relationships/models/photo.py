from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema
from .album import Album

albums_photos = db.Table('albums_photos',
db.Column('album_id', db.Integer, db.ForeignKey('albums.id'), primary_key=True),
db.Column('photo_id', db.Integer, db.ForeignKey('photos.id'), primary_key=True),
)

class Photo(db.Model, BaseModel):

    __tablename__ = 'photos'

    caption = db.Column(db.String(60), nullable=False)
    filename = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(40), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='photos')
    albums = db.relationship('Album', secondary=albums_photos, backref='photos')


class PhotoSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'created_at', 'updated_at'))


    class Meta:
        model = Photo
        exclude=('created_at', 'updated_at')
