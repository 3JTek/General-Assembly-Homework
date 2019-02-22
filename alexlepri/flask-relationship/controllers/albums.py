from flask import Blueprint
from models.photo import Photo, PhotoSchema
from models.album import Album, AlbumSchema

albums_schema = AlbumSchema(many=True)
album_schema = AlbumSchema()

api = Blueprint('albums', __name__)
# CREATE THE ROUTE FOR ALBUM TO SHOW THE INDEX PAGE ========
@api.route('/albums', methods=['GET'])
def  index():
    albums = Album.query.all()
    return albums_schema.jsonify(albums)  #  REMEMBER MUST BE PLURARL BECAUSE INDEX PAGE!!!

# ==== CREATE THE ROUTE TO SHOW THE ALBUM_ID (SHOW) ========
@api.route('/albums/<int:album_id>', methods=['GET'])
def  show(album_id):
    album = Album.query.get(album_id)  # REMEMBER MUST BE SINGULAR!!!
    return album_schema.jsonify(album) # REMEMBER MUST BE SINGULAR!!!
