import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'
import Footer from './components/Footer'

function App() {
  localStorage.setItem("loginData",JSON.stringify({email:"h",password:"22"}))
  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
