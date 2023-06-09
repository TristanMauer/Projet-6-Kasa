import { Link } from "react-router-dom";
import  "../../styles/Erreur.scss";

function Error() {
    return (
    
      <div className="message-erreur">
        
        <h1 className="message-404">404</h1>
        <p className="p-erreur">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="lien-accueil">
				Retourner sur la page d’accueil
			</Link>
      </div>
    )
  }
  
  export default Error