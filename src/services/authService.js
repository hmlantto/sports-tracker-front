import axios from 'axios'
const baseUrl = '/api/auth'

const login = async ( credentials ) => {
  const url = `${baseUrl}/login`
  const response = await axios.post( url, credentials )
  return response.data
}

const logout = async ( token ) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` }
  }

  const url = `${baseUrl}/logout`
  const response = await axios.delete( url, config )
  return response.data
}

const authService = { login, logout }

export default authService