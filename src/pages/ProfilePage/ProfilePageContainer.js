import { useSelector } from 'react-redux'

const ProfilePageContainer = () => {
  const user = useSelector( ( state ) => state.user.data )

  if ( !user ) {
    return (
      <div>
        Not found.
      </div>
    )
  }

  return (
    <div>
      { user.username }<br />
      { user.name }<br />
    </div>

  )
}

export default ProfilePageContainer