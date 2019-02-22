from flask import Blueprint
from models.user import User, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)


api = Blueprint('users', __name__)

#index route for the users
@api.route('/users', methods=['GET'])
def index():
    user = User.query.all()
    return users_schema.jsonify(user)

#show route for the users
@api.route('/users/<int:id>', methods=['GET'])
def show(id):
    user = User.query.get(id)
    return users_schema.jsonify(user)
