import { useState, useEffect } from "react"

const UseWorld = () => {

  const[world,setWorld]=useState([]);
  const[page,setPage]=useState(1);

  function prev(){
    if(page<=1){
      page(1)
    }else{
      setPage(page - 1)
    }
  }
  function next(){
    if(page>=7){
      page(7)
    }else{
      setPage(page + 1)
    }
  }

  useEffect(()=>{
    async function getdata(){
      const list = await fetch (`https://rickandmortyapi.com/api/location?page=${page}`)
      const data = await list.json()
      setWorld(data.results)
    }
    getdata();
  },[page])

  return {
    world,
    page,
    prev,
    next
  }
}

export default UseWorld