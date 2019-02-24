from flask import Blueprint
from models.corporation import Corporation, CorporationSchema

#Blueprint is like is mini router given by flask for free
api = Blueprint('corporations', __name__)
#differents schemas can be created to send back different data depending
#on what request comes in.
corporations_schema = CorporationSchema(many=True, only=('name',))
corporation_schema = CorporationSchema()

@api.route('/corporations')
def index():
    corporations = Corporation.query.all()
    #corporations is the db oject retrieve using alchemy modelself.
    #Marshmallow helps us here to serialize (transform to JSON) this object.
    return corporations_schema.jsonify(corporations), 200

@api.route('/corporations/<int:corporation_id>')
def show(corporation_id):
    corporation = Corporation.query.get(corporation_id)
    return corporation_schema.jsonify(corporation), 200
