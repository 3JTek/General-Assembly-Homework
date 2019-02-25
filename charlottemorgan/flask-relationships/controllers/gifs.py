from flask import Blueprint
from models.gif import Gif, GifSchema

gif_schema = GifSchema()
gifs_schema = GifSchema(many=True)

api = Blueprint('gifs', __name__)

@api.route('/gifs', methods=['GET'])
def index():
    gifs = Gif.query.all()
    return gifs_schema.jsonify(gifs)
