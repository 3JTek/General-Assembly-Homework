from app import app, db
from models.author import Author
from models.book import Book
from models.store import Store

with app.app_context():
    db.drop_all()
    db.create_all()

    george_rr_martin = Author(first_name='George', last_name='Martin', age=70, nationality='American')
    george_rr_martin.save()

    game_of_thrones = Book(title='A Game of Thrones', year_published=1996, rating=10, author=george_rr_martin)
    game_of_thrones.save()

    clash_of_kings = Book(title='Clash of Kings', year_published=1998, rating=9, author=george_rr_martin)
    clash_of_kings.save()

    camden_lock_books = Store(name='Camden Lock Books', location='London', hours_of_operation='24/7', books=[game_of_thrones, clash_of_kings])
    camden_lock_books.save()

    aldgate_books = Store(name='Aldgate Books', location='Whitechapel', hours_of_operation='mornings', books=[game_of_thrones])
    aldgate_books.save()
