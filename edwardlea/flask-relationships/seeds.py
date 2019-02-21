from app import app, db
from models.user import User
from models.photo import Photo

with app.app_context():
    db.drop_all()
    db.create_all()

    elea = User(username='elea', email='elea@gmail.com')
    elea.save()

    alex = User(username='alex', email='alex@email.com')
    alex.save()

    lake_como = Photo(caption='lovely lake', filename='lake_como.jpeg', location='Como')
    lake_como.save()

    lake_garda = Photo(caption='also a lake', filename='garda.jpeg', location='Garda')
    lake_garda.save()
