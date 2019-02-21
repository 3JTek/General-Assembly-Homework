from flask import Blueprint
from models.album import Album, AlbumSchema

album_schema = AlbumSchema()
albums_schema = AlbumSchema(many=True)

api = Blueprint('albums', __name__)

@api.route('/albums/<int:album_id>', methods=['GET'])
def show(album_id):
    album = Album.query.get(album_id)
    return album_schema.jsonify(album)


@api.route('/albums', methods=['GET'])
def index():
    albums = Album.query.all()
    return albums_schema.jsonify(albums)
