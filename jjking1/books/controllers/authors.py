from flask import Blueprint
from models.author import Author, AuthorSchema

author_schema = AuthorSchema()
authors_schema = AuthorSchema(many=True) #turns schemas into readable json for front end


#router(or api) just for the users, will be joined together in routes folder
router = Blueprint('authors', __name__)

@router.route('/authors/<int:author_id>', methods=['GET']) #could put methods=['GET', 'POST']
def show(author_id):
    author = Author.query.get(author_id)
    return author_schema.jsonify(author)

@router.route('/authors', methods=['GET']) #could put methods=['GET', 'POST']
def index():
    authors = Author.query.all()
    return authors_schema.jsonify(authors)
