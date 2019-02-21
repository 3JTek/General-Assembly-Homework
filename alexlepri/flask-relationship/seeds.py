from app import app, db
from models.user import User
from models.photo import Photo
from models.album import Album


with app.app_context():
    db.drop_all()
    db.create_all()

# ==== CREATE THE USER AND THEN SAVE IT ASSIGN PROPERTY DECALRED ON USER.PY ======
alex = User(username='alexl', email='alex@email.com')
alex.save()

ed = User(username='edl', email='ed@email.com')
ed.save()

# ======== CREATE PHOTO AND ASSIGN TO PROPERTY DECLARED ON PHOTO.PY + SAVE IT =======
lake_como = Photo(
caption='lovely lake',
filename='lakecome.jpeg',
location='como',
user=ed
)
lake_como.save()


lake_garda = Photo(caption='amazing lake',
filename='lakegarda.jpeg',
location='garda',
user=alex,
)
lake_garda.save()


# ======== CREATE ALBUM AND ASSIGN THE PROPERTY DECLARED ON ALBUM.PY AND SAVE IT ========
italian_lakes = Album(name='italian lakes trip', user=alex, photos=[lake_como, lake_garda])
italian_lakes.save()
