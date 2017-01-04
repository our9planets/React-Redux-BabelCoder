
import { connect } from 'react-redux'
import { Pages } from '../../components'
import { loadPages } from '../../actions/pages'

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  loadPages: () => dispatch(loadPages())

})
export default connect(mapStateToProps, mapDispatchToProps)(Pages)

