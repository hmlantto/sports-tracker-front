import axios from 'axios'
import store from '../store';
const baseUrl = '/api/workouts'

const addWorkout = async ( data ) => {
  const state = store.getState()
  
  const config = {
    headers: { Authorization: `bearer ${ state.user.data.token }` }
  }

  const response = await axios.post( baseUrl, data, config )
  return response.data
}

const getWorkouts = async () => {
  const state = store.getState()
  
  const config = {
    headers: { Authorization: `bearer ${ state.user.data.token }` }
  }

  const response = await axios.get( baseUrl, config )
  return response.data
}

const getWorkoutTypes = async () => {
  const url = `${ baseUrl }/types`
  
  const response = await axios.get( url )
  return response.data
}

const workoutService = { addWorkout, getWorkouts, getWorkoutTypes }

export default workoutService