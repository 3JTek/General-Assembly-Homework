from models.customer import Customer, CustomerSchema
from flask import Blueprint

customer_schema = CustomerSchema(many=True)
api = Blueprint('customers', __name__)

@api.route('/customers', methods=['GET'])
def customersIndex():
    customers = Customer.query.all()
    return customer_schema.jsonify(customers)
