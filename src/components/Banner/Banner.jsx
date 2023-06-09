import  "../../styles/Banner.scss"


function Banner({picture, texte}){
    return (
        <div className="banner">
            
            <img className="banner-picture" src={picture} alt="falaise au bord de la mer" />
            <span className="banner-texte">{texte}</span>
        </div>
    )
}

export default Banner 