from app import app, db
from models.user import User

with app.app_context():
    db.drop_all()
    db.create_all()

    elea = User(username='elea', email='elea@gmail.com')
    elea.save()

    alex = User(username='alex', email='alex@email.com')
    alex.save()

    
