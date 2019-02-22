from app import app, db
from models.user import User
from models.film import Film
from models.mylist import Mylist

with app.app_context():
    db.drop_all()
    db.create_all()

    seb = User(username='sebastian', email='sebastian@gmail.com')
    seb.save()

    puplfiction = Film(title='Pulp Fiction', filename='pulpfiction.AVI')
    puplfiction.save()

    fav_list = Mylist(title='Fav Movie List', user=seb, films=[puplfiction])
    fav_list.save()
