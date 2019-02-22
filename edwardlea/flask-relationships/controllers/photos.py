from flask import Blueprint
from models.photo import Photo, PhotoSchema

#instances of PhotoSchema created for show and index
photo_schema = PhotoSchema()
photos_schema = PhotoSchema(many=True)

#creates API router for photos
api = Blueprint('photos', __name__)

#handles show and index routes
@api.route('/photos/<int:photo_id>', methods=['GET'])
def show(photo_id):
    photo = Photo.query.get(photo_id)
    return photo_schema.jsonify(photo)

@api.route('/photos', methods=['GET'])
def index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)
