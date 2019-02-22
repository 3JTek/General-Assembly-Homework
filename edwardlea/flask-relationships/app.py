from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#creates an instance of Flask for the application
app = Flask(__name__)

#creates database for app
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-relationships'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#creates instance of SQLALchemy and Marshmallow for use in the app
db = SQLAlchemy(app)
ma = Marshmallow(app)

#uses routes as per routes file in config folder
#pylint: disable=W0611, C0413
from config import routes
