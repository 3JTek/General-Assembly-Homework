from flask import Blueprint
from models.store import Store, StoreSchema

store_schema = StoreSchema()
stores_schema = StoreSchema(many=True)

router = Blueprint('stores', __name__)

@router.route('/stores', methods=['GET'])
def index():
    stores = Store.query.all()
    return stores_schema.jsonify(stores)

@router.route('/stores/<int:store_id>', methods=['GET'])
def show(store_id):
    store_id = Store.query.get(store_id)
    return store_schema.jsonify(store_id)
