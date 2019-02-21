from app import app, db
from models.author import Author
from models.book import Book
from models.series import Series

with app.app_context():
    db.drop_all()
    db.create_all()

    waverley_series = Series(title='Waverley Novels')
    waverley_series.save()

    scott = Author(name='Walter Scott')
    scott.save()

    dickens = Author(name='Charles Dickens')
    dickens.save()

    waverley = Book(title='Waverley', author=scott, series=waverley_series)
    waverley.save()

    mannering = Book(title='Guy Mannering', author=scott, series=waverley_series)
    mannering.save()

    bleak = Book(title='Bleak house', author=dickens)
    bleak.save()
