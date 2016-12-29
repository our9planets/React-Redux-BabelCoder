import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
class Page extends Component {
    render() {
        return (
            <tr>
            <th>{this.props.id}</th>
            <td>{this.props.title}</td>
            <td>
                <Link to={`/pages/${this.props.id}`}>Show</Link>
            </td>
            </tr>
        )
    }

}

Page.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Page