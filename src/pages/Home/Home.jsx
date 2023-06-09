import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery.jsx'
import pictureBanner from "../../assets/banner.png"



function Home() {
  return (
    <div>
    
     <Banner texte="Chez vous, partout et ailleurs" picture={pictureBanner}/>
     <Gallery/>
    </div>
  )
}

export default Home