from app import app, db
from models.user import User
from models.photo import Photo


with app.app_context():
    db.drop_all()
    db.create_all()


alex = User(username='alexl', email='alex@email.com')
alex.save()

ed = User(username='edl', email='ed@email.com')
ed.save()


lake_como = Photo(caption='lovely lake', filename='lakecome.jpeg', location='como' )
lake_como.save()


lake_garda = Photo(caption='amazing lake', filename='lakegarda.jpeg', location='garda' )
lake_garda.save()
