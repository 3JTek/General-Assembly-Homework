import React from 'react'
import { Step, Icon } from 'semantic-ui-react'


const Steps = ({ phase }) => {
  return(
    <Step.Group widths={3}>
      <Step active={phase === 1} disabled={phase !== 1}>
        <Icon name='pencil' />
        <Step.Content>
          <Step.Title>Compose</Step.Title>
          <Step.Description>Write your message</Step.Description>
        </Step.Content>
      </Step>

      <Step active={phase === 2} disabled={phase !== 2}>
        <Icon name='world' />
        <Step.Content>
          <Step.Title>Language</Step.Title>
          <Step.Description>Choose which language you want your message translated to</Step.Description>
        </Step.Content>
      </Step>

      <Step active={phase === 3} disabled={phase !== 3}>
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
