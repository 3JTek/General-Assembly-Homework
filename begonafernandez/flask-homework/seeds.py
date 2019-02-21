from app import app, db, Book

with app.app_context():
    db.drop_all()
    db.create_all()

    ariadne_objective = Book(title='The Ariadne Objective', author='Wes Davis', isbn='9780552170185' )
    rey_recibe = Book(title='El rey recibe', author='Eduardo Mendoza', isbn='9788432234071' )

    db.session.add(ariadne_objective)
    db.session.add(rey_recibe)

    db.session.commit()
