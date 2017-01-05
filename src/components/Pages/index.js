import React, {PropTypes, Component } from 'react'
import { Link } from 'react-router'
import Page from './Page'

  
class Pages extends Component {   
    _onReloadPages = () => {
        this.props.loadPages()
    }
    componentDidMount() {
        this.props.loadPages()
    }
    render() {
        return (
            <div>
                <button className='button' onClick={() => this._onReloadPages()}>Reload Pages</button>
                <Link to={{ pathname: '/pages/new' }}>Create New Page</Link>
                <hr />            
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.pages.map((page) => (
                        <Page key={page.id} id={page.id} title={page.title} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}


Pages.propTypes = {
    pages: PropTypes.array.isRequired,
    loadPages: PropTypes.func.isRequired
}

Pages.defaultProps = {
  pages: [],
}

export default Pages