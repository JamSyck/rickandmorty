import React from 'react'
import UseWorld from '../hooks/UseWorld';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import ListGroup from 'react-bootstrap/ListGroup';
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
          <button onClick={prev} className="btn btn-dark">Anterior</button>
        </div>
        <div>
        {world.map(data=>(
          <ListGroup>
            <Link className='list-link' to={`/locations/${data.id}`}>
              <ListGroup.Item action variant="light">
                {data.name}
              </ListGroup.Item>
            </Link>
          </ListGroup>
        ))}
        </div>
        <div>
          <button onClick={next} className="btn btn-dark">Siguiente</button>
        </div>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Locations