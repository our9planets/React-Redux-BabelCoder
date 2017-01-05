import { connect } from 'react-redux'
import { ShowPage } from '../../components'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/page'

const mapStateToProps = (state, ownProps) => ({
    page: state.page
})

const mapDispatchToProps = (dispatch) => ({
    loadPage: (id) => dispatch(loadPage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)