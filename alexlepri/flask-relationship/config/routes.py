from app import app
from controllers import users, photos, albums

# ==== CALL ALL ROUTE IN CONTROLLERS AND REMEMBER TO IMPORT FROM CONTROLLERS ABOVE =====
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(photos.api, url_prefix='/api')
app.register_blueprint(albums.api, url_prefix='/api')
