import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import NavbarApp from '../components/NavbarApp/NavbarApp'

function EpisodesDetail() {

  const{id}=useParams();
  const[chapter,setChapter]=useState([]);

  useEffect(()=>{
    getdetail();
  },[])

  const getdetail = async() => {
    const detail = await fetch (`https://rickandmortyapi.com/api/episode/${id}`)
    const data = await detail.json()
    setChapter(data)
  }

  return (
    <div>
      <NavbarApp/>
      <div>
        {chapter.id}
      </div>
    </div>
  )
}

export default EpisodesDetail