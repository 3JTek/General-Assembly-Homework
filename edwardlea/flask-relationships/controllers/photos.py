from flask import Blueprint
from models.photo import Photo, PhotoSchema

# user_schema = UserSchema()
photo_schema = PhotoSchema()
photos_schema = PhotoSchema(many=True)


api = Blueprint('photos', __name__)

@api.route('/photos/<int:photo_id>', methods=['GET'])
def show(photo_id):
    photo = Photo.query.get(photo_id)
    return photo_schema.jsonify(photo)

@api.route('/photos', methods=['GET'])
def index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)
