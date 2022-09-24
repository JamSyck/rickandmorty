import { useState, useEffect } from 'react'

const UseChapter = () => {

  const[chapter,setChapter]=useState([]);
  const[page,setPage]=useState(1);

  function prev(){
    if(page<=1){
      page(1)
    }else{
      setPage(page - 1)
    }
  }
  function next(){
    if(page>=3){
      page(3)
    }else{
      setPage(page + 1)
    }
  }

  useEffect(()=>{
    async function getdata(){
      const list = await fetch (`https://rickandmortyapi.com/api/episode?page=${page}`)
      const data = await list.json()
      setChapter(data.results)
    }
    getdata();
  },[page])

  return {
    chapter,
    page,
    prev,
    next
  }
}

export default UseChapter