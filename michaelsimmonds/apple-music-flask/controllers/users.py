from flask import Blueprint
from models.user import User, UserSchema

user_schema = UserSchema()

api = Blueprint('users', __name__)

@api.route('/users/<int:id>', methods=['GET'])
def show(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)
