from app import app, db
from models.corporation import Corporation
from models.service import Service
from models.user import User, UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    #Here we use the schema to handle the password & password_confirmation
    # which does not exist as is in the db.
    jerem, errors = user_schema.load({
    'username': 'jerem',
    'email': 'jerem@gmail.com',
    'password': 'wdiwdiwdi',
    'password_confirmation': 'wdiwdiwdi'
    })

    if errors:
        raise Exception(errors)

    charly = User(username="charly", email="charly@gmail.com")
    linda = User(username="linda", email="linda@gmail.com")

    db.session.add(jerem)
    db.session.add(charly)
    db.session.add(linda)

    google = Corporation(name='Google', revenue=120000, headquarters='California')
    apple = Corporation(name='Apple', revenue=265595, headquarters='California')
    facebook = Corporation(name='Facebook', revenue=55838, headquarters='California')
    amazon = Corporation(name='Amazon', revenue=232887, headquarters='Seattle')

    db.session.add(google)
    db.session.add(apple)
    db.session.add(facebook)
    db.session.add(amazon)

    db.session.commit()

    whatsapp = Service(name='WhatsApp', type='messenging system',
    corporation=facebook, users=[jerem, charly], likes=[jerem])
    instagram = Service(name='Instaram', type='social network',
    corporation=facebook, users=[linda])
    aws = Service(name='Amazon Web Services', type='hosting provider', corporation=amazon, users=[charly, linda, jerem])
    icloud = Service(name='iCloud', type='on the cloud data storage', corporation=apple, users=[charly])

    db.session.add(whatsapp)
    db.session.add(instagram)
    db.session.add(aws)
    db.session.add(icloud)

    db.session.commit()

    print('SEEDED')
