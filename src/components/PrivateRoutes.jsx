import { useContext } from "react"
import { GlobalContext } from "../context/Context"
import { Navigate } from "react-router-dom"
function PrivateRoutes({children}) {
  const {state} = useContext(GlobalContext)
  const {loginEmail, loginPassword} = state
  // console.log("email : ",loginEmail,"password: ",loginPassword)
  // console.log(state)
  let  {email,password} = JSON.parse(localStorage.getItem("loginData"))
  // console.log(localData)
  if(!(loginEmail == email && loginPassword == password)){
    return <Navigate to="/login"/>
  }
  return children
}

export default PrivateRoutes
