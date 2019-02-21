from app import app, db, Cake

with app.app_context():
    db.drop_all()
    db.create_all()


    #create some cakes
    carrot_cake = cake(name='carrot cake', flavour='carrot', fillings='bananas', price=0.95)
    banana_cake = cake(name='banana cake', flavour='banana',fillings='carrot', price=0.99)

    # add the cake to the database session

    db.session.add(carrot_cake)
    db.session.add(banana_cake)

    # save the database
    db.session.commit()
