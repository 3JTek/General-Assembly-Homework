from flask import Blueprint
from models.book import Book, BookSchema

book_schema = BookSchema()
books_schema = BookSchema(many=True)

router = Blueprint('books', __name__)

@api.route('/books', methods=['GET'])
def index():
    videos = Video.query.all()
    return videos_schema.jsonify(videos)

@api.route('/videos/<int:id>', methods=['GET'])
def show(id):
    video = Video.query.get(id)
    return video_schema.jsonify(video)
