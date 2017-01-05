import { LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE } from './types'
import { CALL_API } from 'redux-api-middleware'
import { PAGES_ENDPOINT } from '../constants/endpoints'

const loadPages = () => ({
    [CALL_API]: {
        endpoint: PAGES_ENDPOINT,
        method: 'GET',
        types: [LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE]
    }
})

export {
    loadPages
}