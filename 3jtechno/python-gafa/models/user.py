from datetime import datetime, timedelta
import jwt
from sqlalchemy.ext.hybrid import hybrid_property
from app import db, ma, bcrypt
from config.environment import secret
from marshmallow import validates_schema, ValidationError, fields, validate
from models.base import Base

class User(db.Model, Base):

    __tablename__ = 'users'

    username = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), nullable=False, unique=True)
    password_hash = db.Column(db.String(128))

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self.password_hash, plaintext)

    def generate_token(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf-8')

        return token

class UserSchema(ma.ModelSchema):

    @validates_schema
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Password does not match password confimation'
            )

    password = fields.String(
    required=True,
    validate=[validate.Length(min=8, max=50)]
    )
    password_confirmation = fields.String(required=True)

    services = fields.Nested('ServiceSchema', many=True, exclude=('users',))

    class Meta:
        model = User
        exclude = ('id', 'password_hash')
