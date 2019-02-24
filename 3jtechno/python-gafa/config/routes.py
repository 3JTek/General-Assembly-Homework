from app import app
from controllers import corporations, services, users, auth

app.register_blueprint(corporations.api, url_prefix='/api')
app.register_blueprint(services.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
