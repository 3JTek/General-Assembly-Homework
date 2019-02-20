from app import app, db, Pizza

with app.app_context():
    db.drop_all()
    db.create_all()


# ============ CREATING PIZZAS ==============

    margherita = Pizza(name='Margherita', toppings='tomato sauce, mozzarella, oregano, basil', dough='Thin Crust', price=8)

    super = Pizza(name='Bufala', toppings='tomato sauce, Bufala mozzarella, oregano, basil', dough='Thin Crust', price=11)

    wild = Pizza(name='Country', toppings='Tomato Sauce, Mozzarella, Mushroom, Pancetta, Egg, Sausage', dough='Thin Crust', price=12)

    slurp = Pizza(name='Pear and Gorgonzola', toppings='Tomato Sauce, Pear, Gorgonzola, Chilly, Oregano', dough='Thin Crust', price=11)

    cool = Pizza(name='Fiorentina', toppings='Tomato Sauce, Mozzarella, Spinach, Eggs, Parmesan', dough='Thin Crust', price=13)

    alex = Pizza(name='Alex', toppings='Tomato Sauce, Mozzarella, Sausage, Onion', dough='Thin Crust', price=12)

    cheese = Pizza(name='Four Cheeses', toppings='Tomato Sauce, Mozzarella, Gorgonzola, Parmesan, Gouda', dough='Thin Crust', price=13)


        # ADD THE DONUTS TO THE DATABASE SESSION

    db.session.add(margherita)
    db.session.add(super)
    db.session.add(wild)
    db.session.add(slurp)
    db.session.add(cool)
    db.session.add(alex)
    db.session.add(cheese)


    # SAVE THE DATA

    db.session.commit()
