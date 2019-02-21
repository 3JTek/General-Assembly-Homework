from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-homework'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    author = db.Column(db.String(40), nullable=False)
    isbn = db.Column(db.String(40), nullable=False)
    genre = db.Column(db.String(40), nullable=True)

class BookSchema(ma.ModelSchema):
    class Meta:
        model = Book


@app.route('/books', methods=['GET'])
def books_index():
    books = Book.query.all()
    books_schema = BookSchema(many=True)
    return books_schema.jsonify(books), 200

@app.route('/books/<int:id>', methods=['GET'])
def book_show(id):
    book = Book.query.get(id)
    book_schema = BookSchema()
    return book_schema.jsonify(book), 200
