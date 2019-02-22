from app import db
from datetime import datetime
from marshmallow import fields

class BaseModel:
    #id, created_at and updated_at are common to all the models so therefor made in the base
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #common method to save all to db
    def save(self):
        self.updated_at = datetime.utcnow()

        db.session.add(self)
        db.session.commit()

    def remove(self):
        db.session.delete(self)
        db.session.commit()

class BaseSchema:
    #formating time and date of created_at and updated_at
    created_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
    updated_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
