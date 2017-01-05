import React, { PropTypes, Component } from 'react'

class ShowPage extends Component {
    componentDidMount() {
        const { loadPage, params: { id } } = this.props
        loadPage(id)
    }

    render() {
        const { title, content } = this.props.page
        return (
            <article>
              <h1>{title}</h1>
              <p>{content}</p>
            </article>
        )
    }
}

ShowPage.defaultProps = {
    page:{}
}

export default ShowPage