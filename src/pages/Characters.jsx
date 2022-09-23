import React from 'react'
import UsePerson from '../hooks/UsePerson';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import Card from 'react-bootstrap/Card';

function Characters() {

  const{person}=UsePerson();

  return (
    <div>
      <NavbarApp/>
      <h1>CHARACTERS</h1>
      {person.map(data=>(
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image}/>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Link className="btn btn-info" to={`/characters/${data.id}`}>Details</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
      <div>
        <button className="btn btn-primary">Anterior</button>
        <button className="btn btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

export default Characters