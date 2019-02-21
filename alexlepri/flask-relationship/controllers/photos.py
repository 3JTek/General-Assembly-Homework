from flask import Blueprint
from models.photo import Photo, PhotoSchema

photos_schema = PhotoSchema(many=True)

api = Blueprint('photos', __name__)

@api.route('/photos', methods=['GET'])
def  index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)
