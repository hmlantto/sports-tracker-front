import axios from 'axios'
const baseUrl = '/api/users'

const register = async ( data ) => {
  const response = await axios.post( baseUrl, data )
  return response.data
}

const userService = { register }

export default userService