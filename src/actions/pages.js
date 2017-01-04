import { LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE } from './types'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import fetch from 'isomorphic-fetch'

const loadPages = () => {
    return (dispatch) => {
        dispatch({
            type: LOAD_PAGES_REQUEST
        })
        fetch(PAGES_ENDPOINT)
        .then((response) => response.json())
        .then(
            (pages) => dispatch({
                type: LOAD_PAGES_SUCCESS,
                payload: pages
            }),
            (error) => dispatch({
                type: LOAD_PAGES_FAILURE
            })
        )
    }
}

export {
    loadPages
}