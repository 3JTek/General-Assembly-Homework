from app import app, db, Astronaut

with app.app_context():
    db.drop_all()
    db.create_all()

    #create the data
    neil_armstrong = Astronaut(name='Neil Armstrong', rank='Commander', agency='NASA', first_mission='Gemini 8')
    yuri_gagarin = Astronaut(name='Yuri Alekseyevich Gagarin', rank='Colonel', agency='Soviet space program', first_mission='Vostok 1')

    #stage the data
    db.session.add(neil_armstrong)
    db.session.add(yuri_gagarin)

    #save the database
    db.session.commit()
