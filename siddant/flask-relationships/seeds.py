from app import app, db
from models.author import Author
from models.book import Book
from models.store import Store

with app.app_context():
    db.drop_all()
    db.create_all()

    tolkien = Author(author_first_name='J. R. R.', author_last_name='Tolkien', nationality='English', age=81)
    tolkien.save()

    lord_of_the_ring = Book(title="The Lord of the Rings", rating=5, author=tolkien, published_year=1954)
    lord_of_the_ring.save()

    store = Store(name="Camden Lock Books", location='london', hours_of_operation='9-5', books=[lord_of_the_ring])
    store.save()
