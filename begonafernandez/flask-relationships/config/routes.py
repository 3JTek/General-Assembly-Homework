from app import app

from controllers import authors

app.register_blueprint(authors.api, url_prefix='/api')
