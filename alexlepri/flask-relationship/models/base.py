from datetime import datetime
from app import db
from marshmallow import fields


class BaseModel:

    # ======== ADD TIME AND DATE TO THE FILE ========
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)


    # ====== SAVE ALL FILES WITH DATE AND TIME + COMMIT CHANGING =========
    def save(self):
        self.updated_at = datetime.utcnow()
        db.session.add(self)
        db.session.commit()


    # ======= REMOVE THE FILE AND COMMIT CHANGING =========
    def remove(self):
        db.session.delete(self)
        db.session.commit()


class BaseSchema:
    # ========== GIVE STYLE TO DATE AND TIME =========
    created_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
    updated_at = fields.DateTime(format='%Y-%m-%d %H:%M:%S')
