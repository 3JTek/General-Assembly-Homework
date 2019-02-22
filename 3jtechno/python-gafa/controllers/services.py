from flask import Blueprint
from models.service import Service, ServiceSchema

api = Blueprint('services', __name__)

@api.route('/services')
def index():
    services = Service.query.all()
    service_schema = ServiceSchema(many=True)
    return service_schema.jsonify(services), 200

@api.route('services/<int:service_id>')
def show(service_id):
    service = Service.query.get(service_id)
    service_schema = ServiceSchema(many=False)
    return service_schema.jsonify(service), 200
