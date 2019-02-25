from app import db, ma
from .user import User, UserSchema
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .reading_list import Reading_List, Reading_ListSchema

reading_lists_articles = db.Table('reading_lists_articles',
    db.Column('reading_list_id', db.Integer, db.ForeignKey('reading_lists.id'), primary_key=True),
    db.Column('article_id', db.Integer, db.ForeignKey('articles.id'), primary_key=True)
)

class Article(db.Model, BaseModel):

    __tablename__ = 'articles'

    title = db.Column(db.String(50), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    page_length = db.Column(db.Integer, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='articles')
    reading_lists = db.relationship('Reading_List', secondary=reading_lists_articles, backref='articles')

class ArticleSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', ))

    class Meta:
        model = Article
