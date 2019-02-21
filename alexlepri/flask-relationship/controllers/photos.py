from flask import Blueprint
from models.user import Photo, PhotoSchema

photo_schema = PhotoSchema(many=True)

api = Blueprint('photos', __name__)

@api.route('/photos', methods=['GET'])
def  index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)
