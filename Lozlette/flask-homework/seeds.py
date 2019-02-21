from app import app, db, Cake

with app.app_context():
    db.drop_all()
    db.create_all()

    victoria_sandwich = Cake(name='Victoria Sandwich', type='sponge', filling='jam and buttercream')
    chocolate_cake = Cake(name='Chocolate Cake', type='sponge', icing='chocolate', filling='chocolate buttercream')
    carrot_cake = Cake(name='Carrot Cake', type='sponge', icing='cream cheese icing', filling='cream cheese icing')
    fruit_cake = Cake(name='Fruit Cake', type='bread/cake', extra_ingredients='fruit peel, glacier cherries, raisins, sultanas')

    db.session.add(victoria_sandwich)
    db.session.add(chocolate_cake)
    db.session.add(carrot_cake)
    db.session.add(fruit_cake)

    db.session.commit()
