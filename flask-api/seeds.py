from app import app, db, Musical

with app.app_context():
    db.drop_all()
    db.create_all()

    hamilton = Musical(name='Hamilton', origin='Broadway', produced_by='Lin Manuel Miranda', music_and_lyrics='Lin Manuel Miranda', currently_playing=True)
    waitress = Musical(name='Waitress', origin='Broadway', produced_by='Barry and Fran Weissler', music_and_lyrics='Sara Bareilles', currently_playing=True)
    mormon = Musical(name='Book of Mormon', origin='Broadway', produced_by='Trey Parker, Matt Stone and Robert Lopez', music_and_lyrics='Trey Parker, Matt Stone and Robert Lopez', currently_playing=True)
    lesmis = Musical(name='Les Misérables', origin='West End', produced_by='Cameron Mackintosh', music_and_lyrics='Claude-Michel Schönberg and Herbert Kretzmer', currently_playing=True)
    oliver = Musical(name='Oliver!', origin='West End', produced_by='David Merrick', music_and_lyrics='Lionel Bart', currently_playing=False)
    wicked = Musical(name='Wicked', origin='Broadway', produced_by='Marc Platt', music_and_lyrics='Stephen Schwartz', currently_playing=True)
    phantom = Musical(name='The Phantom of the Opera', origin='West End', produced_by='Cameron Mackintosh', music_and_lyrics='Andrew Lloyd Webber and Charles Hart', currently_playing=True)
    once = Musical(name='Once', origin='Broadway', produced_by='Robert Cole', music_and_lyrics='Glen Hansard and Markéta Irglová', currently_playing=False)
    saigon = Musical(name='Miss Saigon', origin='West End', produced_by='Cameron Mackintosh', music_and_lyrics='Claude-Michel Schönberg and Alain Boublil ', currently_playing=False)

    db.session.add(hamilton)
    db.session.add(waitress)
    db.session.add(mormon)
    db.session.add(lesmis)
    db.session.add(oliver)
    db.session.add(wicked)
    db.session.add(phantom)
    db.session.add(once)
    db.session.add(saigon)

    db.session.commit()
