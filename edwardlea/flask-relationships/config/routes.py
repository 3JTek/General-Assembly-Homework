from app import app
from controllers import users, photos

app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(photos.api, url_prefix='/api')
