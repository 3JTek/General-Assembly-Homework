from app import app, db, Phone

with app.app_context():
    db.drop_all()
    db.create_all()

    #create some Phone
    samsung_phone = Phone(name='S 10', has_external_memory=True, price=700)
    apple_phone = Phone(name='Iphone 10', has_external_memory=False, price=1000)

    db.session.add(samsung_phone)
    db.session.add(apple_phone)

    db.session.commit()
