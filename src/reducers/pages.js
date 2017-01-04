import { RECEIVE_PAGES } from '../actions/types'

const initialState = []
const pagesReducer = (state = initialState, action) => {
  switch (action.type){
    case RECEIVE_PAGES: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default pagesReducer
