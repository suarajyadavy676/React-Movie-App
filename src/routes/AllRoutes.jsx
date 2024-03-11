import { Routes,Route } from 'react-router-dom'
import AllMovie from '../components/AllMovie'
import Search from './Search'

function AllRoutes() {
  return (
    <Routes>
    <Route path='/' element={<AllMovie/>}/>
    <Route path='/search' element={<Search/>}/>
    </Routes>
  )
}

export default AllRoutes
