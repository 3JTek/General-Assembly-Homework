from app import app, db, Pizza

with app.app_context():
    db.drop_all()
    db.create_all()


# ============ CREATING PIZZAS ==============

    margherita = Pizza(name='Margherita', toppings='tomato sauce, mozzarella, oregano, basil', dough='Thin Crust', price='8')
    super = Pizza(name='Bufala', toppings='tomato sauce, Bufala mozzarella, oregano, basil', dough='Thin Crust', price='11')
    wild = Pizza(name='Country', toppings='Tomato Sauce, Mozzarella, Mushroom, Pancetta, Egg, Sausage', price='12')
    slurp = Pizza(name='Pear and Gorgonzola', toppings='Tomato Sauce, Pear, Gorgonzola, Chilly, Oregano', price='11')
    cool = Pizza(name='Fiorentina', toppings='Tomato Sauce, Mozzarella, Spinach, Eggs, Parmesan', price='13')
    alex = Pizza(name='Alex', toppings='Tomato Sauce, Mozzarella, Sausage, Onion', price='12')
    cheese = Pizza(name='Four Cheeses', toppings='Tomato Sauce, Mozzarella, Gorgonzola, Parmesan, Gouda', price='13')


        # ADD THE DONUTS TO THE DATABASE SESSION

    db.session.add(jam_donut)
    db.session.add(ring_donut)


    # SAVE THE DATA

    db.session.commit()
