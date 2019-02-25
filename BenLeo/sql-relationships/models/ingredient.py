from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Ingredient(db.Model, BaseModel):

    __tablename__ = 'ingredients'

    name = db.Column(db.String(30), nullable=False)
    # cocktails_id = db.Column(db.Integer, db.ForeignKey('cocktails.id'))
    # cocktails = db.relationship('Cocktail', backref='ingredients')


class IngredientSchema(ma.ModelSchema, BaseSchema):

    cocktails = fields.Nested('CocktailSchema', exclude=('user', ), many=True)

    class Meta:
        model = Ingredient
