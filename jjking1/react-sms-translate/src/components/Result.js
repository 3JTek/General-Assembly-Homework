import React from 'react'
import { Header, Icon, Dimmer, Loader, Segment } from 'semantic-ui-react'

const Result = ({ message }) => {
  if(message === '')return(
    <Segment style={{ height: '310px' }}>
        <Dimmer active>
          <Loader size='huge'>Sending</Loader>
        </Dimmer>
    </Segment>
  )
  return(
    <Segment>
      <Header as='h2' inverted icon>
        <Icon name='check' />
          {message}
          <Header.Subheader>Please refresh the page to send another message.</Header.Subheader>
      </Header>
    </Segment>
  )
}


export default Result
