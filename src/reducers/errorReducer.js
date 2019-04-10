import {GET_ERRORS} from '../constants/action-types'

const initialState = {};


export default function(state=initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return Object.assign({},state,action.payload)
        default:
            return state
    }
}