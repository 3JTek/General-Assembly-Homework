from app import db, ma
from .user import User, UserSchema
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Reading_List(db.Model, BaseModel):

    __tablename__ = 'reading_lists'

    title = db.Column(db.String(40), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='reading_lists')

class Reading_ListSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'articles', 'reading_lists'))
    articles = fields.Nested('ArticleSchema', exclude=('reading_lists', 'user'), many=True) #many true ARRAY

    class Meta:
        model = Reading_List
