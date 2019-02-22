from app import app, db
from models.user import User
from models.article import Article
from models.reading_list import Reading_List

with app.app_context():
    db.drop_all()
    db.create_all()

    mike = User(username='mike1992', email='mike@mike.com')
    mike.save()

    berlin_wall = Article(title='The Berlin Wall', author='Mr B Wall', page_length=3)
    berlin_wall.save()

    best_walls = Reading_List(title='Best Walls', articles=[berlin_wall], user=mike)
    best_walls.save()
