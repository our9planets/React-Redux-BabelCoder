import { RECEIVE_PAGES } from './types'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import fetch from 'isomorphic-fetch'

const receivePages = (pages) => ({
    type: RECEIVE_PAGES,
    payload: pages
})

const loadPages = (pages) => (
    fetch(PAGES_ENDPOINT)
    .then((response) => response.json())
    .then((pages) => receivePages(pages))
)

export {
    loadPages
}