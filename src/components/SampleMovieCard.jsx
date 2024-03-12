import { useNavigate,Link } from "react-router-dom"

function SampleMovieCard(props) {
  const {posterURL,title,imdbId,id} = props
  const navigate = useNavigate()
  function handleClick (){
    // console.log("click")
    navigate(`/action-adventure/movie/details/${id}`)
  }
  return (
    <div onClick={handleClick} className="border-2 border-red-900 border-solid text-center mx-auto">
    <img src={posterURL} alt="Poster"/>
    <p>Title : {title}</p>
    <p>imdbID : {imdbId}</p>
    <Link to={`/action-adventure/movie/details/${id}`} className="hover:bg-yellow-300">Movie details...</Link>
  </div>
  )
}

export default SampleMovieCard
