from app import app
from controllers import corporations, services

app.register_blueprint(corporations.api, url_prefix='/api')
app.register_blueprint(services.api, url_prefix='/api')
