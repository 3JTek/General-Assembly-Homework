from app import app, db
from models.creator import Creator
from models.user import User
from models.gif import Gif

with app.app_context():
    db.drop_all()
    db.create_all()

    the_creator = Creator(creatorname='Kr8r', email='jjbenson85@gmail.com',)

    jjbenson85 = User(username='jjbenson85', email='jjbenson85@gmail.com', )
    jjbenson85.save()

    i_love_puppies = User(username='i♥️PuPpIeS🐶', email='charlottttte@ga.co')
    i_love_puppies.save()

    mr_poopy_pants = User(username='Mr.PooooooopyPants💩', email='jamesr101@me.com')
    mr_poopy_pants.save()

    theodorable = User(username='♥️theodorable♥️', email='theo@me.com')
    theodorable.save()

    wiggle_wiggle = Gif(url='https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
            description='Cute dog wiggling ears',
            users_who_fav=[jjbenson85, i_love_puppies],
            created_by=the_creator)
    wiggle_wiggle.save()

    cat_james = Gif(url='https://media.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif',
        description='Cat in glasses reading a book in Russian',
        users_who_fav=[mr_poopy_pants, i_love_puppies],
        created_by=the_creator)
    cat_james.save()

    basketful_of_puppies = Gif(url='https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif',
        description='Puppies in a basket',
        users_who_fav=[theodorable, i_love_puppies],
        created_by=the_creator)
    basketful_of_puppies.save()

    face_smoosh_cat = Gif(url='https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif',
        description='Cat getting it\'s face smooshed',
        users_who_fav=[theodorable, jjbenson85],
        created_by=the_creator)
    face_smoosh_cat.save()
