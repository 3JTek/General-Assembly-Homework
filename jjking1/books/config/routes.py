from app import app
from controllers import books, authors, stores


app.register_blueprint(books.router, url_prefix='/api')
app.register_blueprint(authors.router, url_prefix='/api')
app.register_blueprint(stores.router, url_prefix='/api')
