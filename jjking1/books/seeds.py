from app import app, db
from models.author import Author
from models.book import Book

with app.app_context():
    db.drop_all()
    db.create_all()

    george_rr_martin = Author(first_name='George', last_name='Martin', age=70, nationality='American')
    george_rr_martin.save()

    game_of_thrones = Book(title='A Game of Thrones', year_published=1996, rating=10, author=george_rr_martin)
    game_of_thrones.save()
