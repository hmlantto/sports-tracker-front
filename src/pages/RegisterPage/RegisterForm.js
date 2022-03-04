import React            from 'react'
import { Button, Form } from 'react-bootstrap'

const RegisterForm = ( { username, setUsername, name, setName, password, setPassword, handleRegistration } ) => {

  return(
    <div>
      <h2>Register account</h2>

      <Form style={ { maxWidth: '30rem' } } onSubmit={ handleRegistration }>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={ username }
            onChange={ ( { target } ) => setUsername( target.value ) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={ name }
            onChange={ ( { target } ) => setName( target.value ) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={ password }
            onChange={ ( { target } ) => setPassword( target.value ) }
          />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </div>
  )
}

export default RegisterForm