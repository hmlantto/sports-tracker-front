import React, { useState }            from 'react'
import { useDispatch }  from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import { login }        from '../../reducers/userSlice'

const LoginPageContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ username, setUsername ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const handleLogin = async ( event ) => {
    event.preventDefault()

    try {
      dispatch( login( username, password ) )
      setUsername( '' )
      setPassword( '' )
      navigate( '/' )

    } catch ( exception ) {
      console.log( exception.message )
    }
  }

  return(
    <section className="login">
      <LoginForm username={ username } setUsername={ setUsername } password={ password } setPassword={ setPassword } handleLogin={ handleLogin } />
      <div>
        Not yet logged in? <Link to="/auth/register">Register here!</Link>
      </div>
    </section>
  )
}

export default LoginPageContainer