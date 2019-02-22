#models/car
from main import db, ma

class Car(db.Model):

    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(40), nullable=False)
    model = db.Column(db.String(40), nullable=False)
    lisence = db.Column(db.String(8), unique=True, nullable=False)
    color = db.Column(db.String(20))

class CarSchema(ma.ModelSchema):

    class Meta:
        model = Car
