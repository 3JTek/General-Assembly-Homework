import React from 'react'
import { Step, Icon } from 'semantic-ui-react'


const Steps = () => {
  return(
    <Step.Group widths={3}>
      <Step active>
        <Icon name='pencil' />
        <Step.Content>
          <Step.Title>Compose</Step.Title>
          <Step.Description>Write your message</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name='world' />
        <Step.Content>
          <Step.Title>Language</Step.Title>
          <Step.Description>Choose which language you want your message translated to</Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name='envelope' />
        <Step.Content>
          <Step.Title>Send</Step.Title>
          <Step.Description>Choose recipient and send your message</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}

export default Steps
