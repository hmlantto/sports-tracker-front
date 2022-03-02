import React            from 'react'
import { Button, Form } from 'react-bootstrap'

const LoginForm = ( { username, setUsername, password, setPassword, handleLogin } ) => {

  return(
    <div>
      <h2>Log in to application</h2>

      <Form style={ { maxWidth: '30rem' } } onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">login</Button>
      </Form>
    </div>
  )
}

export default LoginForm