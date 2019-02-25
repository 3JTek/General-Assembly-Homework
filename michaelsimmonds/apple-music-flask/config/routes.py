from app import app
from controllers import users, articles, reading_lists

app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(articles.api, url_prefix='/api')
app.register_blueprint(reading_lists.api, url_prefix='/api')
