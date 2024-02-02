import { Link } from "react-router-dom"
import '../../styles/header.scss'
import Logo from '../../assets/logo.svg'

function Header() {
    return (
        <div className="header">
            <nav className="navbar">
                <img src={Logo} alt="logo" className="navbar__img"/>
                <div className="navbar__links">
                    <Link to="/">Accueil</Link>
                    <Link to="/About">A Propos</Link>
                </div>
            </nav>
        </div>
    )
}
export default Header;