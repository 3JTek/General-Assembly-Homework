from flask import Blueprint
from models.book import Book, BookSchema

books_schema = BookSchema(many=True)
book_schema = BookSchema()

api = Blueprint('books', __name__)

@api.route('/books', methods=['GET'])
def index():
    books = Book.query.all()
    return books_schema.jsonify(books)
