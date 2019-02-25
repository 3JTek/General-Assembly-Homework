from app import db, ma
from .customer import Customer, CustomerSchema
from marshmallow import fields

categories_customers = db.Table('categories_customers',
db.Column('category_id', db.Integer, db.ForeignKey('categories.id')),
db.Column('customer_id', db.Integer, db.ForeignKey('customers.id'))
)

class Category(db.Model):

    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20), nullable=False)
    customers = db.relationship('Customer', secondary=categories_customers,
    backref='catagories')

class CategorySchema(ma.ModelSchema):

    class Meta:
        model = Category
