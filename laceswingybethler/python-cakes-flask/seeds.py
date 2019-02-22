from app import app, db, Cake

# from models.cake import Cake

with app.app_context():
    db.drop_all()
    db.create_all()

    chocolate = Cake(name='Choccy Horror', flavour='Red Velvet Chocolate', slices=12, type='Celebration')
    carrot = Cake(name='Camberwell Carotcake', flavour='Carrot', slices=6, type='Afternoon tea')
    victoria = Cake(name='Queen Vic', flavour='Vanilla', slices=10, type='Afternoon tea')

    db.session.add(chocolate)
    db.session.add(carrot)
    db.session.add(victoria)

    db.session.commit()
