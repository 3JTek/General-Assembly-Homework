from flask import Blueprint
from models.author import Author, AuthorSchema

author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True) #turns schemas into readable json for front end


router = Blueprint('authors', __name__) #router(or api) just for the users, will be joined together in routes folder

@router.route('/authors/<int:id>', methods=['GET']) #could put methods=['GET', 'POST']
def show(id):
    author = Author.query.get(id)
    return author_schema.jsonify(author)

@router.route('/authors', methods=['GET']) #could put methods=['GET', 'POST']
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)
