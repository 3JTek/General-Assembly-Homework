# lib/secure_route.py
from functools import wraps
import jwt
from flask import request, jsonify, g
from config.environment import secret
from models.user import User

def secure_route(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')

        try:
            payload = jwt.decode(token, secret)
            g.current_user = User.query.get(payload['sub'])

        except jwt.ExpiredSignatureError:
            # token has expired
            return jsonify({'message': 'Token expired'}), 401

        except Exception as e:
            # any other error has occurred
            return jsonify({'message': 'Unauthorized'}), 401

        return func(*args, **kwargs)

    return wrapper
