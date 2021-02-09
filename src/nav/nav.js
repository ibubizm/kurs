import React from 'react'
import './nav.scss'

class Nav extends React.Component{
    render(){
        return(
            <nav className="nav">
                <div className="container">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__links" href="/">Main</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__links" href="/about">About</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__links" href="/contact">Contacts</a>
                        </li>   
                
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav