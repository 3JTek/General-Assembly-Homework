from flask import Blueprint
from models.album import Album, AlbumSchema

#instances of Album Schema created for indivual album and all albums(many)
album_schema = AlbumSchema()
albums_schema = AlbumSchema(many=True)

#creates a API router for albums routes
api = Blueprint('albums', __name__)

#create the show route for album, album_id passed into request and used to get album from database.
@api.route('/albums/<int:album_id>', methods=['GET'])
def show(album_id):
    album = Album.query.get(album_id)
    return album_schema.jsonify(album)

#create index route for albums to return all records
@api.route('/albums', methods=['GET'])
def index():
    albums = Album.query.all()
    return albums_schema.jsonify(albums)
