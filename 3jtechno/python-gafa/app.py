#psycopg2-binary is some kind of drivers to talk to the sqldb
from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/flask-authentication'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

#Sqlalchemy is responsible for all comms with the db
db = SQLAlchemy(app)
#Marshmallow is needed to translate the db object retrieved by sqlalchemy into json
ma = Marshmallow(app)

bcrypt = Bcrypt(app)

#pylint: disable=C0413, W0611
from config import routes
