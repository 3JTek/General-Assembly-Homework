from app import app, db
from models.user import User
from models.article import Article
from models.reading_list import Reading_List

with app.app_context():
    db.drop_all()
    db.create_all()

    beteyemane = User(username='beteyemane', email='beteyemane@hotmail.co.uk')
    beteyemane.save()

    berlin_wall = Article(title='The Berlin Wall', author='Mr B Wall', page_length=10, user=beteyemane)
    berlin_wall.save()

    best_walls = Reading_List(title='Best Walls', articles=[berlin_wall], user=beteyemane)
    best_walls.save()
