import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import '../styles/CharacterDetail.css';

function CharactersDetail() {

  const{id}=useParams();
  const[character,setCharacter]=useState([]);

  useEffect(()=>{
    getdetail();
  },[])

  const getdetail = async() => {
    const detail = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    const data = await detail.json()
    setCharacter(data)
  }

  return (
    <div>
      <NavbarApp/>
      <h1 className='title'>{character.name}</h1>
      <div className='detail-character'>
        <div>
          <img className='photo' src={character.image}/>
        </div>
        <div className='details'>
          <h5>Status</h5>
          <p>{character.status}</p>
          <h5>Specie</h5>
          <p>{character.species}</p>
          <h5>Type</h5>
          <p>{character.type}</p>
          <h5>Gender</h5>
          <p>{character.gender}</p>
          <h5>Created</h5>
          <p>{character.created}</p>
          <button onClick={()=>window.history.back(-1)} className="btn btn-success">Return</button>
        </div>
      </div>
      <FooterApp/>
    </div>
  )
}

export default CharactersDetail