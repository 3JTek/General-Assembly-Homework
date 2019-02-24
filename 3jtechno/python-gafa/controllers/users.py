from flask import Blueprint
from models.user import User, UserSchema

api = Blueprint('users', __name__)
users_schema = UserSchema(many=True, only=('username',))
user_schema = UserSchema()

@api.route('/users')
def index():
    users = User.query.all()
    return users_schema.jsonify(users), 200

@api.route('/users/<int:user_id>')
def show(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user), 200
