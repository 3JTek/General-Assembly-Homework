from app import app,db, Gelato

with app.app_context():
    db.drop_all()
    db.create_all()

    #gelatos
    magnum_classic = Gelato(name='magnum classic',flake=True,flavours='chocolate and velvety', price=0.80)
    magnum_almond = Gelato(name= 'magnum almond', flavours='chocolate and almonds', price=1.00)
    magnum_white = Gelato(name= 'magnum white', cone=True, flavours='white chocolate', price=1.20)


    db.session.add(magnum_classic)
    db.session.add(magnum_almond)
    db.session.add(magnum_white)

    db.session.commit()
