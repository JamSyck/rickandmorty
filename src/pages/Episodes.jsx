import React from 'react'
import UseChapter from '../hooks/UseChapter';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import Card from 'react-bootstrap/Card';
import cover from '../components/images/cover.jpg';
import '../styles/Episodes.css';

function Episodes() {

  const{chapter,page,prev,next}=UseChapter();

  return (
    <div>
      <NavbarApp/>
      <h1 className='title'>EPISODES</h1>
      <div className='body-list-chapters'>
        {chapter.map(data=>(
        <Card>
          <Card.Header as="h5">{data.id}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={cover}/>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores ipsa accusantium reiciendis natus magni ab commodi eligendi.
            </Card.Text>
            <Link className="btn btn-success" to={`/episodes/${data.id}`}>Details</Link>
          </Card.Body>
        </Card>
        ))}
      </div>
      <div className='btn-page'>
        <button onClick={prev} className="btn btn-primary">Anterior</button>
        <h3>{page}</h3>
        <button onClick={next} className="btn btn-primary">Siguiente</button>
      </div>
      <FooterApp/>
    </div>
  )
}

export default Episodes