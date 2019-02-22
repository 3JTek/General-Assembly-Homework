from app import db, ma

class Customer(db.Model):

    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(30), nullable=True)

class CustomerSchema(ma.ModelSchema):

    class Meta:
        model = Customer
