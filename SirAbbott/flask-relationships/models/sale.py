from app import db, ma
from marshmallow import fields
from models.business import Business, BusinessSchema
from models.category import Category, CategorySchema

class Sale(db.Model):

    __tablename__ = 'sales'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(30), nullable=False)
    content = db.Column(db.String(200), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    business = db.relationship('Business')
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category')

class SaleSchema(ma.ModelSchema):
    business = fields.Nested('BusinessSchema')
    category = fields.Nested('CategorySchema')

    class Meta:
        model = Sale
