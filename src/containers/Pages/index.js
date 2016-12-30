import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { Pages } from '../../components'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { loadPages } from '../../actions/page'

// export default class PagesContainer extends Component {
//     state = {
//         pages: []
//     }
//     onReloadPages = () => {
//         fetch(PAGES_ENDPOINT)
//         .then((response) => response.json())
//         .then((pages) => this.setState({ pages }))
//     }

//     componentDidMount() {
//         this.onReloadPages()
//     }
//     render() {
//         return <Pages pages={this.state.pages} onReloadPages={this.onReloadPages} />
//     }
// }

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  loadPages: () => dispatch(loadPages())

})
export default connect(mapStateToProps)(Pages)

