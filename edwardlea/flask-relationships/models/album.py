from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema

class Album(db.Model, BaseModel):

    __tablename__ = 'albums'

    name = db.Column(db.String(60), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='albums')

class AlbumSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'photos', 'albums', 'created_at', 'updated_at'))
    photos = fields.Nested('PhotoSchema', exclude=('albums', 'user', 'created_at', 'updated_at'), many=True)


    class Meta:
        model = Album
