from app import app, db
from models.book import Book
from models.author import Author
from models.genre import Genre

with app.app_context():
    db.drop_all()
    db.create_all()

    cooking = Genre(name='Cooking')
    cooking.save()

    ultimate_home_cooking = Book(title='Ultimate Home Cooking', genres=[cooking])
    ultimate_home_cooking.save()

    gordon_ramsay = Author(name='Gordon Ramsay', books=[ultimate_home_cooking])
    gordon_ramsay.save()
