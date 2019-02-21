from app import app, db, Sandwich

with app.app_context():
    db.drop_all()
    db.create_all()

    blt_sandwich = Sandwich(name='BLT', fillings='Bacon Lettuce Tomato', price=3.00, vegetarian=False)
    peanut_butter_jelly_sandwich = Sandwich(name='Peanut Butter and Jelly', fillings='Peanut Butter and Jelly', price=2.00, vegetarian=True)

    #add the donuts to the database session
    db.session.add(blt_sandwich)
    db.session.add(peanut_butter_jelly_sandwich)

    db.session.commit()
