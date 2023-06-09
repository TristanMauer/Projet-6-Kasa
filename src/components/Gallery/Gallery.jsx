import '../../styles/gallery.scss'
import datas from '../../datas/logementList'
import Card from '../Cards/Card.jsx'

export default function Gallery() {

    return (
        <main className='gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}