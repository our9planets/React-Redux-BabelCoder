import { LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS } from '../actions/types'

const initialState = []

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PAGE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

// เวลาเข้าหน้า Show เราจะเอาวิกิเพจไหนมาแสดงให้ค้นหาด้วย ID
export const getPageById = (state, id) => (
    state.page.find((page) => page.id === +id) || { title: '', content: '' }
)

export default pageReducer