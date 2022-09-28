import React from 'react'
import UsePerson from '../hooks/UsePerson';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import Card from 'react-bootstrap/Card';
import '../styles/Characters.css';

function Characters() {

  const{person,page,prev,next}=UsePerson();

  return (
    <div>
      <NavbarApp/>
      <h1 className='title'>CHARACTERS</h1>
      <div className='body-cards-characters'>
      {person.map(data=>(
        <Card className='card-character' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={data.image}/>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Link className="btn btn-info" to={`/characters/${data.id}`}>Details</Link>
          </Card.Body>
        </Card>
      ))}
      </div>
      <div className='btn-page'>
        <button onClick={prev} className="btn btn-primary">Prev</button>
        <h3>{page}</h3>
        <button onClick={next} className="btn btn-primary">Next</button>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Characters