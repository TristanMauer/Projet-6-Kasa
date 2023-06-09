import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import datasLogement from '../../datas/logementList';
import '../../styles/logement.scss';
import Carrousel from "../../components/Carousel/Carrousel";
import Collapse from '../../components/collapse/Collapse';
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";



 const Logement = () => {
  const { id } = useParams();
  const [imageSlider, setImageSlider] = useState([]);
  const [dataCurrentAccomodation, setDataCurrentAccomodation] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
  
	const fetchData = () => {
	  const accommodation = datasLogement.find(data => data.id === id);
	  if (accommodation) {
		setDataCurrentAccomodation(accommodation);
		setImageSlider(accommodation.pictures);
	  } else {
		navigate("../Error/Error.jsx"); // Redirection vers la page d'erreur
	  } 
	};
  
	fetchData();
  }, [id, navigate]);


  const name = dataCurrentAccomodation.host?.name?.split(' ') || [];
  const rating = dataCurrentAccomodation.rating;
  const description = dataCurrentAccomodation.description;
  const equipments = dataCurrentAccomodation.equipments || [];
  const tags = dataCurrentAccomodation.tags || [];

  return (
	<div>
      <Carrousel imageSlider={imageSlider} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation.title}</h1>
        <p>{dataCurrentAccomodation.location}</p>
           <div>
             {tags.map((tag, index) => (
  				<button key={index}>{tag}</button>
				))}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation.host?.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < rating ? redStar : greyStar}
                  alt="star"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"} content={equipments} />
			  </div>
        </div>
		
      </main>
	  </div>
  );
};

export default Logement