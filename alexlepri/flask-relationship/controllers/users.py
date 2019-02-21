from flask import Blueprint
from models.user import User, UserSchema

user_schema = UserSchema()

api = Blueprint('users', __name__)

# ===== ASSIGN THE ROUTE TO SHOW USER BY ID ========
@api.route('/users/<int:id>', methods=['GET'])  #  <int:id> ---> INTEGER ID NUMBER!!!
def  show(id):
    user = User.query.get(user_id)  # REMEMBER MUST BE ALWAYS SINGULAR ======
    return user_schema.jsonify(user_id)  # REMEMBER MUST BE ALWAYS SINGULAR ===
