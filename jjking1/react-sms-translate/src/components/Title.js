import React from 'react'
import { Header, Icon } from 'semantic-ui-react'


const Title = () => {
  return(
    <Header as='h2' inverted icon>
      <Icon name='envelope' />
        SMS-Translator
      <Header.Subheader>Send a text message in a language of your choosing!</Header.Subheader>
    </Header>
  )
}


export default Title
