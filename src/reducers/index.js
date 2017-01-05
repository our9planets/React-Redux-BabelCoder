import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pagesReducer from './pages'
import pageReducer from './page'

const rootReducer = combineReducers({
    form: formReducer,
    pages:pagesReducer,
    page:pageReducer,
})

export default rootReducer
