import { useDispatch, useSelector }  from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { logout }        from '../reducers/userSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector( state => state.user )

  const handleLogout = async ( event ) => {
    event.preventDefault()

    try {
      dispatch( logout() )
      navigate( '/' )
    } catch ( exception ) {
      console.log( exception.message )
    }
  }

  if ( user.data === null ) {
    return (
      <></>
    )
  }

  return(
    <>
      <span className="user-info" style={ { verticalAlign: 'bottom' } }>
        Logged in as { user.data.username }
        <Button variant="outline-primary" size="sm" className="small-button" type="button" onClick={ handleLogout }>Log out</Button>
      </span>
    </>
  )
}

export default Logout