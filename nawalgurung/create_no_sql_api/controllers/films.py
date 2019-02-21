from flask import Blueprint
from models.film import Film, FilmSchema

film_schema = FilmSchema()
films_schema = FilmSchema(many=True)

api = Blueprint('films', __name__)

@api.route('/films', methods=['GET'])
def index():
    films = Film.query.all()
    return films_schema.jsonify(films)
