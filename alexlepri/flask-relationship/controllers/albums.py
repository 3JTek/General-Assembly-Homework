from flask import Blueprint
from models.photo import Photo, PhotoSchema
from models.album import Album, AlbumSchema

albums_schema = AlbumSchema(many=True)
album_schema = AlbumSchema()

api = Blueprint('albums', __name__)

@api.route('/albums', methods=['GET'])
def  index():
    albums = Album.query.all()
    return albums_schema.jsonify(albums)


@api.route('/albums/<int:album_id>', methods=['GET'])
def  show(album_id):
    album = Album.query.get(album_id)
    return album_schema.jsonify(album)
