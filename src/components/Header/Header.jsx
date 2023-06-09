import { NavLink } from 'react-router-dom'
import  '../../styles/Header.scss'
import logo from '../../assets/logo-kasa.png'
 

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><img src={logo} className="logo" alt="Kasa logo." /></NavLink>
                </li>
                <li className="align-right home">
                    <NavLink to="/" className={(linkData) => (linkData.isActive ? "active" : 'none')}>Accueil</NavLink>
                </li>
                <li >
                    <NavLink to="/Apropos" className={(linkData) => (linkData.isActive ? "active" : 'none')}>À Propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}