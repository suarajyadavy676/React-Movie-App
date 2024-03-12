import { useEffect, useState } from 'react'
import axios from 'axios'
import SampleMovieCard from '../components/SampleMovieCard'

function Action() {
  const [data,setData] = useState([])
  // console.log(data)
  async function fetchData(){
    try {
      let res = await axios.get(`https://api.sampleapis.com/movies/animation`)
      setData(res.data) 
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='grid grid-cols-1 w-5/6 mx-auto my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {/* <h1>Action</h1> */}
    {data?.map(ele=><SampleMovieCard {...ele} key={ele.id}/>)}
  </div>
  )
}

export default Action
