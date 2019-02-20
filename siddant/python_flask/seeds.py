from app import app, db, Team

with app.app_context():
    db.drop_all()
    db.create_all()

    man_utd = Donut(name='manchester united', location='manchester', established='1878',league=1)
    man_city = Donut(name='manchester vity', location='manchester', established='1880', league=1)

    db.session.add(man_utd)
    db.session.add(man_city)

    db.session.commit()
