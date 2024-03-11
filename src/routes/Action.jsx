import React, { useEffect } from 'react'
import axios from 'axios'

function Action() {
  async function fetchData(){
    try {
      let res = await axios.get(`https://api.sampleapis.com/movies/animation`)
      
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Action
