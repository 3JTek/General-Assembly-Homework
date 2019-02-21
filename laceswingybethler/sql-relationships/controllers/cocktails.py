from flask import Blueprint
from models.cocktail import Cocktail, CocktailSchema

cocktail_schema = CocktailSchema()
cocktails_schema = CocktailSchema(many=True)

api = Blueprint('cocktails', __name__)

@api.route('/cocktails', methods=['GET'])
def index():
    cocktails = Cocktail.query.all()
    return cocktails_schema.jsonify(cocktails)

@api.route('/cocktails/<int:cocktail_id>', methods=['GET'])
def show(cocktail_id):
    cocktail = Cocktail.query.get(cocktail_id)
    return cocktail_schema.jsonify(cocktail)
