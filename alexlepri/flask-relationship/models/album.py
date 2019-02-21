from app import db, ma
from .base import BaseModel, BaseSchema
from .user import User, UserSchema



class Album(db.Model, BaseModel):

    __tablename__ = 'albums'

    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='albums')


class AlbumSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Album
