from app import app
from controllers import authors, books


app.register_blueprint(authors.api, url_prefix='/api')
app.register_blueprint(books.api, url_prefix='/api')
