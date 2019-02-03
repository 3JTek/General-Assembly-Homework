import React from 'react'
import { Form, TextArea, Button, Container, Dropdown, Divider } from 'semantic-ui-react'

const Composer = ({ handleChange, handleSubmit, phase, postData, handleDropDown, languageOptions }) => {
  return(
    <Form onSubmit={handleSubmit}>
      {phase === 1 &&
        <div>
          <TextArea
            onChange={handleChange}
            value={postData.message}
            name='message'
            placeholder='Write your text message here...'
          />
          <Divider hidden/>
          <Button color='blue'>
              Next
          </Button>
        </div>
      }


      {phase === 2 &&
        <Container>
          <Dropdown fluid search selection
            placeholder='Select Language'
            name='lang'
            value={postData.lang}
            onChange={handleDropDown}
            options={languageOptions} />
          <Divider hidden/>
          <Button color='blue'>
              Next
          </Button>
        </Container>
      }



    </Form>
  )
}


export default Composer
