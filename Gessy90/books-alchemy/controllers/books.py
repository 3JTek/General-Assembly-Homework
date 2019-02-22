from flask import Blueprint
from models.book import Book, BookSchema

book_schema = BookSchema()
books_schema = BookSchema(many=True)

api = Blueprint('books', __name__)

@api.route('/books', methods=['GET'])
def index():
    books = Book.query.all()
    return books_schema.jsonify(books)

@api.route('/books/<int:book_id>', methods=['GET'])
def show(book_id):
    book = Book.query.get(book_id)
    return book_schema.jsonify(book)
