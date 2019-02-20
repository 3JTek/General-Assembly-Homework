from app import app, db, Pizza

with app.app_context():
    db.drop_all()
    db.create_all()


# ============ CREATING PIZZAS ==============

    margherita = Pizza(name='Margherita', toppings='Tomato Sauce, Mozzarella, Oregano, Basil', dough='Thin Crust', price=8)

    super = Pizza(name='Bufala', toppings='Tomato Sauce, Bufala Mozzarella, Oregano, Basil', dough='Neapolitan Crust', price=11)

    wild = Pizza(name='Country', toppings='Tomato Sauce, Mozzarella, Mushroom, Pancetta, Egg, Sausage', dough='Flatbread', price=12)

    slurp = Pizza(name='Pear and Gorgonzola', toppings='Tomato Sauce, Pear, Gorgonzola, Chilly, Oregano', dough='Thin Crust', price=11)

    cool = Pizza(name='Fiorentina', toppings='Tomato Sauce, Mozzarella, Spinach, Eggs, Parmesan', dough='Thin Crust', price=13)

    alex = Pizza(name='Alex', toppings='Tomato Sauce, Mozzarella, Sausage, Onion', dough='Flatbread', price=12)

    cheese = Pizza(name='Four Cheeses', toppings='Tomato Sauce, Mozzarella, Gorgonzola, Parmesan, Gouda', dough='Neapolitan Crust', price=13)

    napoli = Pizza(name='Napoli', toppings='Tomato Sauce, Mozzarella, Anchovies, Capers, Oregano', dough='Neapolitan Crust', price=10)

    rich = Pizza(name='Deluxe', toppings='Tomato Sauce,Mascarpone Cheese, Prawns, Rocket, Chilli, Onion', dough='Flatbread', price=15)

    potato = Pizza(name='Potato Pizza', toppings='Mozzarella, Pancetta, Potato, Onion, Rosemary', dough='Thin Crust', price=9)

    


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
