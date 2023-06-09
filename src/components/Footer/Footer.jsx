import logo from '../../assets/logo-blanc.png';
import  '../../styles/Footer.scss';

function Footer(){
    return (
        <footer className='footer'>
        <img className="logo-kasa-blanc" src={logo} alt="logo de l'agence kasa" />
        <p className="footer_copyright"> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer