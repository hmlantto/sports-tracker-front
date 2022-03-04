import React, { useState }            from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import userService from '../../services/userService'

const RegisterPageContainer = () => {
  const navigate = useNavigate()

  const [ username, setUsername ] = useState( '' )
  const [ name, setName ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const handleRegistration = async ( event ) => {
    event.preventDefault()
    const newUser = { username, name, password }

    try {
      await userService.register( newUser )
      setUsername( '' )
      setName( '' )
      setPassword( '' )
      navigate( '/auth/login' )

    } catch ( exception ) {
      console.log( exception.message )
    }
  }

  return(
    <section className="register">
      <RegisterForm username={ username } setUsername={ setUsername } name={ name } setName={ setName } password={ password } setPassword={ setPassword } handleRegistration={ handleRegistration } />
      <div>
        Already registered? <Link to="/auth/login">Log in here!</Link>
      </div>
    </section>
  )
}

export default RegisterPageContainer

// import React, { useState }            from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import RegisterForm from './RegisterForm'
// // import userService from '../../services/userService'

// const RegisterPageContainer = () => {
//   // const navigate = useNavigate()

//   const [ username, setUsername ] = useState( '' )
//   // const [ name, setName ] = useState( '' )
//   const [ password, setPassword ] = useState( '' )

//   const handleRegistration = async ( event ) => {
//     console.log("HERE1")
//     event.preventDefault()
//     // console.log("HERE2")
//     // const newUser = { username, name, password }
//     // console.log("HERE3")

//     try {
//       // await userService.register( newUser )
//       console.log("HERE4")
//       // setUsername( '' )
//       // setName( '' )
//       // setPassword( '' )
//       // navigate( '/auth/login' )

//     } catch ( exception ) {
//       console.log("HERE5")
//       console.log( exception.message )
//     }
//   }

//   return(
//     <section className="register">
//       <RegisterForm username={ username }
//                     setUsername={ setUsername }
//                     password={ password }
//                     setPassword={ setPassword }
//                     handleLogin={ handleRegistration } />
//       <div>
//         Already registered? <Link to="/auth/login">Log in here!</Link>
//       </div>
//     </section>
//   )
// }

// export default RegisterPageContainer