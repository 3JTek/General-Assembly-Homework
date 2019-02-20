from main import app, db

from models.car import Car

with app.app_context():
    db.drop_all()   # drop all the database tables
    db.create_all() # create all the database tables

    # create some cars
    polo = Car(make="VW", model="Golf", lisence="GH12 7LL", color="blue")
    porche = Car(make="Porche", model="911", lisence="SL7 7LL", color="black")

    # add the cars to the session
    db.session.add(polo)
    db.session.add(porche)

    # save the data to the database
    db.session.commit()
