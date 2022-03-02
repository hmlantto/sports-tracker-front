import { createSlice } from '@reduxjs/toolkit'
import authService from '../services/authService'

const initialState = {
  data: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin( state, action ) {
      state.data = action.payload
    },
    removeLogin ( state ) {
      state.data = null
    }
  }
})

export const { setLogin, removeLogin } = userSlice.actions

export const login = ( username, password ) => {
  return async ( dispatch ) => {
    const credentials = { username, password }
    const user = await authService.login( credentials )
    window.localStorage.setItem( 'SportsTrackerUser', JSON.stringify( user ) )
    dispatch( setLogin( user ) )
  }
}

export const logout = () => {
  return async ( dispatch, getState ) => {
    const state = getState()
    const token = state.user.data.token
    await authService.logout( token )
    window.localStorage.removeItem( 'SportsTrackerUser' )
    dispatch( removeLogin() )
  }
}

export default userSlice.reducer