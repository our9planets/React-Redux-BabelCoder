import { RECEIVE_PAGES } from '../actions/types'

const initialState = []
const pagesReducer = (state = initialState, action) => {
  switch (action.type){
    case RECEIVE_PAGES: {
      return state + 1
    }
    default: {
      return state
    }
  }
}

export default pagesReducer
