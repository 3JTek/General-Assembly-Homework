from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Album(db.Model, BaseModel):
# CREATE TABLE FOR ALBUM AND DECLARE PROPERTY TO ASSIGN =====
    __tablename__ = 'albums'

    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # ???
    user = db.relationship('User', backref='albums')


class AlbumSchema(ma.ModelSchema, BaseSchema):

    # CONNECTING DICT PHOTO AND USER INSIDE ALBUM ========  IS IT WORKING AS 'JOIN'?
    photos = fields.Nested('PhotoSchema', many=True, exclude=('album', 'user'))
    user = fields.Nested('UserSchema', exclude=('email', ))
    # MODEL WILL CHCK FOR THE  ABOVE TABLE TO CREATE THE COLUMN ========
    class Meta:
        model = Album
