import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarApp from '../components/NavbarApp/NavbarApp';

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
      <h1>{character.name}</h1>
    </div>
  )
}

export default CharactersDetail