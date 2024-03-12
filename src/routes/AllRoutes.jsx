import { Routes,Route } from 'react-router-dom'
import AllMovie from '../components/AllMovie'
import Search from './Search'
import Action from './Action'
import MovieDeatails from '../components/MovieDeatails'

function AllRoutes() {
  return (
    <Routes>
    <Route path='/' element={<AllMovie/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/action-adventure' element={<Action/>}/>
    <Route path='/action-adventure/movie/details/:id' element={<MovieDeatails/>}/>
    </Routes>
  )
}

export default AllRoutes
