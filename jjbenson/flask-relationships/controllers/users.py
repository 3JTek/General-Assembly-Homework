from flask import Blueprint
from models.user import User, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)

api = Blueprint('users', __name__)

# Index Route for Users
@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return users_schema.jsonify(users)

# Show Route for Users
@api.route('/users/<int:id>', methods=['GET'])
# Linter says that this id is being redefined, but it isn't?
def show(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)
