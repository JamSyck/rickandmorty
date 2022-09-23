import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import NavbarApp from '../components/NavbarApp/NavbarApp';

function LocationsDetail() {

    const{id}=useParams();
    const[world,setWorld]=useState([]);

    useEffect(()=>{
        getdetail();
    },[])

    const getdetail = async() => {
        const detail = await fetch (`https://rickandmortyapi.com/api/location/${id}`)
        const data = await detail.json()
        setWorld(data)
    }

  return (
    <div>
        <NavbarApp/>
        <h1>{world.name}</h1>
    </div>
  )
}

export default LocationsDetail