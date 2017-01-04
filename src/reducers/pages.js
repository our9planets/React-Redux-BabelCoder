import { LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS } from '../actions/types'

const initialState = []
const pagesReducer = (state = initialState, action) => {
  switch (action.type){    
    case LOAD_PAGES_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default pagesReducer
