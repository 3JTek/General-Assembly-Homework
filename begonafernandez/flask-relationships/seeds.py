from app import app, db
from models.author import Author

with app.app_context():
    db.drop_all()
    db.create_all()

    scott = Author(name='Walter Scott')
    scott.save()
