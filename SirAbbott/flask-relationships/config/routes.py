from app import app
from controllers import businesses, sales, categories, customers

app.register_blueprint(businesses.api, url_prefix='/api')
app.register_blueprint(sales.api, url_prefix='/api')
app.register_blueprint(categories.api, url_prefix='/api')
app.register_blueprint(customers.api, url_prefix='/api')
