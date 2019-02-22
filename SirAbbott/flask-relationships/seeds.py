from app import app, db
from models.business import Business
from models.category import Category
from models.customer import Customer
from models.sale import Sale

with app.app_context():
    db.drop_all()
    db.create_all()

test_business = Business(name='testing1', type='type1')
db.session.add(test_business)
db.session.commit()

test_category = Category(type='type')
db.session.add(test_category)

test_sale = Sale(title='title1', content='content1', business=test_business, category=test_category)
db.session.add(test_sale)

test_customer = Customer(name='name1', phone='phone1', email='email1', catagories=[test_category])
db.session.add(test_customer)

db.session.commit()
