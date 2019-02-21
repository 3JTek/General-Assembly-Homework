from flask import Blueprint
from models.photo import Photo, PhotoSchema
from models.album import Album, AlbumSchema

albums_schema = AlbumSchema(many=True)

api = Blueprint('albums', __name__)

@api.route('/albums', methods=['GET'])
def  index():
    albums = Album.query.all()
    return albums_schema.jsonify(albums)
