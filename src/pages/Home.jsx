import React from 'react'
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import Carousel from 'react-bootstrap/Carousel';
import images from '../components/images/images';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <NavbarApp/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br/>
      <div className='text'>
        <h1>Rick and Morty</h1>
        <p>Rick Sanchez is an example of the typical "mad scientist." He is a genius, but he is irresponsible, alcoholic, selfish, a bit depressed and with little sanity. Rick for different reasons ends up moving to his daughter Beth's house and at that moment he meets his grandson Morty; a 14-year-old boy, shy and not very smart. Joining his grandson, Rick and Morty experience a variety of adventures throughout the cosmos and parallel universes. And it is through so many experiences and reflections that Rick seeks that his grandson Morty does not end up like his father, Jerry, a very unsuccessful man who, despite having good intentions, turns out to be quite useless on many occasions and depends a lot on his wife, Beth, Rick's daughter.
        Despite being very close, Rick and his grandson experience times when Morty's sister, Summer, sometimes joins in on Rick's colorful escapades.</p>
      </div>
      <br></br>
      <h1>TRAILERS</h1>
      <br/>
      <div className="trailers">
        <iframe width="426" height="240" src="https://www.youtube.com/embed/MkekGuqcbwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="426" height="240" src="https://www.youtube.com/embed/Tm7dFM_v57A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="426" height="240" src="https://www.youtube.com/embed/P9WZhGMlDBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/>
      <FooterApp/>
    </div>
  )
}

export default Home