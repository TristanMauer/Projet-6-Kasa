import logo from '../../assets/logo-blanc.png';
import  '../../styles/Footer.css';

function Footer(){
    return (
        <div className='footer'>
        <img className="logo-kasa-blanc" src={logo} alt="logo de l'agence kasa" />
        <p> © 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer