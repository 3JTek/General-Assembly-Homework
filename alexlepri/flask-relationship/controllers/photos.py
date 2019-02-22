from flask import Blueprint
from models.photo import Photo, PhotoSchema

photos_schema = PhotoSchema(many=True)
photo_schema = PhotoSchema()

api = Blueprint('photos', __name__)
# CREATE THE ROUTE FOR PHOTO TO SHOW THE INDEX PAGE ========
@api.route('/photos', methods=['GET'])
def  index():
    photos = Photo.query.all()
    return photos_schema.jsonify(photos)  #  REMEMBER MUST BE PLURARL BECAUSE INDEX PAGE!!!

# ==== CREATE THE ROUTE TO SHOW THE PHOTO_ID (SHOW) ========
@api.route('/photos/<int:photo_id>', methods=['GET'])
def  show(photo_id):
    photo = Photo.query.get(photo_id)   # REMEMBER MUST BE SINGULAR!!!
    return photo_schema.jsonify(photo) # REMEMBER MUST BE SINGULAR!!!
