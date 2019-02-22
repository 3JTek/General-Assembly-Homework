from app import app
from controllers import corporations

app.register_blueprint(corporations.api, url_prefix='/api')
