import React from 'react'
import UseWorld from '../hooks/UseWorld';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import ListGroup from 'react-bootstrap/ListGroup';

function Locations() {

  const{world}=UseWorld();

  return (
    <div>
      <NavbarApp/>
      <h1>LOCATIONS</h1>
      <div className='body-list-locations'>
      <button className="btn btn-dark">Anterior</button>
      <div>
      {world.map(data=>(
        <div>
          <ListGroup>
            <Link to={`/locations/${data.id}`}>
              <ListGroup.Item action variant="light">
                {data.name}
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </div>
      ))}
      </div>
      <button className="btn btn-dark">Siguiente</button>
      </div>
    </div>
  )
}

export default Locations