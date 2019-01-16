import React from 'react'
import ReactDOM from 'react-dom'

//Import style
import 'normalize-scss'
import 'bootstrap-css-only'
import './scss/style.scss'

//Import Components
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Menus from './components/Menus'
import About from './components/About'
import Footer from './components/Footer'

//Main App component
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      header: {
        navbar: [
          {content: 'Location',link: '#location'},
          {content: 'About',link: '#about'},
          {content: 'Menu',link: '#menus'},
          {content: 'Gallery',link: '#gallery'},
          {content: 'Home',link: '#hero'}
        ]
      },
      hero: {
        text: 'Coffee Assembly'
      },
      about: {
        title: 'About',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus magna id quam euismod, quis consectetur augue malesuada. Aenean et libero elementum, consequat eros in, vehicula risus. Phasellus imperdiet pretium massa, ut tincidunt neque mollis sed',
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce nibh lectus, maximus in condimentum sit amet, imperdiet vel metus. Vivamus rhoncus massa eu nisi ultrices consequat. Cras at porttitor quam. Pellentesque feugiat elit odio, vel mattis arcu ullamcorper eget. Vestibulum vitae viverra mauris, porta pharetra nulla. Donec ipsum mauris, malesuada ac facilisis viverra, faucibus id libero. Mauris nec ipsum sit amet elit luctus pulvinar interdum a urna.',
          'Etiam a nunc nec neque gravida tincidunt. Nulla et interdum libero. Pellentesque ultricies, ex ac blandit congue, elit dolor rhoncus sem, non eleifend nisl metus ac tellus. Suspendisse tincidunt fringilla aliquam. Morbi scelerisque orci nisl, maximus pulvinar augue auctor et.'
        ]
      },
      menus: {
        title: 'Menu',
        links: [
          {content: 'Breakfast',link: 'assets/menus/menu.pdf'},
          {content: 'Brunch',link: 'assets/menus/menu.pdf'},
          {content: 'All Day',link: 'assets/menus/menu.pdf'}
        ],
        text: [
          'We start early, with a breakfast menu including juices, pastries, pancakes, all kinds of eggs and freshly-roasted coffee. At 11.30am, we switch to our all-day menu.',
          'On weekends we serve brunch until 4pm.'
        ]
      },
      gallery: {
        title: 'Gallery',
        images: [
          'image-one',
          'image-two',
          'image-three'
        ]
      },
      footer: {
        text: '© General Assembly 2017'
      }
    }
  }

  render() {
    const {header, hero, about, menus, gallery, footer} = this.state
    return (
      <div>
        {/*All functional components except Gallery just for fun
        All given data from App state*/}
        <Header {...header}/>
        <main>
          <Hero {...hero}/>
          <Gallery {...gallery}/>
          <Menus {...menus}/>
          <About {...about} />
        </main>
        <Footer {...footer}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
