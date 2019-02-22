from models.business import Business, BusinessSchema
from flask import Blueprint

business_schema = BusinessSchema(many=True)
api = Blueprint('businesses', __name__)

@api.route('/businesses', methods=['GET'])
def businessesIndex():
    businesses = Business.query.all()
    return business_schema.jsonify(businesses)
