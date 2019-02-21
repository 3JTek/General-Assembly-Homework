from app import db, ma

class User(db.Model):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)


class UserSchema (ma.ModelSchema):

    class Meta:
        model = User
