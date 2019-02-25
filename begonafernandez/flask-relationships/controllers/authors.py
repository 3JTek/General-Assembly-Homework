from flask import Blueprint
from models.author import Author, AuthorSchema

authors_schema = AuthorSchema(many=True)
author_schema = AuthorSchema()

api = Blueprint('authors', __name__)

@api.route('/authors', methods=['GET'])
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)

@api.route('/authors/<int:user_id>', methods=['GET'])
def show(user_id):
    author = Author.query.get(user_id)
    return author_schema.jsonify(author)
