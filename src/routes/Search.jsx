import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/Context'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

function Search() {
  const {state} = useContext(GlobalContext)
  const {search} = state
  // console.log(state,"search: ",search)
  const [data,setData] = useState([])
  // console.log(data)
  const navigate = useNavigate()
  let apiKeys = "7f4ccb39"
  async function fetchData(){
    try {
      let res = await axios({
        method:"get",
        url:`https://www.omdbapi.com/?s=${search}&apikey=${apiKeys}`
      })
      setData(res.data.Search)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    let timeID = setTimeout(()=>{
      if(search.length == 0){
        navigate("/")
      }
      fetchData()
    },2000)
    return ()=>clearTimeout(timeID)
  },[search])
  return (
    <div className='grid grid-cols-1 w-5/6 mx-auto my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {data?.map(ele=><MovieCard {...ele} key={ele.imdbID} />)}
    </div>
  )
}

export default Search
