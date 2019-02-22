from datetime import datetime
from app import db
from marshmallow import fields

#BaseModel used to create common feilds within records, i.e. id, created_at etc.
class BaseModel:

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #functions added to class for saving and removing records
    def save(self):
        self.updated_at = datetime.utcnow()
        db.session.add(self)
        db.session.commit()

    def remove(self):
        db.session.delete(self)
        db.session.commit()

#controls format for created_at and updated_at fields
class BaseSchema:

    created_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
    updated_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
