from flask import Blueprint
from models.reading_list import Reading_List, Reading_ListSchema

reading_list_schema = Reading_ListSchema()
reading_lists_schema = Reading_ListSchema(many=True)

api = Blueprint('reading_lists', __name__)

@api.route('/reading_lists', methods=['GET'])
def index():
    reading_lists = Reading_List.query.all()
    return reading_lists_schema.jsonify(reading_lists)
