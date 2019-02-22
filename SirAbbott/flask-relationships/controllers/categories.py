from models.category import Category, CategorySchema
from flask import Blueprint

category_schema = CategorySchema()
api = Blueprint('categories', __name__)

@api.route('/categories/<int:id>', methods=['GET'])
def categoryShow(id):
    categories = Category.query.get(id)
    return category_schema.jsonify(categories)
