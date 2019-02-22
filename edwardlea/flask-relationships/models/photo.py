from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema
from .album import Album

# Table created conbining album and photo tables to allowing refering between each to take palce
albums_photos = db.Table('albums_photos',
db.Column('album_id', db.Integer, db.ForeignKey('albums.id'), primary_key=True),
db.Column('photo_id', db.Integer, db.ForeignKey('photos.id'), primary_key=True),
)

#Photo class created detailing table name and columns with associated properties,
class Photo(db.Model, BaseModel):
#table is given a name within the database
    __tablename__ = 'photos'

    caption = db.Column(db.String(60), nullable=False)
    filename = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(40), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='photos')
    albums = db.relationship('Album', secondary=albums_photos, backref='photos')

#PhotoSchema created to format the data retrived from the database.
class PhotoSchema(ma.ModelSchema, BaseSchema):
#as user is a referenced field  the UserSchema needs to be specified to import the User data
    user = fields.Nested('UserSchema', exclude=('email', 'created_at', 'updated_at'))

# Meta class indicates the Photo model should be used as a baseself.
    class Meta:
        model = Photo
        exclude = ('created_at', 'updated_at')
