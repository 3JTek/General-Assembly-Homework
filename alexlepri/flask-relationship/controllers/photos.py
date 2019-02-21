from flask import Blueprint
from models.photo import Photo, PhotoSchema

photos_schema = PhotoSchema(many=True)
photo_schema = PhotoSchema()

api = Blueprint('photos', __name__)

@api.route('/photos', methods=['GET'])
def  index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)


@api.route('/photos/<int:photo_id>', methods=['GET'])
def  show(photo_id):
    photo = Photo.query.get(photo_id)
    return photo_schema.jsonify(photo)
