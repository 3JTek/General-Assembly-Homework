from app import app, db, Thunderbird

with app.app_context():
    db.drop_all()
    db.create_all()

    thunderbird_1 = Thunderbird(name='Thunderbird 1', pilot='Scott Tracy', max_speed=15000, weapons='Machine cannon')
    thunderbird_2 = Thunderbird(name='Thunderbird 2', pilot='Virgil Tracy', max_speed=6200, weapons='Missile launcher')
    thunderbird_3 = Thunderbird(name='Thunderbird 3', pilot='Alan Tracy', max_speed=25200)
    thunderbird_4 = Thunderbird(name='Thunderbird 4', pilot='Gordon Tracy', max_speed=180, weapons='Missile launcher')
    thunderbird_5 = Thunderbird(name='Thunderbird 5', pilot='John Tracy', weapons='6 electromagnetic cloaking baffles, Plasma cored meteor deflector')

    db.session.add(thunderbird_1)
    db.session.add(thunderbird_2)
    db.session.add(thunderbird_3)
    db.session.add(thunderbird_4)
    db.session.add(thunderbird_5)

    db.session.commit()
