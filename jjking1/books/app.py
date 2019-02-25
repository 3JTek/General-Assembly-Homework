from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#creating the server
app = Flask(__name__)

#connecting to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-relationships'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# connecting mm and sqlalch, lets us convert data to json
db = SQLAlchemy(app)
ma = Marshmallow(app)


@app.route('/')
def home():
    return 'Hello World', 200

#pylint: disable=W0611, C0413
from config import routes
