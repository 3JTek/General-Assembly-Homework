from app import app, db, Pizza

with app.app_context():
    db.drop_all()
    db.create_all()

    margherita = Pizza(name='Margherita', toppings='None', vegetarian=True, price=5.00)
    napolitana = Pizza(name='Napolitana', toppings='Anchovies, olives, capers', vegetarian=True, price=6.00)

    db.session.add(margherita)
    db.session.add(napolitana)

    db.session.commit()
