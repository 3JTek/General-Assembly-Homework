from flask import Blueprint
from models.mylist import Mylist, MylistSchema

mylist_schema = MylistSchema()
mylists_schema = MylistSchema(many=True)

api = Blueprint('mylists', __name__)

@api.route('/mylists', methods=['GET'])
def index():
    mylists = Mylist.query.all()
    return mylists_schema.jsonify(mylists)
