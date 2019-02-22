from flask import Blueprint
from models.genre import Genre, GenreSchema

genre_schema = GenreSchema()
genres_schema = GenreSchema(many=True)

api = Blueprint('genres', __name__)

@api.route('/genres', methods=['GET'])
def index():
    genres = Genre.query.all()
    return genres_schema.jsonify(genres)

@api.route('/genres/<int:genre_id>', methods=['GET'])
def show(genre_id):
    genre = Genre.query.get(genre_id)
    return genre_schema.jsonify(genre)
