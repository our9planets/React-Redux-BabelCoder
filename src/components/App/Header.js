import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                 <Link
                    to='/'
                    className="brand">
                    Babel Coder Wiki!
                </Link>
                <ul className="menu">
                    <li className="menu__item">
                     <Link
                        to='/pages'
                        className="menu__link">
                        All pages
                    </Link>
                    </li>
                    <li className="menu__item">
                    <a
                        href='#'
                        className="menu__link">
                        About us
                    </a>
                    </li>
                </ul>
                </nav>
            </header>
        )
    }
}

export default Header