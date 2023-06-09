import { Link} from 'react-router-dom'
import  '../../styles/Card.scss'


function Card({id, title, cover}) {

return (
    <section className='logements'>
    <Link to={`/FicheLogement/${id}`  } className='link--card'>
        <article className='card' id={id}>
        <img src={cover} alt={title} className='image-carte' />
        <h3 className='titre-carte'>{title}</h3>
        </article>
        
    </Link>
    </section>
)
}

export default Card ;