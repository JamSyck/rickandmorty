import { useState, useEffect } from 'react'

const UseChapter = () => {

    const[chapter,setChapter]=useState([]);

    useEffect(()=>{
        async function getdata(){
            const list = await fetch ('https://rickandmortyapi.com/api/episode')
            const data = await list.json()
            setChapter(data.results)
        }
        getdata();
    },[])

  return {
    chapter
  }
}

export default UseChapter