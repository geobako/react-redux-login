import axios from 'axios'
import {setAuthToken} from '../components/UserFunctions'
import jwt_decode from 'jwt-decode'

import {GET_ERRORS, SET_CURRENT_USER} from '../constants/action-types'

//register user action
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/register', userData)
        .then(res => {
            history.push('/login')
        })
        .catch(err => 
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
        )
}

//login user action
export const loginUser = (userData, history) => dispatch => {
  axios.post('/api/login', userData)
    .then(res => {
        const token = res.data.token
        console.log(token)
        localStorage.setItem('userToken', token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        console.log(decoded)
        dispatch(setCurrentUser(decoded))
        history.push('/profile')
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
