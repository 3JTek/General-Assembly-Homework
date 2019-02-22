from app import db, ma
from marshmallow import fields
from .ingredient import Ingredient
from .base import BaseModel, BaseSchema

ingredients_cocktails = db.Table('ingredients_cocktails',
    db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredients.id'), primary_key=True),
    db.Column('cocktail_id', db.Integer, db.ForeignKey('cocktails.id'), primary_key=True)
)

class Cocktail(db.Model, BaseModel):

    __tablename__ = 'cocktails'

    name = db.Column(db.String(30), nullable=False)
    origin = db.Column(db.String(30), nullable=True)
    base_alcohol = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='cocktails')
    ingredients = db.relationship('Ingredient', secondary=ingredients_cocktails, backref='cocktails')

class CocktailSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'cocktails'))
    ingredients = fields.Nested('IngredientSchema', exclude=('cocktails', ), many=True)


    class Meta:
        model = Cocktail
