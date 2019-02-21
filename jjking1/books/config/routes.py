from app import app
from controllers import books, authors


app.register_blueprint(books.router, url_prefix='/api')
app.register_blueprint(authors.router, url_prefix='/api')
