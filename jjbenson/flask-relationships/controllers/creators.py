from flask import Blueprint
from models.creator import Creator, CreatorSchema

creator_schema = CreatorSchema()
creators_schema = CreatorSchema(many=True)

api = Blueprint('creators', __name__)

# Index Route for Creators
@api.route('/creators', methods=['GET'])
def index():
    creators = Creator.query.all()
    return creators_schema.jsonify(creators)

# Show Route for Creators
@api.route('/creators/<int:id>', methods=['GET'])
# Linter says that this id is being redefined, but it isn't?
def show(id):
    creator = Creator.query.get(id)
    return creator_schema.jsonify(creator)
