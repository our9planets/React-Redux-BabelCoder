import React, { Component } from 'react'
import Header from './App/Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App