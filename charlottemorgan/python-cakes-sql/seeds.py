from app import app, db, Cake

with app.app_context():
    db.drop_all()
    db.create_all()

    choc_cake = Cake(name='Choccy Horror', flavour='chocolate', slices='12', type='birthday cake')
    carrot_cake = Cake(name='Bugs Bunny', flavour='carrot', slices='6', type='afternoon tea')
    victoria_cake = Cake(name='Queen Vic', flavour='vanilla', slices='12', type='afternoon tea')

    db.session.add(choc_cake)
    db.session.add(carrot_cake)
    db.session.add(victoria_cake)

    db.session.commit()
