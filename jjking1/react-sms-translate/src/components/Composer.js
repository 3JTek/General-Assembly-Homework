import React from 'react'
import { Form, TextArea, Button, Container, Dropdown, Divider, Icon } from 'semantic-ui-react'

const Composer = ({ handleChange, handleSubmit, phase, postData, handleDropDown, languageOptions }) => {
  // ideally i would put this in app state and pass it down but since i only have one number on my account ill leave it like this
  // i would also configure handledropdown function to work with phase 3 dropdown but can't be bothered , no more time either
  const friendOptions = [{
    text: 'Josh(+447502434799)',
    value: '+447502434799',
    image: {avatar:true, src: '../assets/Joshua-3.jpg'}
  }]

  return(
    <Form onSubmit={handleSubmit}>
      {phase === 1 &&
        <div>
          <Button inverted style={{ width: '250px' }} animated color='blue'>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>

          <Divider hidden/>
          <TextArea
            onChange={handleChange}
            value={postData.message}
            name='message'
            placeholder='Write your text message here...'
          />
        </div>
      }


      {phase === 2 &&
        <Container>
          <Button style={{ width: '250px' }} inverted animated color='blue'>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>

          <Divider hidden/>
          <Dropdown fluid search selection
            placeholder='Select Language'
            name='lang'
            value={postData.lang}
            onChange={handleDropDown}
            options={languageOptions} />
        </Container>
      }

      {phase === 3 &&
        <Container>
          <Button style={{ width: '250px' }} inverted color='blue'>
            <Button.Content visible>Send</Button.Content>
          </Button>

          <Divider hidden />

          <Dropdown
            placeholder='Select Recipient'
            fluid
            selection
            options={friendOptions} />
        </Container>
      }



    </Form>
  )
}


export default Composer
