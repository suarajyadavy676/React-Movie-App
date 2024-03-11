import axios from 'axios'
import {  useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function AllMovie() {
  const [data,setData] = useState([])
  // console.log(data)
  let apiKeys = "7f4ccb39"
  async function fetchData(){
    try {
      let res = await axios({
        method:"get",
        url:`https://www.omdbapi.com/?s=iron&apikey=${apiKeys}`
      })
      setData(res.data.Search)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='grid grid-cols-1 w-5/6 mx-auto my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {data?.map(ele=><MovieCard {...ele} key={ele.imdbID} />)}
    </div>
  )
}

export default AllMovie
