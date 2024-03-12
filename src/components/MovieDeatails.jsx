import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SampleMovieCard from './SampleMovieCard'

function MovieDeatails() {
  const {id}= useParams()
  // console.log("id",id)
  const [data,setData]=useState([])
  // console.log("data",data)
  async function fetchApi(){
    try {
      let res = await axios({
        method:"get",
        url:`https://api.sampleapis.com/movies/animation/${id}`
      })
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchApi()
  },[id])
  return (
    <div>
      <div className='grid grid-cols-1 w-5/6 mx-auto my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {/* <h1>Action</h1> */}
    {<SampleMovieCard {...data} key={data.id}/>}
  </div>
    </div>
  )
}

export default MovieDeatails
