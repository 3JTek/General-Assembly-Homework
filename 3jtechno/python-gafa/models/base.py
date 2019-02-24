from app import db, ma
from marshmallow import fields
from datetime import datetime

class Base:

    id = db.Column(db.Integer, primary_key=True)

    def save(self):
        self.updated_at = datetime.utcnow()

        db.session.add(self)
        db.session.commit()
