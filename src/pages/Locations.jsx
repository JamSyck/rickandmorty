import React from 'react'
import UseWorld from '../hooks/UseWorld';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/Locations.css'

function Locations() {

  const{world,page,prev,next}=UseWorld();

  return (
    <div>
      <NavbarApp/>
      <h1 className='title'>LOCATIONS</h1>
      <h4>{page}</h4>
      <div className='body-list-locations'>
        <div>
          <button onClick={prev} className="btn btn-dark">Prev</button>
        </div>
        <div>
        {world.map(data=>(
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>{data.name}</Accordion.Header>
              <Accordion.Body>
                <p><strong>Type: </strong>{data.type}</p>
                <p><strong>Dimension: </strong>{data.dimension}</p>
                <p><strong>Created: </strong>{data.created}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
        </div>
        <div>
          <button onClick={next} className="btn btn-dark">Next</button>
        </div>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Locations