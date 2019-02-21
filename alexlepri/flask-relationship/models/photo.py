from app import db, ma
from .base import BaseModel, BaseSchema
from .user import User, UserSchema



class Photo(db.Model, BaseModel):

    __tablename__ = 'photos'

    caption = db.Column(db.String(40), nullable=True)
    filename = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(40), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='photos')


class PhotoSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Photo
