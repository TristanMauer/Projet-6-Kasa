import pictureApropos from "../../assets/image-apropos.png"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/collapse/Collapse"
import dataApropos from "../../datas/apropos.json"
import "../../styles/collapse.scss"
import "../../styles/Apropos.scss"


function Apropos() {

    return (
        <div>
         
            <Banner texte="" picture={pictureApropos}/>
            <section className="collapse">
          <div className="collapse__dropdown">
            {dataApropos.map(item => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </section>
       
        </div>
    )
}

export default Apropos