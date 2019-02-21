from app import app
from controllers import author


app.register_blueprint(author.api, url_prefix='/api')
