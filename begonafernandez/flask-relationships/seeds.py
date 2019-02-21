from app import app, db
from models.author import Author
from models.book import Book

with app.app_context():
    db.drop_all()
    db.create_all()

    scott = Author(name='Walter Scott')
    scott.save()

    dickens = Author(name='Charles Dickens')
    dickens.save()

    waverley = Book(title='Waverley', author=scott)
    waverley.save()
