from flask import jsonify, Blueprint, request
from models.user import User, UserSchema

api = Blueprint('auth', __name__)

user_schema = UserSchema()

@api.route('/register', methods=['POST'])
def register():
    user, errors = user_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    #this function ".save" comes from the base.py
    user.save()

    return  jsonify({'message': 'Registration Successful'}), 201

@api.route('/login', methods=['POST'])
def login():
    credentials = request.get_json()
    user = User.query.filter_by(email=credentials['email']).first()

    if not user or not user.validate_password(credentials['password']):
        return jsonify({'message': 'Unauthorized' }),401

    return jsonify({'token': user.generate_token(), 'message': f'Welcome back {user.username}!'}), 200
