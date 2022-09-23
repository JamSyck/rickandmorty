import { useState, useEffect } from "react"

const UseWorld = () => {

    const[world,setWorld]=useState([]);

    useEffect(()=>{
        async function getdata(){
            const list = await fetch ('https://rickandmortyapi.com/api/location')
            const data = await list.json()
            setWorld(data.results)
        }
        getdata();
    },[])

  return {
    world
  }
}

export default UseWorld