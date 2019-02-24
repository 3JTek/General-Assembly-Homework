from flask import Blueprint
from models.corporation import Corporation, CorporationSchema
from lib.secure_route import secure_route

api = Blueprint('corporations', __name__)
corporations_schema = CorporationSchema(many=True, only=('name',))
corporation_schema = CorporationSchema()

@api.route('/corporations')
@secure_route
def index():
    corporations = Corporation.query.all()
    return corporations_schema.jsonify(corporations), 200

@api.route('/corporations/<int:corporation_id>')
def show(corporation_id):
    corporation = Corporation.query.get(corporation_id)
    return corporation_schema.jsonify(corporation), 200
