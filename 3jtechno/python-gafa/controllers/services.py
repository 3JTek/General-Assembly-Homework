from flask import Blueprint, request, jsonify
from models.service import Service, ServiceSchema
from lib.secure_route import secure_route

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

@api.route('services', methods=['POST'])
@secure_route
def create():
    service, error = service_schema.load(request.get_json())

    if error:
        return jsonify(error), 422

    service.save()

    return service_schema.jsonify(service), 201

@api.route('services/<int:service_id>', methods=['PUT'])
@secure_route
def update(service_id):
    service = Service.query.get(service_id)

    if not service:
        return jsonify({'message': 'Not found'}), 404

    service, errors = service_schema.load(request.get_json(), instance=service)

    if errors:
        return jsonify(errors), 422

    service.save()

    return service_schema.jsonify(service), 200

@api.route('/services/<int:service_id>', methods=['DELETE'])
@secure_route
def delete(service_id):

    service = Service.query.get(service_id)
    if not service:
        return jsonify({'message': 'Not found'}), 404

    service.remove()

    return '', 204
