import React, { useState }            from 'react'
import { useDispatch }  from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const RegisterPageContainer = () => {
  return(
    <section className="register">
      <RegisterForm />
      <div>
        Already registered? <Link to="/auth/login">Log in here!</Link>
      </div>
    </section>
  )
}

export default RegisterPageContainer