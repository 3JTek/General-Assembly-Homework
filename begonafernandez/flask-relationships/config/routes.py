from app import app

from controllers import authors, books, series

app.register_blueprint(authors.api, url_prefix='/api')
app.register_blueprint(books.api, url_prefix='/api')
app.register_blueprint(series.api, url_prefix='/api')
