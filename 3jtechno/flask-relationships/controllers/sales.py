from models.sale import Sale, SaleSchema
from flask import Blueprint

sales_schema = SaleSchema()
api = Blueprint('sales', __name__)

@api.route('/sales/<int:id>', methods=['GET'])
def saleShow(id):
    sale = Sale.query.get(id)
    return sales_schema.jsonify(sale)
