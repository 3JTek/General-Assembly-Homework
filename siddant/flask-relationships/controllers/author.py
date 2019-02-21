from flask import Blueprint
from models.author import Author, AuthorSchema

author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True)

api = Blueprint('authors', __name__)


@api.route('/authors', methods=['GET'])
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)

@api.route('/author/<int:id>', methods=['GET'])
def show(id):
    author = Author.query.get(id)
    return author_schema.jsonify(author)
