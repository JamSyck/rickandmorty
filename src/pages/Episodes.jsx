import React from 'react'
import UseChapter from '../hooks/UseChapter';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cover}/>
            <Card.Body>
              <Card.Title>{data.id}. {data.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><p><strong>Air date: </strong>{data.air_date}</p></ListGroup.Item>
              <ListGroup.Item><p><strong>Episode: </strong>{data.episode}</p></ListGroup.Item>
            </ListGroup>
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

export default Episodes