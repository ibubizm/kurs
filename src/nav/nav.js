
import './nav.scss'

function Nav(props){
    return(
        <nav className="nav">
            <NavList nav={props.nav} />
        </nav>
    )
}

function NavList(props){
    let item_list = props.nav
    let po = item_list.map(item =>
        <li key={item.name} className="nav__item">
            <a className="nav__links" href={item.link}>{item.name}</a>
        </li>
        )
    return(
        <div className="container">
                <ul className="nav__list">
                    {po}
                </ul>
            </div>
    )
}

export default Nav