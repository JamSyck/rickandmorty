import React from 'react'
import UseChapter from '../hooks/UseChapter';
import {Link} from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import Card from 'react-bootstrap/Card';

function Episodes() {

  const{chapter}=UseChapter();

  return (
    <div>
      <NavbarApp/>
      <h1>EPISODES</h1>
      <div className='body-list-chapters'>
        {chapter.map(data=>(
          <Card>
          <Card.Header as="h5">{data.id}</Card.Header>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores ipsa accusantium reiciendis natus magni ab commodi eligendi.
            </Card.Text>
            <Link className="btn btn-success" to={`/episodes/${data.id}`}>Details</Link>
          </Card.Body>
        </Card>
        ))}
      </div>
    </div>
  )
}

export default Episodes