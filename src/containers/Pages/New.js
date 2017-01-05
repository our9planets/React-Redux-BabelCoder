import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createPage } from '../../actions/page'
import { PageForm } from '../../components'


const mapDispatchToProps = (dispatch) => ({
    createPage: (values) => dispatch(createPage(values))
})

export default connect(null, mapDispatchToProps)(PageForm)


