from flask import Blueprint
from models.author import Author, AuthorSchema

author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True)

api = Blueprint('authors', __name__)


@api.route('/authors', methods=['GET'])
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)

@api.route('/author/<int:author_id>', methods=['GET'])
def show(author_id):
    author = Author.query.get(author_id)
    return author_schema.jsonify(author)
