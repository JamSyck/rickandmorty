import { useState, useEffect } from 'react'

const UsePerson = () => {

    const[person,setPerson]=useState([]);

    useEffect(()=>{
        async function getdata(){
            const list = await fetch ('https://rickandmortyapi.com/api/character')
            const data = await list.json()
            setPerson(data.results)
        }
        getdata();
    },[])

  return {
    person
  }
}

export default UsePerson