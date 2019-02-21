from app import app
from controllers import users, cocktails, ingredients

app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(cocktails.api, url_prefix='/api')
app.register_blueprint(ingredients.api, url_prefix='/api')
