import axios from 'axios'
import store from '../store';
const baseUrl = '/api/categories'

const addCategory = async ( data ) => {
  const state = store.getState()
  
  const config = {
    headers: { Authorization: `bearer ${ state.user.data.token }` }
  }

  const response = await axios.post( baseUrl, data, config )
  return response.data
}

const getCategories = async () => {
  const state = store.getState()
  
  const config = {
    headers: { Authorization: `bearer ${ state.user.data.token }` }
  }

  const response = await axios.get( baseUrl, config )
  return response.data
}

const authService = { addCategory, getCategories }

export default authService