from flask import Blueprint
from models.series import Series, SeriesSchema

series_schema = SeriesSchema(many=True)
serie_schema = SeriesSchema()

api = Blueprint('series', __name__)

@api.route('/series', methods=['GET'])
def index():
    series = Series.query.all()
    return series_schema.jsonify(series)


@api.route('/series/<int:series_id>', methods=['GET'])
def show(series_id):
    series = Series.query.get(series_id)
    return serie_schema.jsonify(series)
