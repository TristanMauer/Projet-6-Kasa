import { Link } from 'react-router-dom'
import  '../../styles/Header.css'
import Logo from '../../assets/logo-kasa.png'
 
function Header() {
    return (
        <nav>
            <img className="logo-kasa" src={Logo} alt="logo de l'agence kasa" />
            <div>
            <Link to="/" className='liens'>Accueil</Link>
            <Link to="/Apropos" className='liens'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header