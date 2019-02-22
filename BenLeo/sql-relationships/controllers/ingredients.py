from flask import Blueprint
from models.ingredient import Ingredient, IngredientSchema

ingredient_schema = IngredientSchema()
ingredients_schema = IngredientSchema(many=True)

api = Blueprint('ingredients', __name__)

@api.route('/ingredients', methods=['GET'])
def index():
    ingredients = Ingredient.query.all()
    return ingredients_schema.jsonify(ingredients)

@api.route('/ingredients/<int:ingredient_id>', methods=['GET'])
def show(ingredient_id):
    ingredient = Ingredient.query.get(ingredient_id)
    return ingredient_schema.jsonify(ingredient)
