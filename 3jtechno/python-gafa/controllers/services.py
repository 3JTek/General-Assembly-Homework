from flask import Blueprint
from models.service import Service, ServiceSchema

api = Blueprint('services', __name__)
services_schema = ServiceSchema(many=True, only=('name',))
service_schema = ServiceSchema()

@api.route('/services')
def index():
    services = Service.query.all()
    return services_schema.jsonify(services), 200

@api.route('services/<int:service_id>')
def show(service_id):
    service = Service.query.get(service_id)
    return service_schema.jsonify(service), 200
