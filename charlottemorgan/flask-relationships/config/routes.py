from app import app
from controllers import users, gifs, creators

# route for users prefixed with api
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(gifs.api, url_prefix='/api')
app.register_blueprint(creators.api, url_prefix='/api')
