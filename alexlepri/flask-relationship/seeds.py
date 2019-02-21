from app import app, db
from models.user import User


with app.app_context():
    db.drop_all()
    db.create_all()


alex = User(username='alexl', email='alex@email.com')
alex.save()

ed = User(username='edl', email='ed@email.com')
ed.save()
