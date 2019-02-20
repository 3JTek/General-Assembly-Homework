from app import app, db, Dip

with app.app_context():
    db.drop_all()
    db.create_all()
    
    # Create some donuts.
    hummus = Dip(name='hummus', color='brown', origin='the med', pairing='pitta')
    guac = Dip(name='guac', color='green', origin='mexico', pairing='chilli')

    #add donuts to database session
    db.session.add(hummus)
    db.session.add(guac)

    # save the data
    db.session.commit()
