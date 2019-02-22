from app import app, db
from models.user import User
from models.cocktail import Cocktail
from models.ingredient import Ingredient

with app.app_context():
    db.drop_all()
    db.create_all()

    little_billy = User(username='Lil Bill', email='billy@littlepeople.com')
    little_billy.save()

    mojito = Cocktail(name='Mojito', origin='Havana, Cuba', base_alcohol='Rum', user=little_billy)
    mojito.save()
    old_fashioned = Cocktail(name='Old Fashioned', origin='New York City, USA', base_alcohol='Whisky', user=little_billy)
    old_fashioned.save()
    margarita = Cocktail(name='Margarita', origin='Mexico', base_alcohol='Tequila', user=little_billy)
    margarita.save()

    mint = Ingredient(name='Mint', cocktails=[mojito])
    mint.save()
    lime_juice = Ingredient(name='Lime Juice', cocktails=[margarita])
    lime_juice.save()
    sugar_syrup = Ingredient(name='Sugar Syrup', cocktails=[old_fashioned, mojito])
    sugar_syrup.save()
