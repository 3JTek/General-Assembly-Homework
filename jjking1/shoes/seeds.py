from app import app, db, Shoe


with app.app_context():
    db.drop_all()
    db.create_all()



    iron_rangers = Shoe(brand='Red Wings', type='boot', price=320.00, color='brown')
    all_stars = Shoe(brand='Converse', type='trainer', price=70.00, color='black')
    air_max = Shoe(brand='Nike', type='trainer', price=130.99, color='white')
    black_smart_monk_strap = Shoe(brand='Hugo Boss', type='formal', price=219.00, color='black')


    db.session.add(iron_rangers)
    db.session.add(all_stars)
    db.session.add(air_max)
    db.session.add(black_smart_monk_strap)



    db.session.commit()
