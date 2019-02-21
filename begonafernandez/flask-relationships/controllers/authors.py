from flask import Blueprint
from models.author import Author, AuthorSchema

authors_schema = AuthorSchema(many=True)

api = Blueprint('authors', __name__)

@api.route('/authors', methods=['GET'])
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)
