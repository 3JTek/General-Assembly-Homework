from flask import Blueprint
from models.store import Store, StoreSchema

store_schema = StoreSchema()
stores_schema = StoreSchema(many=True)

api = Blueprint('stores', __name__)


@api.route('/stores', methods=['GET'])
def index():
    stores = Store.query.all()
    return stores_schema.jsonify(stores)

@api.route('/stores/<int:store_id>', methods=['GET'])
def show(store_id):
    store = Store.query.get(store_id)
    return store_schema.jsonify(store)
