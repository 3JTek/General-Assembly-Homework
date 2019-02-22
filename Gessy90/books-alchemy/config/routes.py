from app import app
from controllers import books, authors, genres

app.register_blueprint(books.api, url_prefix='/api')
app.register_blueprint(authors.api, url_prefix='/api')
app.register_blueprint(genres.api, url_prefix='/api')
