from flask import Blueprint
from models.creator import Creator, CreatorSchema

creator_schema = CreatorSchema()
creators_schema = CreatorSchema(many=True)

api = Blueprint('creators', __name__)

@api.route('/creators', methods=['GET'])
def index():
    creators = Creator.query.all()
    return creators_schema.jsonify(creators)

@api.route('/creators/<int:id>', methods=['GET'])
def show(id):
    creators = Creator.query.get(id)
    return creators_schema.jsonify(creators)
