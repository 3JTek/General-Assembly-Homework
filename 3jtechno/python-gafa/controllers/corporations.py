from flask import Blueprint
from models.corporation import Corporation, CorporationSchema

api = Blueprint('corporations', __name__)

@api.route('/corporations')
def index():

    corporation_schema = CorporationSchema(many=True)

    corporations = Corporation.query.all()
    return corporation_schema.jsonify(corporations), 200

@api.route('/corporations/<int:corporation_id>')
def show(corporation_id):

    corporation_schema = CorporationSchema(many=False)

    corporation = Corporation.query.get(corporation_id)
    return corporation_schema.jsonify(corporation), 200
