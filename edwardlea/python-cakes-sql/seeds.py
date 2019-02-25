from app import app, db, Cake

with app.app_context():
    db.drop_all()
    db.create_all()

    chocolate_cake = Cake(name='Chocihorror', flavour='Chocolate', slices=12, type='Birthday')
    carrot_cake = Cake(name='Carrot Cake', flavour='Carrot', slices=6, type='Afternoon Tea')
    victoria_cake = Cake(name='Queen Vic', flavour='Vanilla', slices=12, type='Afternoon Tea')

    db.session.add(chocolate_cake)
    db.session.add(carrot_cake)
    db.session.add(victoria_cake)

    db.session.commit()
