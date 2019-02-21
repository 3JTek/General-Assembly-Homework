from app import app
from controllers import users, films, mylists

app.register_blueprint(films.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(mylists.api, url_prefix='/api')
