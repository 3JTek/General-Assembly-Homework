from flask import Blueprint
from models.gif import Gif, GifSchema

gif_schema = GifSchema()
gifs_schema = GifSchema(many=True)

api = Blueprint('gifs', __name__)

# Index Route for Gifs
@api.route('/gifs', methods=['GET'])
def index():
    gifs = Gif.query.all()
    return gifs_schema.jsonify(gifs)

# Show Route for Gifs
@api.route('/gifs/<int:id>', methods=['GET'])
def show(id):
    gif = Gif.query.get(id)
    return gif_schema.jsonify(gif)
