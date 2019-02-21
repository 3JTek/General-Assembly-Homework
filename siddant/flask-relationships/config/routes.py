from app import app
from controllers import authors, books


app.register_blueprint(author.api, url_prefix='/api')
