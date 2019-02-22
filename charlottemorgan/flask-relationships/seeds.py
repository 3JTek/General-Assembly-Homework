from app import app, db
from models.user import User
from models.gif import Gif
from models.creator import Creator


with app.app_context():
    db.drop_all()
    db.create_all()

    the_creator = Creator(creatorname='gif👻god', email='gif@god.com')
    the_creator.save()

    jjbenson85 = User(username='jjbenson85', email='jjbenson85@gmail.com')
    jjbenson85.save()
    i_heart_puppies = User(username='ILOVEPUPPIES', email='puppylove@gmail.com')
    i_heart_puppies.save()
    james_likes_cats = User(username='catz4lyf', email='catz@catz.com')
    james_likes_cats.save()
    queen_theo = User(username='queen_theo', email='theoisqueen@royal.com')
    queen_theo.save()

    cute_ears = Gif(url='https://gph.is/2CyJ0gO',
    description='cute dog', user_faves=[queen_theo, jjbenson85])
    cute_ears.save()
    cat_james = Gif(url='http://gph.is/2ERMojG',
    description='james in cat form',
    user_faves=[james_likes_cats])
    cat_james.save()
    baby_puppy = Gif(url='https://gph.is/2pGulHk',
    description='cutest puppy ever',
    user_faves=[i_heart_puppies],
    created_by=the_creator)
    baby_puppy.save()
    the_office = Gif(url='http://gph.is/Z0AvM5', description='michael scott')
    the_office.save()
