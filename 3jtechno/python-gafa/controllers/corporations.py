from flask import Blueprint
from models.corporation import Corporation, CorporationSchema

api = Blueprint('corporations', __name__)
corporations_schema = CorporationSchema(many=True, only=('name',))
corporation_schema = CorporationSchema()

@api.route('/corporations')
def index():
    corporations = Corporation.query.all()
    return corporations_schema.jsonify(corporations), 200

@api.route('/corporations/<int:corporation_id>')
def show(corporation_id):
    corporation = Corporation.query.get(corporation_id)
    return corporation_schema.jsonify(corporation), 200
