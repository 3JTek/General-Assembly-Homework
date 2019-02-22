from flask import Blueprint

api = Blueprint('corporations', __name__)

@api.route('/corporations')
def index():
    return 'Yeah in', 200
