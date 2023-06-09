import React, {useState} from "react" ;
import '../../styles/collapse.scss';
import arrow from '../../assets/arrow.png'

export default function Collapse({title, content}) {

  const [toggle, setToggle] = useState(false);

  return (
    
          <article className="collapse" >
              <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                  {title}
                  <img 
                      className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                      src={arrow} 
                      alt="show content" 
                  />
              </h3>
              <p className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                  {Array.isArray(content) ? content.map((item, index) => {
                      return (
                          <p key={index}>{item}</p>
                      )
                  }) : content
                  }
              </p> 
          </article>
      
  )
}